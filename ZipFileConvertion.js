function zipFiles() {
    var filesInput = document.getElementById("fileInput");
    var files = filesInput.files;

    var zip = new JSZip();

    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      zip.file(file.name, file);
    }

    zip.generateAsync({ type: "blob" })
      .then(function(content) {
      saveAs(content, "files.zip");
    });
  }