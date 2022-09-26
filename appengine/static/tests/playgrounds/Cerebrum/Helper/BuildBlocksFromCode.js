import { custom_block_lib } from "../Blocks/CustomBlockLibrary.mjs";

const simpleObjectMessageHandlerCalls = "switchtoscene clickable says playsound localrotatetox localrotatetoy localrotatetoz localrotatex localrotatey localrotatez rotatetox rotatetoy rotatetoz rotatey rotatex rotatez movex movey movez localmovez localmovex localmovey setitemtext setitemdate setitemdatetime menu_question menu_choices menu_result".split(" ");

function buildVariableSetBlock(workspace, declarationValues){
    //console.log(declarationValues)
    let obj = declarationValues[0];
    let payload = declarationValues[1];
    
    let setBlock = workspace.newBlock("variables_set");
    workspace.createVariable(obj, "", obj);
    setBlock.setFieldValue(obj, "VAR");

    let valBlock;
    if(payload == "true"){
        valBlock = workspace.newBlock("logic_boolean")
        valBlock.setFieldValue(true, "BOOL");
    }
    else if(payload == "false"){
        valBlock = workspace.newBlock("logic_boolean")
        valBlock.setFieldValue(false, "BOOL");
    }
    else if(!isNaN(payload)){
        valBlock = workspace.newBlock("math_number")
        valBlock.setFieldValue(payload, "NUM");
    }
    else if(payload.charAt(0) == "$"){
        // console.log("VARIABLE ASSIGNMENT HAPPENING NOW")
        let varId = payload.substring(1, payload.length);
        // workspace.createVariable(varId, "", varId);
        // workspace.render();
        // console.log(workspace.getPotentialVariableMap())
        valBlock = workspace.newBlock("variables_get");
        valBlock.setFieldValue(varId, "VAR");
        // console.log("VARIABLE ASSIGNMENT OVER NOW")
    }
    else{
        valBlock = workspace.newBlock("text")
        valBlock.setFieldValue(payload, "TEXT");
    }

    let parentConnection = setBlock.getInput("VALUE").connection;
    let childConnection = valBlock.outputConnection;
    parentConnection.connect(childConnection);

    setBlock.setEnabled(true);
    //valBlock.setEnabled(true);

    setBlock.initSvg();
    valBlock.initSvg();
    workspace.render();
    //rerenderWorkspace(workspace);

    return setBlock;
}



function buildObjectMessageHandlerBlock(workspace, callerCallingArgs){
    let caller = callerCallingArgs[0];
    let call = callerCallingArgs[1];
    let args = callerCallingArgs[2];
    console.log("buildObjectMessageHandlerBlock called with:\n\t"+caller+"\n\t"+call+"\n\t"+args);

    let callBlock = buildCallBlock(workspace, [call, args.join(" ")], false);
    console.log(callBlock)
    let callerBlock = workspace.newBlock("object_calling");
    let callerId = caller.substring(1, caller.length);
    callerBlock.setFieldValue(callerId, "Object_Variable");
    
    //should rename the thing that makes us reference "Params" here, this isn't actually a param block its the call block with parent object calling
    let parentConnection = callerBlock.getInput("Params").connection;
    let childConnection = callBlock.previousConnection;
    parentConnection.connect(childConnection);
    
    callerBlock.setEnabled(true);
    //valBlock.setEnabled(true);

    console.log(workspace)
    console.log(args)

    //If the type of ObjectMessageHandler Call we're looking at doesn't require a param block but just some typed inputs we don't want to use buildParamBlocks(workspace, args), so instead we use buildValBlocks which is a helper to buildParamBlocks
    if(simpleObjectMessageHandlerCalls.includes(call)){
        let argBlocks = buildValBlocks(workspace, args);
        for(let i = 0; i < argBlocks.length; i++){
            let callConnection = callBlock.inputList[i].connection;
            let argConnection = argBlocks[i].outputConnection;
            callConnection.connect(argConnection);
        }
    }
    else{
        let paramBlock = buildParamBlocks(workspace, args);
        //let callConnection = callBlock.getInput("Params").connection;
        let callConnection = callBlock.inputList[0].connection;
        let paramConnection = paramBlock.previousConnection;
        callConnection.connect(paramConnection);
    }

    callBlock.initSvg();
    callerBlock.initSvg();
    workspace.render();
    return callerBlock;
}

function buildCommentBlock(workspace, comment){
    let commentBlock = workspace.newBlock("comment")
    //console.log(buildValBlocks(workspace, [comment]))
    let commentValBlock = buildValBlocks(workspace, [comment])[0];
    let parentConnection = commentBlock.getInput("comment_val").connection;
    let childConnection = commentValBlock.outputConnection;
    parentConnection.connect(childConnection);

    commentBlock.initSvg();
    commentValBlock.initSvg();
    workspace.render();

    return commentBlock;
}

