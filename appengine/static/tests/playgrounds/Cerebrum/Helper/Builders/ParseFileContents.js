/**
 * Blockly Cerebrum Implementation
 * 
 * ParseFileContents.js
 *  - This script contains functions for parsing a file and parts of the file.  It calls functions from BuildBlocksFromCode.js once it has parsed lines.
 * 
 * Written by Adam Burich, Summer of 2022
 * 
 */

import {buildGlobalBlock, buildCallBlock, buildLogicalExpressionBlock, buildObjectMessageHandlerBlock, buildCommentBlock, buildParamBlocks, buildValBlocks, buildVariableSetBlock, buildEmpty} from './BuildBlocksFromCode.js';
import { mlc } from './MultiLineComment.js';
import { f0, connectBlocksAB } from './BuildIf.js';
import { parseLabel } from './ParseLabel.js';
import { OMH_CALLS } from "./OMH_Calls.js";
import { GAME_MANAGER_RWORDS } from './GameManager_RWORDS.js';

const SPECIAL_CHARS = ["#", "$"];

const GLOBALS = ['setglobal', 'getGlobal'];

/**
 * Parses variable declaration and returns an array of [object_name, assignment_value]
 * @param {*} line 
 * @returns 
 */
function varDecl(line){
    //var line = "$PatientName = 'Nim Ah Lee'";
    let chunks = line.split("=");
    let var_name = chunks[0];
    let exp = chunks[1];
    
    let obj_name = var_name.substring(var_name.indexOf("$")+1, var_name.length).trimEnd(" ");
    let payload_val;
    if(exp){
        payload_val = exp.trimStart(" ");
    }
    // else{
    //     //console.log(line);
    // }

    return [obj_name, payload_val];
}


/**
 * Parses array of lines and adds it to the workspace - calls several helper parsing and building functions
 * @param {*} arr 
 * @param {*} workspace 
 * 
 */
function parseArrToWorkspace(arr, workspace){
    //We have to call this or the workspace will update constantly and the page will run out of memory and crash
    Blockly.Events.disable();

    let newBlocks = [];
    for(let i = 0; i < arr.length; i++){
        let thisBlock;
        if(arr[i].trim() === "/*"){
            let multi_line_comment = mlc(arr, i, workspace);
            thisBlock = multi_line_comment.block;
            i = multi_line_comment.index;
        }
        else if(arr[i].trim().toLowerCase() === "if"){
            let f0_out = f0(arr, i, workspace);
            thisBlock = f0_out.block;
            i = f0_out.index;
        }
        else if(arr[i].trim().toLowerCase().split(" ")[0] === "label"){
            let label_output = parseLabel(arr, i, workspace);
            thisBlock = label_output.block;
            i = label_output.index;
        }
        else{
            try {
                thisBlock = parseLineToWorkspace(arr[i], workspace);
            } catch (error) {
                thisBlock = -1;
            }
        }
        if(thisBlock == -1){
            console.log("Error producing block at index: ", i)
            console.log("Line was: ", arr[i])
            continue;
        }
        newBlocks.push(thisBlock);
    }

    if(newBlocks.length > 1){
        for(let i = 1; i < newBlocks.length; i++){
            connectBlocksAB(newBlocks[i-1], newBlocks[i]);
        }
    }
    
    //Run this since we disabled events at the top of the function
    Blockly.Events.enable();

    return {"block":newBlocks[0], "index":arr.length}
    
}

/**
 * 
 * @param {*} line 
 * @param {*} workspace 
 * @returns the resulting block that gets built from whatever line we're parsing
 */
function parseLineToWorkspace(line, workspace){
    // for(let i = 0; i < line.length; i++){
    //     //console.log(line.charAt(i));
    // }
    //console.log(line);
    line = line.trim();
    if(line == ""){
        return buildEmpty(workspace);
    }
    else if(line.charAt(0) == "#"){
        return buildCommentBlock(workspace, line);
    }
    else if(line.indexOf("!=") != -1 || line.indexOf("==") != -1 || line.indexOf("<=") != -1 || line.indexOf(">=") != -1 || line.indexOf(">") != -1 || line.indexOf("<") != -1){
        return buildLogicalExpressionBlock(workspace, line);
    }
    else if(line.charAt(0) == "$" && line.indexOf("=") != -1){
        return buildVariableSetBlock(workspace, varDecl(line));
    }
    else if(lineHasGameManagerCall(line)){
        return buildCallBlock(workspace, gameManagerCall(line), true);
    }
    else if(lineHasOMH(line)){
        return buildObjectMessageHandlerBlock(workspace, objectMessageHandlerCall(line));
    }
    else if(lineHasGlobal(line)){
        return buildGlobalBlock(workspace, objectMessageHandlerCall(line))
    }
    else{
        return -1;
    }
}

