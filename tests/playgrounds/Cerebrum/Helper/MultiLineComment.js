import { connectBlocksAB } from "./BuildIf.js"
import { buildCommentBlock } from "./BuildBlocksFromCode.js";

export function mlc(arr, ind, workspace){
    let adjusted_index = ind+1;
    let comments = [];
    for(let i = adjusted_index; i < arr.length; i++){
        adjusted_index++;
        if(arr[i].trim() === "*/"){
            break;
        }
        else{
            comments.push(arr[i])
        }
    }

    let comment = comments.join("\n");
    let block = workspace.newBlock("multi_line_comment");
    block.setFieldValue(comment, "comment");

    block.initSvg();
    block.setEnabled(true);
    workspace.render();

    return {"block":block, "index":adjusted_index};
}