function buildValBlocks(workspace, args){
    let argBlocks = [];
    for(let i = 0; i < args.length; i++){
        let valBlock;
        let payload = args[i];
        if(payload == "true" || payload == "false"){
            valBlock = workspace.newBlock("logic_boolean")
            valBlock.setFieldValue(payload === 'true', "BOOL");
        }
        else if(payload.charAt(0) == "$"){
            valBlock = workspace.newBlock("variables_get");
            let varId = payload.substring(1, payload.length);
            valBlock.setFieldValue(varId, "VAR");
        }
        else{
            if(!isNaN(payload)){
                valBlock = workspace.newBlock("math_number")
                valBlock.setFieldValue(payload, "NUM");
            }else{
                valBlock = workspace.newBlock("text")
                let payload_val = payload.substring(0, payload.length);
                valBlock.setFieldValue(payload_val, "TEXT");
            }
        }
        argBlocks.push(valBlock);
        valBlock.initSvg();
    }
    return argBlocks;
}

function buildParamBlocks(workspace, args){
    let paramBlocks = [];
    let argBlocks = buildValBlocks(workspace, args);
    for(let i = 0; i < args.length; i++){
        paramBlocks.push(workspace.newBlock("param"));
    }
    //console.log(inputs);
    for(let i = 0; i < argBlocks.length; i++){
        // console.log(inputs[i]);
        // console.log(argBlocks[i]);
        paramBlocks[i].setEnabled(true);
        paramBlocks[i].initSvg();
        let parentConnection = paramBlocks[i].getInput("param_val").connection;
        let childConnection = argBlocks[i].outputConnection;
        parentConnection.connect(childConnection);
    }
    for(let i = 1; i < paramBlocks.length; i++){
        let parentConnection = paramBlocks[i-1].nextConnection;
        let childConnection = paramBlocks[i].previousConnection;
        parentConnection.connect(childConnection);
    }
    return paramBlocks[0];
}


function buildCallBlock(workspace, callAndArgs, isGameManagerCall){
    let call = callAndArgs[0].toLowerCase();
    let args = callAndArgs[1].trimStart(" ");
    let args_arr = args.split(" ");

    //Handle some special cases - our gamemanager's ison and isoff calls can't be named those things since they're in use by default blockly so our calls are is_on and is_off - this is fine we just have to catch it and translate
    if(call == "do"){
        call = "do_return";
        //console.log("Identified Do call with args " + args_arr)
    }else if(call == "ison"){
        call = "is_on";
    }else if(call == "isoff"){
        call = "is_off";
    }

    var result = custom_block_lib.filter(obj => {
        return obj.type === call
      })
    //console.log(result);
    if(result.length == 0){
        return null;
    }

    let init_block = workspace.newBlock(call);
    console.log("GameManagerCall For '"+call+"' Has Constructed Base Block:");
    console.log(init_block);

    let required_args = result[0].args0;
    //console.log(init_block.getConnections_());

    let inputs = init_block.inputList;
    console.log(inputs);
    /**
     * TODO:
     *   - decide variety of do block dynamically
     */
    if(required_args){
        console.log("\tRequired args:\n\t\t" + required_args);
        console.log("\n\tOffered args:\n\t\t" + args);
        let argBlocks = [];
        for(let i = 0; i < args_arr.length; i++){
            let valBlock;
            let payload = args_arr[i];
            if(payload == "true" || payload == "false"){
                valBlock = workspace.newBlock("logic_boolean")
                valBlock.setFieldValue(payload === 'true', "BOOL");
            }
            else if(payload.charAt(0) == "$"){
                valBlock = workspace.newBlock("variables_get");
                let varId = payload.substring(1, payload.length);
                valBlock.setFieldValue(varId, "VAR");
            }
            else{
                if(!isNaN(payload)){
                    valBlock = workspace.newBlock("math_number")
                    valBlock.setFieldValue(payload, "NUM");
                }else{
                    valBlock = workspace.newBlock("text")
                    let payload_val = payload.substring(1, payload.length-1);
                    valBlock.setFieldValue(payload_val, "TEXT");
                }
            }
            argBlocks.push(valBlock);
            valBlock.initSvg();
        }
        //console.log(inputs);
        for(let i = 0; i < argBlocks.length; i++){
            // console.log(inputs[i]);
            // console.log(argBlocks[i]);
            if(!isGameManagerCall && argBlocks[i].getConnections_().length == 0){
                console.log(argBlocks[i].getConnections_());
                let del = new Blockly.Events.BlockDelete(argBlocks[i]);
                del.run(true);
                // argBlocks[i].setEnabled(false);
                // argBlocks[i].set
                //return;
            }
            if(inputs[i] != undefined){
                let parentConnection = init_block.getInput(inputs[i].name).connection;
                let childConnection = argBlocks[i].outputConnection;
                parentConnection.connect(childConnection);
            }
        }
    }
    init_block.setEnabled(true);
    //valBlock.setEnabled(true);

    init_block.initSvg();
    workspace.render();


    return init_block;
}

export {buildCallBlock, buildObjectMessageHandlerBlock, buildCommentBlock, buildParamBlocks, buildValBlocks, buildVariableSetBlock}