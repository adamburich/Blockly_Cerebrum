/**
 * Blockly Cerebrum Implementation
 * 
 * BuildBlocksFromCode.js
 * LARGE SCRIPT LOTS OF STUFF IN HERE
 * - Builder functions (generally speaking there's about 1 for each type of parse function in /Helper/ParseFileContents.js) 
 * - Each function builds a set of blocks, attaches it to the workspace, and renders the workspace again
 * - In writing a builder function the blocks must be created, connected, initialized, and then the workspace rendered.
 * 
 * Written by Adam Burich, Summer of 2022
 * 
 */

import { custom_block_lib } from "../../Blocks/CustomBlockLibrary.mjs";
import { parseArrToWorkspace, buildDoReturnCall } from "./ParseFileContents.js";
import { buildBlockFromInfix } from "./ExpressionParser.js";
const simpleObjectMessageHandlerCalls = "reset switchtoscene clickable says playsound setitemtext setitemdate setitemdatetime menu_question menu_choices menu_result".split(" ");

function buildLogicalExpressionBlock(workspace, expression) {
    //console.log("EXPRESSION FROM BUILDLOGICAL: ", expression);
    let chunks;
    let op = "";
    if (expression.indexOf("!=") != -1) {
        chunks = expression.split("!=");
        op = "NEQ";
    }
    else if (expression.indexOf("==") != -1) {
        chunks = expression.split("==");
        op = "EQ";
    }
    else if (expression.indexOf("=") != -1) {
        chunks = expression.split("=");
        op = "EQ";
    }
    else if (expression.indexOf("<") != -1) {
        chunks = expression.split("<");
        op = "LT";
    }
    else if (expression.indexOf("<=") != -1) {
        chunks = expression.split("<=");
        op = "LTE";
    }
    else if (expression.indexOf(">=") != -1) {
        chunks = expression.split(">=");
        op = "GTE";
    }
    else if (expression.indexOf(">") != -1) {
        chunks = expression.split(">");
        op = "GT";
    }
    else if (expression.indexOf("$") != -1){
        let block = buildValBlocks(workspace, [expression])[0]
        //console.log(block)
        block.initSvg();
        block.setEnabled(true);
        return block;
    }
    else if (expression.indexOf("Do") != -1){
        let block = buildDoReturnCall(expression, workspace)
        block.initSvg();
        block.setEnabled(true);
        //console.log(block);
        return block;
    }
    else {
        return;
    }
    ////console.log("LOGICAL EXPRESSION CHUNKS")
    ////console.log(chunks)
    let chunkA = chunks[0].trim();
    let chunkB = chunks[1].trim();

    let valBlocks = buildValBlocks(workspace, [chunkA, chunkB]);

    let blockA = valBlocks[0];
    let blockB = valBlocks[1];

    let baseBlock = workspace.newBlock("logic_compare");
    baseBlock.setFieldValue(op, "OP");

    let root_blockA_conn = baseBlock.inputList[0].connection;
    let blockA_conn = blockA.outputConnection;
    root_blockA_conn.connect(blockA_conn);

    let root_blockB_conn = baseBlock.inputList[1].connection;
    let blockB_conn = blockB.outputConnection;
    root_blockB_conn.connect(blockB_conn);

    baseBlock.setEnabled(true);
    blockA.setEnabled(true);
    blockB.setEnabled(true);
    //valBlock.setEnabled(true);

    baseBlock.initSvg();
    blockA.initSvg();
    blockB.initSvg();
    //workspace.render();
    //rerenderWorkspace(workspace);

    return baseBlock;
}

