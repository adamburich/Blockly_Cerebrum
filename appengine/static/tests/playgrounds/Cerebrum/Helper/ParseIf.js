
export {parseIfAndBuild, buildIf, giveIfBlockBackToParser}
function parseIfAndBuild(lineArray, workspace){
    let ifCond = [];
    let thenBody = [];
    let elseBody = [];
    
    //console.log(lineArray);
    // for(let i = 0; i < lineArray.length; i++){
    //     lineArray[i] = lineArray[i].trim();
    // }

    let ifIndex = lineArray.indexOf("If");
    let thenIndex = lineArray.indexOf("Then");
    let elseIndex = lineArray.indexOf("Else");
    let endIndex = lineArray.indexOf("Endif");
    let flexIndex = endIndex;
    if(elseIndex != -1){
        flexIndex = elseIndex;
    }
    //console.log(ifIndex, thenIndex, elseIndex, endIndex);

    let parentBlock = null;
    
    for(let i = 0; i < lineArray.length; i++){
        if(lineArray[i] == "If"){
            let internalIf = parseIfAndBuild(lineArray.slice(i, lineArray.length), workspace);
            parentBlock = internalIf;
            let internalArr = internalIf[0].concat(internalIf[1]).concat(internalIf[2]);
            let lineSkips = internalArr.length;
            i += lineSkips
            elseIndex = lineArray.slice(i, lineArray.length).indexOf("Else");
            if(i > elseIndex){
                elseBody = elseBody.concat(internalArr);
            }else{
                thenBody = thenBody.concat(internalArr);
            }
        }
        if(i > ifIndex && i < thenIndex){
            ifCond.push(lineArray[i]);
        }
        else if(i > thenIndex && i < flexIndex){
            thenBody.push(lineArray[i]);
        }
        else if(elseIndex != -1 && (i > elseIndex && i < endIndex)){
            elseBody.push(lineArray[i]);
        }
    }

    let baseBlock = buildIf(ifCond, thenBody, elseBody, workspace);
    
    if(parentBlock != null){
        let parentConnection = parentBlock.nextConnection;
        let myConnection = baseBlock.previousConnection;
        parentConnection.connect(myConnection);
    }

    baseBlock.setEnabled(true);
    //valBlock.setEnabled(true);

    baseBlock.initSvg();

    return [ifCond, thenBody, elseBody];
}

function buildIf(cond, thenBod, eBod, workspace){
    let condBlock = buildLogicalExpressionBlock(workspace, cond);
    let bodBlock = parseArrToWorkspace(thenBod, workspace);
    let elseBlock = null;
    if(eBod.length > 0){
        elseBlock = parseArrToWorkspace(eBod, workspace)[0];
        elseBlock.setEnabled(true);
        elseBlock.initSvg();
    }
    
    let baseBlock;
    if(elseBlock == null){
        baseBlock = workspace.newBlock("controls_if");
    } 
    else{
        baseBlock = workspace.newBlock("controls_ifelse");
        let else_bod_connection = baseBlock.inputList[2].connection;
        let else_bod = elseBlock.previousConnection;
        else_bod_connection.connect(else_bod);
    }
    let if_cond_connection = baseBlock.inputList[0].connection;
    let if_cond = condBlock.outputConnection;
    //console.log(condBlock);
    if_cond_connection.connect(if_cond);
    let if_bod_connection = baseBlock.inputList[1].connection;
    let if_bod = bodBlock.previousConnection;
    if_bod_connection.connect(if_bod);

    return baseBlock;
}

function buildCondition(cond, workspace){}
function buildBody(bod, workspace){}
function giveIfBlockBackToParser(lineArray, index, workspace){
    let block;
    return {"block":block, "index":index};
}