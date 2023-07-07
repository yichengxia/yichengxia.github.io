function pasteJSON() {
  navigator.clipboard.readText().then((text) => {
    document.getElementById("jsonInput").value = text;
  });
}

function escapeJSON() {
  var input = document.getElementById("jsonInput").value;
  var output = JSON.stringify(input).slice(1, -1);
  document.getElementById("jsonOutput").value = output;
}

function unescapeJSON() {
  var input = document.getElementById("jsonInput").value;
  var output = JSON.parse('"' + input + '"');
  document.getElementById("jsonOutput").value = output;
}

function copyJSON() {
  var output = document.getElementById("jsonOutput").value;
  navigator.clipboard.writeText(output);
}

function clearInput() {
  document.getElementById("jsonInput").value = "";
}

function clearOutput() {
  document.getElementById("jsonOutput").value = "";
}
  