var a = document.createElement("a");
a.href = window.URL.createObjectURL(new Blob(["CONTENT"], {type: "text/plain"}));
a.download = "demo.txt";
//a.click();