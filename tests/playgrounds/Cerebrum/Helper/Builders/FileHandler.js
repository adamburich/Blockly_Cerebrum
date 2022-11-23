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

import { parseArrToWorkspace } from './ParseFileContents.js'
import { cerebrumGenerator } from '../../Generator/CerebrumGenerator.mjs'
import { attachThenBody } from './BuildIf.js'

function codeToFiles(code) {
    let lines = code.split("\n");

    let files = [];
    let mainFile = [];

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].split(" ")[0] == "Label") {
            let func = [];
            let fname = lines[i].split(" ")[1].replaceAll("'", "");
            i++;
            while (lines[i] != "Return") {
                func.push(lines[i].trim());
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
            mainFile.push(lines[i]);
        }
    }
    let funcText = mainFile.join("\n");
    let fname = "main";
    files.push({ fname, funcText });

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

function setUpFile(workspace) {
    let input = document.getElementById('upload-code')
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

            let fname = input.files[0].name.split(".")[0]
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

            workspace.render();
            return ret;
            //textarea.value = lines.join('\n');

        };

        reader.onerror = (e) => alert(e.target.error.name);

        reader.readAsText(file);
    });
}

function prepareFileText() {
    return file_text.split("\n");
}

function updateCodeAndDownload(workspace) {
    var code = cerebrumGenerator.workspaceToCode(workspace);

    let singleFile = document.getElementById("single-output").checked;

    if (singleFile) {
        //console.log(code);
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(new Blob([code], { type: "text/plain" }));
        a.download = "code";
        a.click();
    }
    else {
        var files = codeToFiles(code);
        for (let i = 0; i < files.length; i++) {
            var a = document.createElement("a");
            a.href = window.URL.createObjectURL(new Blob([files[i].funcText], { type: "text/plain" }));
            a.download = files[i].fname;
            a.click();
        }
    }

}

function allowUpload(workspace) {
    setUpFile(workspace);
}

export { prepareFileText, setUpFile, handleSelected, handleEvent, codeToFiles, addListeners, updateCodeAndDownload, allowUpload }