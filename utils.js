function downloadCSV(csv, filename) {
  var csvFile;
  var downloadLink;

  // Retrieve csv file from Experiment
  csvFile = new Blob([csv], {type: "text/csv"});

  // Download link
  downloadLink = document.createElement("a");

  // Retrieve file filename
  downloadLink.download = filename;

  // Create a link to the filename
  downloadLink.href = window.URL.createObjectURL(csvFile);

  // Hide download link
  downloadLink.style.display = 'none';

  // Add link to the DOM.
  document.body.appendChild(downloadLink);

  downloadLink.click();



}