function buildVariableSetBlock(workspace, declarationValues) {
    ////console.log(declarationValues)
    let obj = declarationValues[0];
    let payload = declarationValues[1];

    ////console.log(declarationValues)

    let setBlock = workspace.newBlock("variables_set");
    workspace.createVariable(obj, "", obj);
    setBlock.setFieldValue(obj, "VAR");

    let valBlock;
    if (payload == "true") {
        valBlock = workspace.newBlock("logic_boolean")
        valBlock.setFieldValue('TRUE', "BOOL");
    }
    else if (payload == "false") {
        valBlock = workspace.newBlock("logic_boolean")
        valBlock.setFieldValue('FALSE', "BOOL");
    }
    else if ((obj != "BloodType" && (payload.indexOf(" + ") != -1 || payload.indexOf(" - ") != -1 || payload.indexOf(" / ") != -1 || payload.indexOf(" * ") != -1))/** && (payload.trim().charAt(0) != "'" && payload.trim().charAt(payload.trim().length - 1) != "'")*/) {
       //console.log("PAYLOAD: ", payload)
       //console.log(payload.trim().charAt(0))
       //console.log(payload.trim().charAt(payload.trim().length - 1))
        //console.log("*********************** EXPRESSION BLOCK ***********************")
        valBlock = buildBlockFromInfix(workspace, payload);
        //console.log(valBlock)
    }
    else if (!isNaN(payload)) {
        valBlock = workspace.newBlock("math_number")
        valBlock.setFieldValue(payload, "NUM");
    }
    else if ((payload && payload.charAt(0) == "$") || payload.charAt(0) != "'") {
        // //console.log("VARIABLE ASSIGNMENT HAPPENING NOW")
        let offset = 0;
        if(payload.charAt(0) == "$"){
            offset = 1;
        }
        let varId = payload.substring(offset, payload.length);
        if (!workspace.getAllVariableNames().includes(varId)) {
            workspace.createVariable(varId, "", varId);
        }
        ////console.log(workspace.getAllVariableNames());
        // workspace.createVariable(varId, "", varId);
        // workspace.render();
        // //console.log(workspace.getPotentialVariableMap())
        valBlock = workspace.newBlock("variables_get");
        valBlock.setFieldValue(varId, "VAR");
        // //console.log("VARIABLE ASSIGNMENT OVER NOW")
    }
    else {
        valBlock = workspace.newBlock("text_multiline")
        valBlock.setFieldValue(payload, "TEXT");
        //console.log(valBlock)
    }

    let parentConnection = setBlock.getInput("VALUE").connection;
    let childConnection = valBlock.outputConnection;
    parentConnection.connect(childConnection);

    setBlock.setEnabled(true);
    //valBlock.setEnabled(true);

    setBlock.initSvg();
    valBlock.initSvg();
    //workspace.render();
    //rerenderWorkspace(workspace);

    return setBlock;
}

function buildEmpty(workspace){
    let block = workspace.newBlock("empty_line");
    block.initSvg();
    block.setEnabled(true);
    return block;
}

function buildGlobalBlock(workspace, callerCallingArgs) {
    let caller = callerCallingArgs[0];
    let callerId = caller.substring(0, caller.length);

    let call = callerCallingArgs[1];
    let args = callerCallingArgs[2];
   //console.log("buildObjectMessageHandlerBlock called with:\n\t" + caller + "\n\t" + call + "\n\t" + args);
   //console.log(callerCallingArgs)
    let callBlock = buildCallBlock(workspace, [call, args], false);
    ////console.log(callBlock)

    if (!workspace.getAllVariableNames().includes(callerId)) {
        workspace.createVariable(callerId, "", callerId);
    }

    let callerBlock = workspace.newBlock("object_calling");
    callerBlock.setFieldValue(callerId, "Object_Variable");

    //should rename the thing that makes us reference "Params" here, this isn't actually a param block its the call block with parent object calling
    let parentConnection = callerBlock.getInput("Params").connection;
    let childConnection = callBlock.previousConnection;
    parentConnection.connect(childConnection);

    callerBlock.setEnabled(true);

    ////console.log(workspace)
    ////console.log(args)
    let paramBlock = buildParamBlocks(workspace, args);
    //let callConnection = callBlock.getInput("Params").connection;
    let callConnection = callBlock.inputList[0].connection;
    let paramConnection = paramBlock.previousConnection;
    callConnection.connect(paramConnection);

    callBlock.initSvg();
    callerBlock.initSvg();
    //workspace.render();
    return callerBlock;
}

