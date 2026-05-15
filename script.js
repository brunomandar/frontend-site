function mostrarTela(tela) {

  document.getElementById("dashboard").style.display = "none";
  document.getElementById("dados").style.display = "none";

  document.getElementById(tela).style.display = "block";

  if (tela === "dashboard") {
    carregarDashboard();
  }

  if (tela === "dados") {
    carregarDados();
  }
}

function carregarDashboard() {

  fetch("https://backend-python-9k0p.onrender.com/dashboard")
    .then(r => r.json())
    .then(data => {
      document.getElementById("kpis").innerText =
        "Total: " + data.total +
        " | Em dia: " + data.em_dia +
        " | Atenção: " + data.atencao +
        " | Crítico: " + data.critico;
    })
    .catch(() => {
      document.getElementById("kpis").innerText = "Erro ao carregar dashboard";
    });
}

function carregarDados() {

  fetch("https://backend-python-9k0p.onrender.com/dados")
    .then(r => r.json())
    .then(data => {
      document.getElementById("tabela").innerText =
        JSON.stringify(data, null, 2);
    })
    .catch(() => {
      document.getElementById("tabela").innerText = "Erro ao carregar dados";
    });
}

window.onload = function() {
  carregarDashboard();
};
