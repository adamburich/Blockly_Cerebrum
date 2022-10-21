
import { parseLineToWorkspace } from "./ParseFileContents.js";
import { buildLogicalExpressionBlock } from "./BuildBlocksFromCode.js";
import { mlc } from "./MultiLineComment.js";

/**
 * Parse If
 * 
 * @param {} arr 
 * @param {*} ind 
 * @param {*} workspace
 * 
 * @return block, new parser index 
 */
function f0(arr, ind, workspace){
    //The if block that conditions and bodies get slotted into
    ind++;
    let baseBlock = null;

    let f1_out = f1(arr, ind, workspace);

    let conditionBlock = f1_out.block;
    let adjusted_index = f1_out.index;
    
    //f2 must re call f0 with index of condition if it encounters an if
    adjusted_index++;
    let f2_out = f2(arr, adjusted_index, workspace);
    let thenBlock = f2_out.block;
    //now index of else or endif
    adjusted_index = f2_out.index;
    console.log(conditionBlock)

    if(arr[adjusted_index].trim() === "Else"){
        adjusted_index++;
        baseBlock = workspace.newBlock("controls_ifelse");
        let f2_else = f2(arr, adjusted_index, workspace);
        let elseBlock = f2_else.block;
        adjusted_index = f2_else.index;
        attachElseBody(baseBlock, elseBlock);
    }else{  
        baseBlock = workspace.newBlock("controls_if");
    }

    attachCondition(baseBlock, conditionBlock);
    attachThenBody(baseBlock, thenBlock);

    baseBlock.setEnabled(true);
    baseBlock.initSvg();

    return {"block":baseBlock, "index":adjusted_index};
}

/**
 * Parse Condition
 * 
 * @param {*} arr 
 * @param {*} ind 
 * @param {*} workspace 
 * 
 * @return block, ind+1
 */
function f1(arr, ind, workspace){
    let condition_line = arr[ind];

    let block = buildLogicalExpressionBlock(workspace, condition_line);
    console.log("F1 BLOCK: ", block);

    return {"block":block, "index":ind+1}
}

/**
 * Parse Body
 *   
 * @param {*} arr 
 * @param {*} ind 
 * @param {*} workspace
 * 
 * @return block, new parser index
 */
function f2(arr, ind, workspace){
    let adjusted_index = ind;
    let blockList = [];
    for(let i = ind; i < arr.length; i++){
        adjusted_index = i;
        let blockFromLine = null;
        if(arr[i].trim() === "If"){
            //console.log("STARTING INTERNAL F0");
            let f0_out = f0(arr, i, workspace);
            //console.log("INTERNAL F0 OUT: ", f0_out)
            blockFromLine = f0_out.block;
            i = f0_out.index;
            blockList.push(blockFromLine);
        }
        else if(arr[i].trim() === "/*"){
            let multi_line_comment = mlc(arr, i, workspace);
            i = multi_line_comment.index;
            blockFromLine = multi_line_comment.block;
            blockList.push(blockFromLine);
        }
        else if(arr[i].trim() != "Endif"){
            if(arr[i].trim() === "Else"){
                break;
            }
            blockFromLine = parseLineToWorkspace(arr[i], workspace);
            //console.log("BLOCKFROMLINE: ", blockFromLine);
            if(blockFromLine == null){
                //console.log("PARSE LINE TO WORKSPACE GENERATED A NULL BLOCK");
            }
            blockList.push(blockFromLine);
        }else{
            //At this point arr[adjusted_index] === "Endif"
            break;
        }
    }

    //console.log("BLOCKLIST: ", blockList);

    let topBlock = blockList[0];
    if(blockList.length > 1){
        for(let i = 1; i < blockList.length; i++){
            connectBlocksAB(blockList[i-1], blockList[i]);
        }
    }
    return {"block":topBlock, "index":adjusted_index};
}

function attachThenBody(baseBlock, bodyBlock){
    let then_bod_connection = baseBlock.inputList[1].connection;
    let if_conn = bodyBlock.previousConnection;
    then_bod_connection.connect(if_conn);
}

function attachCondition(baseBlock, condBlock){
    let if_cond_connection = baseBlock.inputList[0].connection;
    let if_cond = condBlock.outputConnection;
    if_cond_connection.connect(if_cond);

    console.log(condBlock);
}

function attachElseBody(baseBlock, elseBodyBlock){
    let else_bod_connection = baseBlock.inputList[2].connection;
    let else_bod = elseBodyBlock.previousConnection;
    else_bod_connection.connect(else_bod);
}

function connectBlocksAB(blockA, blockB){
    let parentConnection = blockA.nextConnection;
    let childConnection = blockB.previousConnection;
    parentConnection.connect(childConnection);
}

/**
 * Increment ind when:
 * - we see a reserved word (if, then, else, endif)
 * - we call parseLineToWorkspace
 * - we parse the condition (f1)
 */

export { f0, connectBlocksAB }