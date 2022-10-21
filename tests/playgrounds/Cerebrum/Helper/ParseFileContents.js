/**
 * Blockly Cerebrum Implementation
 * 
 * ParseFileContents.js
 *  - This script contains functions for parsing a file and parts of the file.  It calls functions from BuildBlocksFromCode.js once it has parsed lines.
 * 
 * Written by Adam Burich, Summer of 2022
 * 
 */

import {buildGlobalBlock, buildCallBlock, buildLogicalExpressionBlock, buildObjectMessageHandlerBlock, buildCommentBlock, buildParamBlocks, buildValBlocks, buildVariableSetBlock} from './BuildBlocksFromCode.js';
import { mlc } from './MultiLineComment.js';
import { f0 } from './BuildIf.js';

const SPECIAL_CHARS = ["#", "$"];
const GAME_MANAGER_RWORDS = [
    "if", "else", "then", "dochoice", "endif", "pause", "waitfor", "ison", "isoff",
    "turnon", "turnoff", "goto", "label", "do", "return", "create", "destroy", "debug.on", "debug.off", 
    "debugCanvas", "debugcanvas.off", "debugcanvas.on", "debug.delay", "game.delay", "prompt", 
    "speaker1", "speaker2", "wait"
];
const OMH_CALLS = [
    'follow', 'switchtoscene', 'clickable_reset', 'localposition', 'clickable.ispressed',
    'clickable.resetpressed', 'clickable', 'playsound', 'stopsound', 'play', 'jump',
    'says', 'on', 'off', 'delete', 'exists', 'localrotatetox', 'localrotatex',
    'rotatetox', 'rotatex', 'localmovex', 'movex', 'matchrotation', 'parentto',
    'attachto', 'outline', 'outline.on', 'outline.off', 'outline.color',
    'outline.check', 'param', 'math.number', 'params', 'localrotatetoy',
    'localrotatey', 'rotatetoy', 'rotatey', 'localmovey', 'movey', 'localrotatetoz',
    'localrotatez', 'rotatetoz', 'rotatez', 'localmovez', 'movez', 'menu.choice',
    'menu.result', 'menu.done', 'menu.choices', 'menu.question', 'menu.on', 
    'setitemdatetime', 'setitemtext', 'setitemdate', 'setmaterial', 'scale', 
    'align', 'orient', 'grab', 'release', 'lookat', 'lookatme',
];
const GLOBALS = ['setglobal', 'getGlobal'];

function parseExpression(expression){
    
}

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
    let parentBlock = null;
    let newBlocks = [];
    for(let i = 0; i < arr.length; i++){
        let thisBlock;
        if(arr[i].trim() === "/*"){
            let multi_line_comment = mlc(arr, i, workspace);
            thisBlock = multi_line_comment.block;
            i = multi_line_comment.index;
        }
        if(arr[i].trim() === "If"){
            let f0_out = f0(arr, i, workspace);
            thisBlock = f0_out.block;
            i = f0_out.index;
        }
        else if(arr[i].trim().split(" ")[0] === "Label"){
            i++;
            let funcArr = [];
            while(arr[i] != "Return"){
                funcArr.push(arr[i]);
            }
            console.log(parseArrToWorkspace(funcArr, workspace))
        }
        else{
            thisBlock = parseLineToWorkspace(arr[i], workspace);
        }
        if(thisBlock == -1){
            console.log("Error producing block at index: ", i)
            console.log("Line was: ", arr[i])
            continue;
        }
        if(parentBlock != null && thisBlock != null){
            //console.log(parentBlock);
            parentBlock.previousConnection.connect(thisBlock.previousConnection.targetConnection);
            parentBlock.nextConnection.connect(thisBlock.previousConnection);
        }
        if(thisBlock != null){
            parentBlock = thisBlock;
        }
        else{
            parentBlock = null;
        }
        newBlocks.push(thisBlock);
    }
    return newBlocks;
    
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
    line = line.trimStart(" ");
    if(line == ""){
        return workspace.newBlock("empty_line");
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

    console.log("Debug info for gameManagerCall("+line+")");
    console.log("callName: " + callName);
    console.log("args: " + args);
    console.log("End debug information for gameManagerCall");
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

export {fcallFromObject, gameManagerCall, parseArrToWorkspace, parseLineToWorkspace, parseExpression, fcall, objectMessageHandlerCall, varDecl}

