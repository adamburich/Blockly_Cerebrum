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

    /**
     * Code to set up layout for 2 columns of buttons
     */
    var target_div = document.createElement("div");
    target.appendChild(target_div);
    target_div.setAttribute("id", "custom_buttons_container");
    var buttons_left = document.createElement("div");
    buttons_left.setAttribute("id", "buttons_left");
    buttons_left.setAttribute("max-width", "50%")
    buttons_left.setAttribute("height", "100%")
    target_div.appendChild(buttons_left);
    var buttons_right = document.createElement("div");
    buttons_left.setAttribute("id", "buttons_right");
    buttons_left.setAttribute("max-width", "50%")
    buttons_left.setAttribute("height", "100%")
    target_div.appendChild(buttons_right);

    /**
     * Code for upload file button
     */
    let input = document.createElement("input");
    input.setAttribute("name", "upload-code");
    input.setAttribute("type", "file");
    input.setAttribute("id", "upload-code");
    let input_button = document.createElement("input");
    input_button.setAttribute("name", "get-from-s3");
    input_button.setAttribute("type", "button");
    input_button.setAttribute("id", "get-from-s3");
    input_button.setAttribute("value", "Upload to Workspace")
    input_button.style.marginLeft = "5px";
    input_button.style.marginTop = "10px";
    let inputTitle = document.createElement("h3");
    inputTitle.innerText = "Upload Existing Cerebrum File";
    input.style.marginLeft = "5px";
    inputTitle.style.marginLeft = "5px";

    /**
     * Code for button for uplaoding workspace XML and displaying it in the workspace
     */
    let flist = document.createElement("input");
    flist.setAttribute("name", "upload-flist");
    flist.setAttribute("type", "file");
    flist.setAttribute("id", "upload-flist");
    let flistLabel = document.createElement("h3");
    flistLabel.innerText = "Load Workspace XML";
    flist.style.marginLeft = "5px";
    flistLabel.style.marginLeft = "5px";
    flistLabel.style.marginTop = "25px";

    /**
     * Code for button that saves workspace to aws
     */
    let dl = document.createElement("input");
    dl.setAttribute("name", "download-code");
    dl.setAttribute("type", "button");
    dl.setAttribute("id", "download-code");
    dl.setAttribute("value", "Save Changes")
    let dlTitle = document.createElement("h3");
    dlTitle.innerText = "Save Workspace Code";
    dl.style.marginLeft = "5px";
    dlTitle.style.marginLeft = "5px";
    dlTitle.style.marginTop = "25px";
    
    /**
     * Code for force single file output button, this probably needs to be hidden
     */
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

    /**
     * Code for button that links to game
     */
    let game_button_form = document.createElement("form")
    game_button_form.setAttribute("margin-top", "15px")
    game_button_form.setAttribute("action", "https://www.google.com")
    let game_button = document.createElement("button")
    game_button.style.marginTop = "40px"
    game_button.innerText = "NEWS Game"
    game_button_form.appendChild(game_button)

    /**
     * Code for button that links to SCORM
     */
    let scorm_button_form = document.createElement("form")
    scorm_button_form.setAttribute("margin-top", "15px")
    scorm_button_form.setAttribute("action", "https://www.google.com")
    let scorm_button = document.createElement("button")
    scorm_button.style.marginTop = "52px"
    scorm_button.innerText = "Access SCORM"
    scorm_button_form.appendChild(scorm_button)

    /**
     * Add all our buttons to the top right window outside the playground
     */
    buttons_left.appendChild(inputTitle);
    buttons_left.appendChild(build_dropdown());
    buttons_left.appendChild(input_button)
    buttons_left.appendChild(flistLabel);
    buttons_left.appendChild(flist);
    buttons_left.appendChild(dlTitle);
    buttons_left.appendChild(dl);
    buttons_left.appendChild(container);
    
    buttons_right.appendChild(game_button_form);
    buttons_right.appendChild(scorm_button_form);

}

function build_dropdown(){
    let dropdown_form = document.createElement("form")
    let dropdown = document.createElement("select")
    dropdown.setAttribute("id", "file_select_dropdown")
    dropdown_form.appendChild(dropdown)

    let stage1_files = ["Stage1/PatientNews1.txt", "Stage1/PatientNews2.txt", "Stage1/PatientNews3.txt", "Stage1/PatientNews4.txt", "Stage1/PatientNon1.txt", "Stage1/PatientNon2.txt", "Stage1/PatientNon3.txt", "Stage1/PatientNon4.txt", "Stage1/PatientNon5.txt"];
    let stage2_files = ["Stage2/PatientNews1.txt", "Stage2/PatientNews2.txt", "Stage2/PatientNews3.txt", "Stage2/PatientNews4.txt", "Stage2/PatientNon1.txt", "Stage2/PatientNon2.txt", "Stage2/PatientNon3.txt", "Stage2/PatientNon4.txt", "Stage2/PatientNon5.txt"];
    let stage3_files = ["Stage3/PatientNews1.txt", "Stage3/PatientNews2.txt", "Stage3/PatientNews3.txt", "Stage3/PatientNews4.txt", "Stage3/PatientNon1.txt", "Stage3/PatientNon2.txt", "Stage3/PatientNon3.txt", "Stage3/PatientNon4.txt", "Stage3/PatientNon5.txt"];
    
    let all_files = stage1_files.concat(stage2_files).concat(stage3_files)

    for(let i = 0; i < all_files.length; i++){
        let option = document.createElement("option");
        option.setAttribute("value", all_files[i]);
        option.innerText = all_files[i];
        dropdown.appendChild(option);
    }

    let line_break = document.createElement("br")
    dropdown_form.appendChild(line_break)
    // let submit = document.createElement("input")
    // submit.style.marginTop = "10px"
    // submit.setAttribute("type", "submit")
    // submit.setAttribute("value", "Load")
    // dropdown_form.appendChild(submit)

    dropdown_form.style.marginLeft = "5px"

    return dropdown_form;
}