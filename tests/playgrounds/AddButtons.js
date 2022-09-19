function addButtons(){
    var spans = document.getElementsByTagName("span");
    var searchText = "Blockly Playground";
    var found;

    for (var i = 0; i < spans.length; i++) {
    if (spans[i].textContent == searchText) {
        found = spans[i];
        break;
    }
    }
    
    let downloaddiv = document.createElement("div");
    downloaddiv = setupDivButton(downloaddiv, "Save Code", "download-code");

    //let uploaddiv = document.createElement("div");
    //uploaddiv = setupDivButton(uploaddiv, "Upload", "upload-code");

    var target = found.nextSibling;
    target.style.maxHeight = "20%";
    target.nextSibling.style.maxHeight = "80%";
    target.appendChild(downloaddiv); 
    let input = document.createElement("input");
    input.setAttribute("name", "upload-code");
    input.setAttribute("type", "file");
    input.setAttribute("id", "upload-code");
    let inputTitle = document.createElement("h3");
    inputTitle.innerText = "Upload Existing Cerebrum File";
    target.appendChild(inputTitle);
    target.appendChild(input);
}

function setupDivButton(div, text, buttonID){
    div.classList.add("dg");
    div.classList.add("main");
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.classList.add("cr");
    li.classList.add("function");
    let div2 = document.createElement("div");
    let span = document.createElement("span");
    span.classList.add("property-name");
    let download = document.createElement("a");
    download.innerHTML = text;
    download.style.color = "white";
    download.setAttribute("id", buttonID);
    span.appendChild(download);
    div2.appendChild(span);
    li.appendChild(div2);
    ul.appendChild(li);
    div.appendChild(ul);
    return div;
}