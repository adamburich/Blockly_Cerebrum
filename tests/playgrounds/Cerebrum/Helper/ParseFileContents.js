const SPECIAL_CHARS = ["#", "$"];
const GAME_MANAGER_RWORDS = [
    "if", "else", "then", "dochoice", "endif", "pause", "waitfor", "ison", "isoff",
    "turnon", "goto", "label", "do", "return", "create", "destroy", "debug.on", "debug.off", 
    "debugCanvas", "debugcanvas.off", "debugcanvas.on", "debug.delay", "game.delay", "prompt", 
    "speaker1", "speaker2"
];

function parseExpression(expression){
    
}

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

function parseArrToWorkspace(arr, workspace){
    let parentBlock = null;
    for(let i = 0; i < arr.length; i++){
        let thisBlock = parseLineToWorkspace(arr[i], workspace);
        if(parentBlock != null && thisBlock != "SKIP"){
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

function parseLineToWorkspace(line, workspace){
    // for(let i = 0; i < line.length; i++){
    //     console.log(line.charAt(i));
    // }
    line = line.trimStart(" ");
    if(line == ""){
        return "SKIP";
    }
    else if(line.charAt(0) == "#"){
        if(line.trim().replaceAll("#", "").length == 0){
            return "SKIP";
        }
        else{
            return buildCommentBlock(workspace, line.replaceAll("#", ""));
        }
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

function gameManagerCall(line){
    var chunks = line.trimStart(" ").split(" ");
    var callName = chunks[0];
    let args = line.substring(line.indexOf(" "), line.length);
    //let args = chunks.slice(1, chunks.length);

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

