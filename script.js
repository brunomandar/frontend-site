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
  document.getElementById("kpis").innerText = "Dashboard carregado ✅";
}

function carregarDados() {
  document.getElementById("tabela").innerText = "Dados carregados ✅";
}

window.onload = function() {
  carregarDashboard();
};