function buildObjectMessageHandlerBlock(workspace, callerCallingArgs) {
    //console.log(callerCallingArgs)
    let caller = callerCallingArgs[0];
    let callerId = caller.substring(0, caller.length);

    if (!workspace.getAllVariableNames().includes(callerId)) {
        workspace.createVariable(callerId, "", callerId);
    }

    let call = callerCallingArgs[1];
    let args = callerCallingArgs[2];
   //console.log("buildObjectMessageHandlerBlock called with:\n\t" + caller + "\n\t" + call + "\n\t" + args);
   //console.log(callerCallingArgs)
    let callBlock = buildCallBlock(workspace, [call, args.join(" ")], false);
    ////console.log(callBlock)

    let callerBlock = workspace.newBlock("object_calling");
    callerBlock.setFieldValue(callerId, "Object_Variable");

    //should rename the thing that makes us reference "Params" here, this isn't actually a param block its the call block with parent object calling
    let parentConnection = callerBlock.getInput("Params").connection;
    let childConnection = callBlock.previousConnection;
    parentConnection.connect(childConnection);


    ////console.log(workspace)
    ////console.log(args)
    //If the type of ObjectMessageHandler Call we're looking at doesn't require a param block but just some typed inputs we don't want to use buildParamBlocks(workspace, args), so instead we use buildValBlocks which is a helper to buildParamBlocks
    if (simpleObjectMessageHandlerCalls.includes(call)) {
       //console.log("SIMPLE OBJECT MESSAGE HANDLER CALL: ", call)
        let argBlocks = buildValBlocks(workspace, args);
        for (let i = 0; i < argBlocks.length; i++) {
            let callConnection = callBlock.inputList[i].connection;
            let argConnection = argBlocks[i].outputConnection;
            callConnection.connect(argConnection);
        }
    }
    else {
        if (args.length > 0) {
            let paramBlock = buildParamBlocks(workspace, args);
            //let callConnection = callBlock.getInput("Params").connection;
            let callConnection = callBlock.inputList[0].connection;
            let paramConnection = paramBlock.previousConnection;
            callConnection.connect(paramConnection);
        }
    }

    callerBlock.setEnabled(true);
    callBlock.initSvg();
    callerBlock.initSvg();

    //workspace.render();
    return callerBlock;
}

function buildCommentBlock(workspace, comment) {
   //console.log(comment);
    let commentBlock = workspace.newBlock("comment")
    comment = comment.replace("#", "");
    ////console.log(buildValBlocks(workspace, [comment]))
    let valBlock = workspace.newBlock("text")
    valBlock.setFieldValue(comment, "TEXT");
    let parentConnection = commentBlock.getInput("comment_val").connection;
    let childConnection = valBlock.outputConnection;
    parentConnection.connect(childConnection);

    commentBlock.initSvg();
    valBlock.initSvg();
    //workspace.render();

    return commentBlock;
}
/**
 * Builds value blocks, gets called whenever a parse or other blockbuilder call recognizes that we need a value block
 * @param {/} workspace 
 * @param {*} args 
 * @returns 
 */
function buildValBlocks(workspace, args) {
    let argBlocks = [];
   //console.log(args);
    for (let i = 0; i < args.length; i++) {
        let valBlock;
        let payload = args[i];
       //console.log(payload)
        /**
         * This absolutely has to go, this isn't remotely close to a viable way to know whether or not the payload has an expression
         * 
         */
        if (payload.indexOf("+") != -1) {
            // console.log("Printing payload of buildValBlocks")
            // console.log(payload)
            let chunks = payload.split("+");
            let argA = buildValBlocks(workspace, [chunks[0].trim()]);
            let argB = buildValBlocks(workspace, [chunks[1].trim()]);
            valBlock = workspace.newBlock("expression_arithmetic");
            let parent_connectionA = valBlock.getInput("A").connection;
            let parent_connectionB = valBlock.getInput("B").connection;
            let argA_conn = argA[0].outputConnection;
            let argB_conn = argB[0].outputConnection;
            parent_connectionA.connect(argA_conn);
            parent_connectionB.connect(argB_conn);
        }
        else if (payload == "true" || payload == "false") {
            valBlock = workspace.newBlock("logic_boolean")
            if (payload === 'true') {
                valBlock.setFieldValue('TRUE', "BOOL");
            } else {
                valBlock.setFieldValue('FALSE', "BOOL");
            }
        }
        else if (payload.indexOf("$") == 0) {
            valBlock = workspace.newBlock("variables_get");
            let varId = payload.substring(1, payload.length);
            if (!workspace.getAllVariableNames().includes(varId)) {
                workspace.createVariable(varId, "", varId);
            }
            valBlock.setFieldValue(varId, "VAR");
        }
        else {
            if (!isNaN(payload)) {
                valBlock = workspace.newBlock("math_number")
                valBlock.setFieldValue(payload, "NUM");
            } else {
                if (payload.indexOf("'") == -1) {
                    valBlock = workspace.newBlock("variables_get");
                    let varId = payload;
                    if (!workspace.getAllVariableNames().includes(varId)) {
                        workspace.createVariable(varId, "", varId);
                    }
                    valBlock.setFieldValue(varId, "VAR");
                } else {
                    valBlock = workspace.newBlock("text_multiline")
                    let payload_val = payload.substring(0, payload.length);
                    valBlock.setFieldValue(payload_val, "TEXT");
                }
            }
        }
        argBlocks.push(valBlock);
        valBlock.initSvg();
    }
    return argBlocks;
}

