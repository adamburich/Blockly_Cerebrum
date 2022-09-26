import { objectMessageHandlerBlocks } from "./ObjectMessageHandlerBlocks.js";
import { helperBlocks } from "./HelperBlocks.js";
import { gameManagerCallBlocks } from "./GameManagerCallBlocks.js";
import { moddedBlocks } from "./ModifiedStockBlocks.js";
import { inputBlocks } from "./InputBlocks.js";
import { controlFlowBlocks } from "./ControlFlowBlocks.js";
import { logicBlocks } from "./LogicBlocks.js";

let custom_block_lib = [];

custom_block_lib = custom_block_lib.concat(helperBlocks);
custom_block_lib = custom_block_lib.concat(objectMessageHandlerBlocks);
custom_block_lib = custom_block_lib.concat(gameManagerCallBlocks);
custom_block_lib = custom_block_lib.concat(inputBlocks);
custom_block_lib = custom_block_lib.concat(moddedBlocks);
custom_block_lib = custom_block_lib.concat(controlFlowBlocks);
custom_block_lib = custom_block_lib.concat(logicBlocks);
export {custom_block_lib}