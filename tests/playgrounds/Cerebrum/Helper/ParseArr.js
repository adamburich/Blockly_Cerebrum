import { mlc } from './MultiLineComment.js';
import { f0, connectBlocksAB } from './BuildIf.js';
import { parseLineToWorkspace } from './ParseFileContents.js'


/**
 * Parses array of lines and adds it to the workspace - calls several helper parsing and building functions
 * @param {*} arr 
 * @param {*} workspace 
 * 
 */
function parseArrToWorkspace(arr, ind, workspace){
    //We have to call this or the workspace will update constantly and the page will run out of memory and crash
    Blockly.Events.disable();

    let newBlocks = [];
    for(let i = ind; i < arr.length; i++){
        let thisBlock;
        if(arr[i].trim() === "/*"){
            let multi_line_comment = mlc(arr, i, workspace);
            thisBlock = multi_line_comment.block;
            i = multi_line_comment.index;
        }
        else if(arr[i].trim() === "If"){
            let f0_out = f0(arr, i, workspace);
            thisBlock = f0_out.block;
            i = f0_out.index;
        }
        else{
            thisBlock = parseLineToWorkspace(arr[i], workspace);
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

    return {"block":newBlocks[0], "index":arr.length};
    
}