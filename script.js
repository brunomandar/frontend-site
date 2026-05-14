
function mostrarTela(tela) {

  document.getElementById("dashboard").style.display = "none";
  document.getElementById("dados").style.display = "none";

  document.getElementById(tela).style.display = "block";
}
