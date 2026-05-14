function executarPython() {
  fetch("https://backend-python-9k0p.onrender.com/")
    .then(resp => resp.json())
    .then(data => {
      document.getElementById("resultado").innerText = data.resultado;
    });
}
