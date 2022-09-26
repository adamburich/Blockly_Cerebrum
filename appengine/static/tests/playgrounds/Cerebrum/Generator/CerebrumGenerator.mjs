/**
 * Aggregate file for Cerebrum Generator
 * 
 * This file is a module and uses the Bind files in this directory to define how the
 * generator should handle each type of block.  To add generation for new blocks add 
 * a block to the bind function of any of the Bind files in this directory or create 
 * a new Bind file.  
 * 
 * If you make a new Bind file you must also import it below and call its bind function 
 * with @cerebrumGenerator as param
 * 
 */

import { bindControlFlowCommand } from "./BindControlFlowCommand.js";
import { bindGameManagerCalls } from "./BindGameManagerCalls.js";
import { bindHelpers } from "./BindHelpers.js";
import { bindObjectMessageHandlersToGenerator } from "./BindObjectMessageHandlers.js";
import { bindMisc } from "./BindMisc.js";
import { bindCleaners } from "./BindCleaners.js";

var cerebrumGenerator = new Blockly.Generator('JSON');

bindHelpers(cerebrumGenerator);
bindMisc(cerebrumGenerator);
bindGameManagerCalls(cerebrumGenerator);
bindControlFlowCommand(cerebrumGenerator);
bindObjectMessageHandlersToGenerator(cerebrumGenerator);
bindCleaners(cerebrumGenerator);


export {cerebrumGenerator}



