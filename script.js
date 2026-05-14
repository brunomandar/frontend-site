function executarPython() {

  fetch("https://backend-python-9k0p.onrender.com")
    .then(response => response.json())
    .then(data => {
      document.getElementById("resultado").innerText = data.status;
    })
    .catch(error => {
      document.getElementById("resultado").innerText = "Erro ao conectar API";
      console.error(error);
    });

}
