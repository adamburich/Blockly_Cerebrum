/**
 * Blockly Cerebrum Implementation
 * 
 * AddButtons.js
 *  - This script adds all of the buttons for Download Code, Upload Code, and Force Single File Output
 * 
 * Written by Adam Burich, Summer of 2022
 * 
 */

export function addButtons(){
    var spans = document.getElementsByTagName("span");
    var searchText = "Blockly Playground";
    var found;

    for (var i = 0; i < spans.length; i++) {
    if (spans[i].textContent == searchText) {
        found = spans[i];
        found.innerHTML = "Blockly Cerebrum Playground"
        break;
    }
    }

    var target = found.nextSibling;
    target.style.maxHeight = "30%";
    target.nextSibling.style.maxHeight = "70%";
    // target.appendChild(downloaddiv); 

    let input = document.createElement("input");
    input.setAttribute("name", "upload-code");
    input.setAttribute("type", "file");
    input.setAttribute("id", "upload-code");
    let inputTitle = document.createElement("h3");
    inputTitle.innerText = "Upload Existing Cerebrum File";
    input.style.marginLeft = "5px";
    inputTitle.style.marginLeft = "5px";

    let flist = document.createElement("input");
    flist.setAttribute("name", "upload-flist");
    flist.setAttribute("type", "file");
    flist.setAttribute("id", "upload-flist");
    let flistLabel = document.createElement("h3");
    flistLabel.innerText = "Load Workspace XML";
    flist.style.marginLeft = "5px";
    flistLabel.style.marginLeft = "5px";
    flistLabel.style.marginTop = "25px";

    let dl = document.createElement("input");
    dl.setAttribute("name", "download-code");
    dl.setAttribute("type", "button");
    dl.setAttribute("id", "download-code");
    dl.setAttribute("value", "Download Code")
    let dlTitle = document.createElement("h3");
    dlTitle.innerText = "Download Workspace Code";
    dl.style.marginLeft = "5px";
    dlTitle.style.marginLeft = "5px";
    dlTitle.style.marginTop = "25px";
    
    let container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "nowrap";
    let singleOutput = document.createElement("h4");
    singleOutput.innerText = "Force Output to Single File";
    singleOutput.style.marginLeft = "5px";
    singleOutput.style.marginTop = "10px";
    singleOutput.style.marginBottom = "5px";
    singleOutput.style.maxWidth = "70%";
    let checkbox = document.createElement("input");
    checkbox.setAttribute("name", "single-output");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "single-output");
    checkbox.style.maxWidth = "30%";
    checkbox.style.marginLeft = "5px";
    checkbox.style.marginTop = "10px";
    container.appendChild(checkbox);
    container.appendChild(singleOutput);

    target.appendChild(inputTitle);
    target.appendChild(input);
    target.appendChild(flistLabel);
    target.appendChild(flist);
    target.appendChild(dlTitle);
    target.appendChild(dl);
    target.appendChild(container);

}