function buildParamBlocks(workspace, args) {
    let paramBlocks = [];
    let argBlocks = buildValBlocks(workspace, args);
    for (let i = 0; i < args.length; i++) {
        paramBlocks.push(workspace.newBlock("param"));
    }
    ////console.log(inputs);
    for (let i = 0; i < argBlocks.length; i++) {
        // //console.log(inputs[i]);
        // //console.log(argBlocks[i]);
        paramBlocks[i].setEnabled(true);
        paramBlocks[i].initSvg();
        let parentConnection = paramBlocks[i].getInput("param_val").connection;
        let childConnection = argBlocks[i].outputConnection;
        parentConnection.connect(childConnection);
    }
    for (let i = 1; i < paramBlocks.length; i++) {
        let parentConnection = paramBlocks[i - 1].nextConnection;
        let childConnection = paramBlocks[i].previousConnection;
        parentConnection.connect(childConnection);
    }
    return paramBlocks[0];
}


function buildCallBlock(workspace, callAndArgs, isGameManagerCall) {
    // console.log(callAndArgs);
    let call = callAndArgs[0].toLowerCase();
    let args = callAndArgs[1];
    let args_arr;

    //Since JS will turn an array of length 1 to a single object of its type
    if(args instanceof Array){
        args_arr = args;
    }
    else{
        args_arr = args.split(" ");
    }
    //console.log(call)

    //Handle some special cases - our gamemanager's ison and isoff calls can't be named those things since they're in use by default blockly so our calls are is_on and is_off - this is fine we just have to catch it and translate
    if (call == "do") {
        call = "do_return";
    } else if (call == "ison") {
        call = "is_on";
    } else if (call == "isoff") {
        call = "is_off";
    }

    call = call.replaceAll(".", "_")

    var result = custom_block_lib.filter(obj => {
        return obj.type === call
    })
    //console.log(result);
    if (result.length == 0) {
        //console.log("Call type not found in custom block library.")
        return null;
    }

    let init_block = workspace.newBlock(call);
    //console.log("GameManagerCall For '" + call + "' Has Constructed Base Block:");
    //console.log(init_block);

    let required_args = result[0].args0;
    //console.log(required_args)
    ////console.log(init_block.getConnections_());

    let inputs = init_block.inputList;
    ////console.log(inputs);
    //console.log("\tRequired args:\n\t\t" + required_args);
    if (required_args != undefined) {
       //console.log("\n\tOffered args:\n\t\t" + args);
        let argBlocks = buildValBlocks(workspace, args_arr);
       //console.log("DO WE MAKE IT THIS FAR");
        for (let i = 0; i < argBlocks.length; i++) {
            // //console.log(inputs[i]);
           //console.log(argBlocks[i]);
            if (!isGameManagerCall && argBlocks[i].getConnections_().length == 0) {
                ////console.log(argBlocks[i].getConnections_());
                let del = new Blockly.Events.BlockDelete(argBlocks[i]);
                del.run(true);
            }
            if (inputs[i] != undefined) {
                let parentConnection = init_block.getInput(inputs[i].name).connection;
                let childConnection = argBlocks[i].outputConnection;
                parentConnection.connect(childConnection);
            }
        }
    }
    init_block.setEnabled(true);
    //valBlock.setEnabled(true);

    init_block.initSvg();
    //workspace.render();


    return init_block;
}



export { buildGlobalBlock, buildLogicalExpressionBlock, buildCallBlock, buildObjectMessageHandlerBlock, buildCommentBlock, buildParamBlocks, buildValBlocks, buildVariableSetBlock, buildEmpty }