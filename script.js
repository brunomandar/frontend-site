
function carregarDashboard() {

  fetch("https://backend-python-9k0p.onrender.com/dashboard")
    .then(r => r.json())
    .then(data => {
      document.getElementById("kpis").innerText =
        "Total: " + data.total +
        " | Em dia: " + data.em_dia +
        " | Atenção: " + data.atencao +
        " | Crítico: " + data.critico;
    });

}

function carregarDados() {

  fetch("https://backend-python-9k0p.onrender.com/dados")
    .then(r => r.json())
    .then(data => {
      document.getElementById("tabela").innerText =
        JSON.stringify(data, null, 2);
    });

}
