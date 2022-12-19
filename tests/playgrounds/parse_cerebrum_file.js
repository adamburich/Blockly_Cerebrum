function readFile(file) {
    const reader = new FileReader();
    var contents;
    reader.addEventListener('load', (event) => {
      contents = event.target.result;
    });
    reader.readAsDataURL(file);
  }