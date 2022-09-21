function addButtons(){
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
    target.style.maxHeight = "20%";
    target.nextSibling.style.maxHeight = "80%";
    // target.appendChild(downloaddiv); 

    let input = document.createElement("input");
    input.setAttribute("name", "upload-code");
    input.setAttribute("type", "file");
    input.setAttribute("id", "upload-code");
    let inputTitle = document.createElement("h3");
    inputTitle.innerText = "Upload Existing Cerebrum File";
    input.style.marginLeft = "5px";
    inputTitle.style.marginLeft = "5px";

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

    target.appendChild(inputTitle);
    target.appendChild(input);
    target.appendChild(dlTitle);
    target.appendChild(dl);

}