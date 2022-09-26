/**
 * Blockly Cerebrum Implementation
 * 
 * Prettify.js
 *  - Put any functions here that interact with the way the playground gets displayed or the way it looks
 *  - Currently only has hideUnusedGenerators, which hides the options for LUA, Python, JS, PHP, and Dart that exist by default in the blockly playground.
 * 
 * Written by Adam Burich, Summer of 2022
 * 
 */

function hideUnusedGenerators(){
    var spans = document.getElementsByTagName("span");

    for (var i = 0; i < spans.length; i++) {
        if(spans[i].textContent == "Lua" || spans[i].textContent == "Python" || spans[i].textContent == "JavaScript" || spans[i].textContent == "PHP" || spans[i].textContent == "Dart"/** || spans[i].textContent == "XML"*/){
            spans[i].style.display = "none";
        }
    }
}

export {hideUnusedGenerators}