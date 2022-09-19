function prettify(){
    var spans = document.getElementsByTagName("span");

    for (var i = 0; i < spans.length; i++) {
        if(spans[i].textContent == "Lua" || spans[i].textContent == "Python" || spans[i].textContent == "JavaScript" || spans[i].textContent == "PHP" || spans[i].textContent == "Dart"/** || spans[i].textContent == "XML"*/){
            spans[i].style.display = "none";
        }
    }
}