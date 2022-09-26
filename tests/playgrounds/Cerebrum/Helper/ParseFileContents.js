/**
 * Blockly Cerebrum Implementation
 * 
 * ParseFileContents.js
 *  - This script contains functions for parsing a file and parts of the file.  It calls functions from BuildBlocksFromCode.js once it has parsed lines.
 * 
 * Written by Adam Burich, Summer of 2022
 * 
 */

import {buildCallBlock, buildObjectMessageHandlerBlock, buildCommentBlock, buildParamBlocks, buildValBlocks, buildVariableSetBlock, buildIfThenBlock} from './BuildBlocksFromCode.js'

const SPECIAL_CHARS = ["#", "$"];
const GAME_MANAGER_RWORDS = [
    "if", "else", "then", "dochoice", "endif", "pause", "waitfor", "ison", "isoff",
    "turnon", "goto", "label", "do", "return", "create", "destroy", "debug.on", "debug.off", 
    "debugCanvas", "debugcanvas.off", "debugcanvas.on", "debug.delay", "game.delay", "prompt", 
    "speaker1", "speaker2"
];

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
        payload_val = exp.replaceAll("'", "").trimStart(" ");
    }
    else{
        console.log(line);
    }

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
    for(let i = 0; i < arr.length; i++){
        let thisBlock;
        if(arr[i].trim() == "If"){
            let lineArr = [arr[i]];
            i++;
            while(arr[i].trim() != "Endif"){
                lineArr.push(arr[i]);
                i++;
            }
            lineArr.push(arr[i]);
            i++;

            thisBlock = parseIfBlock(lineArr, workspace);

            buildIfThenBlock(parseIfBlock(lineArr, workspace));
        }
        else{
            thisBlock = parseLineToWorkspace(arr[i], workspace);
        }
        if(parentBlock != null && thisBlock != null && thisBlock != "SKIP"){
            console.log(parentBlock);
            parentBlock.previousConnection.connect(thisBlock.previousConnection.targetConnection);
            parentBlock.nextConnection.connect(thisBlock.previousConnection);
        }
        if(thisBlock != "SKIP" && thisBlock != null){
            parentBlock = thisBlock;
        }
        else{
            parentBlock = null;
        }
    }
    
}

/**
 * 
 * @param {*} line 
 * @param {*} workspace 
 * @returns the resulting block that gets built from whatever line we're parsing
 */
function parseLineToWorkspace(line, workspace){
    // for(let i = 0; i < line.length; i++){
    //     console.log(line.charAt(i));
    // }
    line = line.trimStart(" ");
    if(line == ""){
        return "SKIP";
    }
    else if(line.charAt(0) == "#"){
        return buildCommentBlock(workspace, line);
    }
    else if(line.charAt(0) == "$"){
        //If line contains equals it is trying to set a variable, if it doesn't then we know it's an ObjectMessageHandler call
        if(line.indexOf("=") != -1){
            return buildVariableSetBlock(workspace, varDecl(line));
        }
        else{
            return buildObjectMessageHandlerBlock(workspace, objectMessageHandlerCall(line));
        }
    }
    else{
        return buildCallBlock(workspace, gameManagerCall(line), true);
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
            i++;
            adjustedChunks.push(arg);
        }
        else{
            adjustedChunks.push(chunks[i]);
        }
    }
    console.log("ADJUSTED CHUNKS");
    console.log(adjustedChunks);
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
    var callName = chunks[0];
    let args = line.substring(line.indexOf(" "), line.length);

    // console.log("Debug info for gameManagerCall("+line+")");
    // console.log("callName: " + callName);
    // console.log("args: " + args);
    // console.log("End debug information for gameManagerCall");
    return [callName, args];
}

function fcallFromObject(line){
    var chunks = line.split(" ");
    var objname = chunks[0];
    fcall(remaining_line)
}

/**
 * 
 * @param {*} lineArray 
 * @param {*} workspace 
 * 
 * @returns an array of length 3 as [ifCondition, thenBody, elseBody]
 *                                                          elseBody may be empty if the if block has no else attached.
 */
function parseIfBlock(lineArray, workspace){
    let ifCond = [];
    let thenBody = [];
    let elseBody = [];
    
    for(let i = 0; i < lineArray.length; i++){
        lineArray[i] = lineArray[i].trim();
    }

    let ifIndex = lineArray.indexOf("If");
    let thenIndex = lineArray.indexOf("Then");
    let elseIndex = lineArray.indexOf("Else");
    let endIndex = lineArray.indexOf("Endif");
    
    for(let i = 0; i < lineArray.length; i++){
        if(i > ifIndex && i < thenIndex){
            ifCond.push(lineArray[i]);
        }
        else if(i > thenIndex && i < elseIndex){
            thenBody.push(lineArray[i]);
        }
        else if(elseIndex != -1 && (i > elseIndex && i < endIndex)){
            elseBody.push(lineArray[i]);
        }
    }
    
    return [ifCond, thenBody, elseBody];
}

export {fcallFromObject, gameManagerCall, parseArrToWorkspace, parseLineToWorkspace, parseExpression, fcall, objectMessageHandlerCall, varDecl}

