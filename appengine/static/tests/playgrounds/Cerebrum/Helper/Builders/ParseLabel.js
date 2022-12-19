import { parseArrToWorkspace } from "./ParseFileContents.js";
import {attachCondition, attachThenBody} from "./BuildIf.js"

/**
 * Parse Body
 *   
 * @param {*} arr 
 * @param {*} ind 
 * @param {*} workspace
 * 
 * @return block, new parser index
 */
 function parseLabel(arr, ind, workspace){
    let label = arr[ind].split(" ")[1];

    let nametag = workspace.newBlock("text");
    nametag.setFieldValue(label.replaceAll("'", ""), "TEXT");
    nametag.initSvg();
    nametag.setEnabled(true);

    let end = "Goto " + label;
    let start = ind+1;

    let label_block = workspace.newBlock("label");
    label_block.initSvg();
    label_block.setEnabled(true);
    attachCondition(label_block, nametag);

    let label_line_content = [];
    for(let i = start; i < arr.length; i++){
        if(arr[i].trim().toLowerCase() === "return" || arr[i].trim() === end){
            break;
        }
        else{
            label_line_content.push(arr[i]);
        }
    }

    let parse_arr_output = parseArrToWorkspace(label_line_content, workspace);
    let topBlock = parse_arr_output.block;
    attachThenBody(label_block, topBlock);
    let adjusted_index = start + parse_arr_output.index;

    return {"block":label_block, "index":adjusted_index-1};
}

export {parseLabel}
