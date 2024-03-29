/**
 * Blockly Cerebrum Implementation
 * 
 * FileHandler.js
 *  - This is the only script that interacts directly with any file(s)
 *  - Responsible for both file uploads @setUpFile and @allowUpload and downloads (all other functions)
 * 
 * Written by Adam Burich, Summer of 2022
 * 
 */

import { parseArrToWorkspace, fblob_consolidate } from './ParseFileContents.js'
import { cerebrumGenerator } from '../../Generator/CerebrumGenerator.mjs'
import { attachThenBody } from './BuildIf.js'
import { flist } from './default_flist.js'
import { readFromS3, writeToS3 } from '../S3Handlers.js';

function codeToFiles(code) {
    let lines = code.split("\n");

    let files = [];
    let mainFile = [];

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim().indexOf("#returnless_procedure") != -1 || lines[i].trim().indexOf("#return_procedure") != -1) {
            let func = [];
            let fname = lines[i].split(":")[1];
            i++;
            while (lines[i].trim() != "#end:"+fname.trim()) {
                func.push(lines[i].substring(1, lines[i].length));
                i++;
            }
            i++;
            let funcText = func.join("\n");
            files.push({ fname, funcText });
        }
        else if (lines[i].split(" ")[0] == "Do") {
            let fCallText = lines[i].split(" ")[1].replaceAll("'", "");
            let fCallTextFile = "'" + fCallText + "'"
            let newLine = "Do " + fCallTextFile;
            mainFile.push(newLine);
        }
        else {
            mainFile.push(lines[i].substring(0, lines[i].length));
        }
    }
    let funcText = mainFile.join("\n");
    if(funcText.trim().length > 0){
        let fname = "main";
        files.push({ fname, funcText });
    }

    console.log(files)
    return files;
}

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
        //console.log((reader.readAsText(selectedFile)));
        //console.log(reader.result);
    }
}

function setUpDemo(workspace){
    let input = document.getElementById('upload-flist')
    //console.log(input);
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
            let xml_text = file;
            let xml = Blockly.Xml.textToDom(xml_text);
            Blockly.Xml.domToWorkspace(xml, workspace);

        };

        reader.onerror = (e) => alert(e.target.error.name);

        reader.readAsText(file);
    });

}

function setUpFileFromS3(data, workspace){
        let file = data
        console.log(file)
        let fname = document.getElementById("file_select_dropdown").value;
        let fblock = workspace.newBlock("procedures_defnoreturn");
        fblock.setFieldValue(fname, "NAME");
        fblock.initSvg();
        fblock.setEnabled(true);
    
    
        // This is a regular expression to identify carriage
        // Returns and line breaks
        const lines = file.split(/\r\n|\n/);
    
        let ret = parseArrToWorkspace(lines, workspace);
        let fileBlock = ret.block;
    
        attachThenBody(fblock, fileBlock);
    
        let blob = fblob_consolidate(fname, workspace);
        blob.setCollapsed(true);
    
        workspace.render();
        return ret;
    
}

function setUpFile(workspace) {
    // let input = document.getElementById('upload-code')
    // //console.log(input);
    // input.addEventListener('change', () => {
    //     let files = input.files;

    //     if (files.length == 0) return;

    //     /* If any further modifications have to be made on the
    //        Extracted text. The text can be accessed using the
    //        file variable. But since this is const, it is a read
    //        only variable, hence immutable. To make any changes,
    //        changing const to var, here and In the reader.onload
    //        function would be advisible */
    //     const file = files[0];

    //     let reader = new FileReader();

    //     reader.onload = (e) => {
    //         const file = e.target.result;

    //         let fname = input.files[0].name.split(".")[0]
    //         let fblock = workspace.newBlock("procedures_defnoreturn");
    //         fblock.setFieldValue(fname, "NAME");
    //         fblock.initSvg();
    //         fblock.setEnabled(true);


    //         // This is a regular expression to identify carriage
    //         // Returns and line breaks
    //         const lines = file.split(/\r\n|\n/);

    //         let ret = parseArrToWorkspace(lines, workspace);
    //         let fileBlock = ret.block;

    //         attachThenBody(fblock, fileBlock);

    //         let blob = fblob_consolidate(fname, workspace);
    //         blob.setCollapsed(true);

    //         workspace.render();
    //         return ret;
    //         //textarea.value = lines.join('\n');

    //     };

    //     reader.onerror = (e) => alert(e.target.error.name);

    //     reader.readAsText(file);
    // });
}

function uploadFileList(workspace){
    let input = document.getElementById('upload-flist')
    //console.log(input)
    input.addEventListener('change', () => {
        let files = input.files;

        if (files.length == 0) return;

        const file = files[0];

        let reader = new FileReader();

        reader.onload = (e) => {
            const file = e.target.result;

            // This is a regular expression to identify carriage
            // Returns and line breaks
            
            Blockly.Events.disable();
            const lines = file.split(/\r\n|\n/);
            for(let i = 0; i < lines.length; i++){
                if(lines[i].trim().length > 1){
                    let adjusted_name = lines[i].replaceAll("\\", "/");
                    let fblock = workspace.newBlock("procedures_defnoreturn");
                    fblock.setFieldValue(adjusted_name, "NAME");
                    fblock.setEnabled(false);
                    fblock.setEditable(false);
                    fblock.setCollapsed(true);
                    //fblock.setMovable(false);
                }
            }
            Blockly.Events.enable();
            //workspace.render();
            return;
            //textarea.value = lines.join('\n');

        };

        reader.onerror = (e) => alert(e.target.error.name);

        reader.readAsText(file);
    });
}

function prepareFileText() {
    return file_text.split("\n");
}

function updateCodeAndDownload(path, workspace) {
    var code = cerebrumGenerator.workspaceToCode(workspace);

    // let singleFile = document.getElementById("single-output").checked;

    if (false && singleFile) {
        //console.log(code);
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(new Blob([code], { type: "text/plain" }));
        a.download = "code";
        a.click();
    }
    else {
        var files = codeToFiles(code);
        for (let i = 0; i < files.length; i++) {
            // var a = document.createElement("a");
            writeToS3(path + files[i].fname, new Blob([files[i].funcText], { type: "text/plain" }))
            // a.href = window.URL.createObjectURL(new Blob([files[i].funcText], { type: "text/plain" }));
            // a.download = files[i].fname;
            // a.click();
        }
    }

}

function importDefaultFunctions(workspace){
    Blockly.Events.disable();
    for(let i = 0; i < flist.length; i++){
        let fblock = workspace.newBlock("procedures_defnoreturn");
                    fblock.setFieldValue(flist[i].fname, "NAME");
                    fblock.setEnabled(true);
                    //fblock.setEditable(false);
                    fblock.setCollapsed(true);
    }
    let blob = fblob_consolidate("", workspace);
    blob.setCollapsed(true);
    workspace.render();
    Blockly.Events.enable();
}

function allowUpload(workspace) {
    setUpFile(workspace);
    setUpDemo(workspace);
    //uploadFileList(workspace);
}

export { setUpFileFromS3, importDefaultFunctions, uploadFileList, prepareFileText, setUpFile, handleSelected, handleEvent, codeToFiles, addListeners, updateCodeAndDownload, allowUpload }