function fcall(line){
    var chunks = line.split(" ");
    var fname = chunks[0]
}

/**
 * Handles ObjectMessageHandler calls and returns an array of the caller, the call name, and any args attached to the call
 * @param {*} line 
 * @returns 
 */
function objectMessageHandlerCall(line){
    let chunks = line.split(" ");
    let callName = chunks[1];
    let caller = chunks[0];
    let adjustedChunks = [];
    for(let i = 0; i < chunks.length; i++){
        if(chunks[i].charAt(0) == "'"){ 
            let arg = "";
            while(chunks[i].charAt(chunks[i].length-1) != "'"){
                arg += chunks[i] + " ";
                i++;
            }
            arg += chunks[i];
            // i++;
            adjustedChunks.push(arg);
        }
        else{
            adjustedChunks.push(chunks[i]);
        }
    }
    ////console.log("ADJUSTED CHUNKS");
    ////console.log(adjustedChunks);
    let args = [];
    for(let i = 2; i < adjustedChunks.length; i++){
        args.push(adjustedChunks[i]);
    }
    return [caller, callName, args];
}

/**
 * This function is used for both game manager calls and as a helper for ObjectMessageHandler calls
 * @param {*} line 
 * @returns 
 */
function gameManagerCall(line){
    var chunks = line.trimStart(" ").split(" ");
    let adjustedChunks = [];
    for(let i = 0; i < chunks.length; i++){
        if(chunks[i].charAt(0) == "'"){ 
            let arg = "";
            while(chunks[i].charAt(chunks[i].length-1) != "'"){
                arg += chunks[i] + " ";
                i++;
            }
            arg += chunks[i];
            i++;
            adjustedChunks.push(arg);
        }
        else{
            adjustedChunks.push(chunks[i]);
        }
    }
    // //console.log("ADJUSTED CHUNKS");
    // //console.log(adjustedChunks);
    var callName = chunks[0];
    let lineMinusCallName = line.replace(callName, "");
    // //console.log("LINE WITHOUT CALL NAME")
    // //console.log(lineMinusCallName);
    let args = [];
    if(lineMinusCallName.indexOf("+") != -1){
        args.push(lineMinusCallName.trim());
    }
    else{
        for(let i = 1; i < adjustedChunks.length; i++){
            args.push(adjustedChunks[i]);
        }
    }

   //console.log("Debug info for gameManagerCall("+line+")");
   //console.log("callName: " + callName);
   //console.log("args: " + args);
   //console.log("End debug information for gameManagerCall");
    return [callName, args];
}

function fcallFromObject(line){
    var chunks = line.split(" ");
    var objname = chunks[0];
    fcall(remaining_line)
}

function lineHasGameManagerCall(line){
    line = line.toLowerCase().trim();
    let arr = line.split(" ");
    let call = arr[0];
    for(let i = 0; i < GAME_MANAGER_RWORDS.length; i++){
        if(call === GAME_MANAGER_RWORDS[i].toLowerCase()){
            return true;
        }
    }
    return false;
}

function lineHasOMH(line){
    line = line.toLowerCase().trim();
    let arr = line.split(" ");
    let call = arr[1];
    for(let i = 0; i < OMH_CALLS.length; i++){
        if(call === OMH_CALLS[i].toLowerCase()){
            return true;
        }
    }
    return false;
}

function lineHasGlobal(line){
    line = line.toLowerCase().trim();
    let arr = line.split(" ");
    let call = arr[1];
    for(let i = 0; i < GLOBALS.length; i++){
        if(call === GLOBALS[i].toLowerCase()){
            return true;
        }
    }
    return false;
}

export {fcallFromObject, gameManagerCall, parseArrToWorkspace, parseLineToWorkspace, fcall, objectMessageHandlerCall, varDecl}

