function codeToFiles(code){
    let lines = code.split("\n");
    
    let files = [];
    let mainFile = [];

    for(let i = 0; i < lines.length; i++){
        if(lines[i].split(" ")[0] == "Label"){
            let func = [];
            let fname = lines[i].split(" ")[1].replaceAll("'", "");
            i++;
            while(lines[i] != "Return"){
                func.push(lines[i].trim());
                i++;
            }
            i++;
            let funcText = func.join("\n");
            files.push({fname, funcText});
        }
        else if(lines[i].split(" ")[0] == "Do"){
            let fCallText = lines[i].split(" ")[1].replaceAll("'", "");
            let fCallTextFile = "'" + fCallText + ".txt'"
            let newLine = "Do " + fCallTextFile;
            mainFile.push(newLine);
        }
        else{
            mainFile.push(lines[i]);
        }
    }
    let funcText = mainFile.join("\n");
    let fname = "main";
    files.push({fname, funcText}); 

    return files;
}