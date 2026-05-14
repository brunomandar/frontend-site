function executarPython() {

  fetch("https://backend-python-9k0p.onrender.com/executar")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro na API");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("resultado").innerText = data.resultado;
    })
    .catch(error => {
      document.getElementById("resultado").innerText = "Erro ao conectar API";
      console.error(error);
    });

}
