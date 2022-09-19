const SPECIAL_CHARS = ["#", "$"];
const GAME_MANAGER_RWORDS = [
    "if", "else", "then", "dochoice", "endif", "pause", "waitfor", "ison", "isoff",
    "turnon", "goto", "label", "do", "return", "create", "destroy", "debug.on", "debug.off", 
    "debugCanvas", "debugcanvas.off", "debugcanvas.on", "debug.delay", "game.delay", "prompt", 
    "speaker1", "speaker2"
];
let reader = new FileReader();

let fileInput;
let file_text;

function handleEvent(event) {
    //eventLog.textContent += `${event.type}: ${event.loaded} bytes transferred\n`;

    if (event.type === "load") {
        reader.result;
    }
}

function addListeners(reader) {
    reader.addEventListener('loadstart', handleEvent);
    reader.addEventListener('load', handleEvent);
    reader.addEventListener('loadend', handleEvent);
    reader.addEventListener('progress', handleEvent);
    reader.addEventListener('error', handleEvent);
    reader.addEventListener('abort', handleEvent);
}

function handleSelected(e) {
    //eventLog.textContent = '';
    let selectedFile = fileInput.files[0];
    if (selectedFile) {
        addListeners(reader);
        console.log((reader.readAsText(selectedFile)));
        console.log(reader.result);
    }
}

function setUpFile(workspace){
    let input = document.getElementById('upload-code')
    input.addEventListener('change', () => {
        let files = input.files;
     
        if (files.length == 0) return;
     
        /* If any further modifications have to be made on the
           Extracted text. The text can be accessed using the
           file variable. But since this is const, it is a read
           only variable, hence immutable. To make any changes,
           changing const to var, here and In the reader.onload
           function would be advisible */
        const file = files[0];
     
        let reader = new FileReader();
     
        reader.onload = (e) => {
            const file = e.target.result;
     
            // This is a regular expression to identify carriage
            // Returns and line breaks
            const lines = file.split(/\r\n|\n/);
            console.log(workspace)
            console.log(lines)
            return parseArrToWorkspace(lines, workspace);
            //textarea.value = lines.join('\n');
     
        };
     
        reader.onerror = (e) => alert(e.target.error.name);
     
        reader.readAsText(file);
    });
}

function prepareFileText(){
    return file_text.split("\n");
}

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

