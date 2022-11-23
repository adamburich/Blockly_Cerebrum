/**
 * Blockly Cerebrum Implementation
 * 
 * Module file for all of the functions in the Helper directory
 * This is here so we can just import portions of the module that we need in the HTML page instead of having a <script> tag for each
 * 
 * Written by Adam Burich, Summer of 2022
 * 
 */

import { addButtons } from "./AddButtons.js";
import {fcallFromObject, gameManagerCall, parseArrToWorkspace, parseLineToWorkspace, fcall, objectMessageHandlerCall, varDecl} from "./Builders/ParseFileContents.js";
import {buildCallBlock, buildObjectMessageHandlerBlock, buildCommentBlock, buildParamBlocks, buildValBlocks, buildVariableSetBlock} from './Builders/BuildBlocksFromCode.js';
import {prepareFileText, setUpFile, handleSelected, handleEvent, codeToFiles, addListeners, updateCodeAndDownload, allowUpload} from './Builders/FileHandler.js';
import { hideUnusedGenerators } from "./Prettify.js";
import { populatePatientVars } from "./VariableSetup.js";

export {
    addButtons, fcall, fcallFromObject, gameManagerCall, parseArrToWorkspace, parseLineToWorkspace, 
    objectMessageHandlerCall, varDecl, buildCallBlock, buildObjectMessageHandlerBlock, buildCommentBlock, buildParamBlocks, 
    buildValBlocks, buildVariableSetBlock, prepareFileText, setUpFile, handleSelected, handleEvent, codeToFiles, addListeners, 
    hideUnusedGenerators, populatePatientVars, updateCodeAndDownload, allowUpload
};