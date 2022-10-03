/**
 * Blockly Cerebrum Implementation
 * Module file for Cerebrum Block Library
 * 
 * This file is a module and uses all of the other js files in its directory to build a custom block library for us to use in our Cerebrum playground.
 * 
 * If you make new blocks they must either go in any of the existing files or in a new file.
 * If you make a new file with new blocks you must export them in that file and import them in this one.
 * 
 * Written by Adam Burich, Summer of 2022
 * 
 */


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