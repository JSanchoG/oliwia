const mainContent = document.getElementById("div-main-content");
const tytulTekst = document.getElementById("nav-1");
const tytulElem = document.getElementById("elem-1");
const pracaTekst = document.getElementById("nav-2");
const pracaElem = document.getElementById("elem-2");
const strEN = document.getElementById("nav-3");
const strENelem = document.getElementById("elem-3");
const strPL = document.getElementById("nav-4");
const strPLelem = document.getElementById("elem-4");

const cpYear = document.getElementById("cp-year");

////////////////////////////

function schowaj(arg1, arg2) {
  tytulElem.style.display = "none";
  pracaElem.style.display = "none";
  strENelem.style.display = "none";
  strPLelem.style.display = "none";
  if (arg2) {
    if (arg2 == tytulElem) tytulElem.style.display = "block";
    else if (arg2 == pracaElem) pracaElem.style.display = "block";
    else if (arg2 == strENelem) strENelem.style.display = "block";
    else if (arg2 == strPLelem) strPLelem.style.display = "block";
  }
  if (arg1) return (mainContent.style.display = "block");
  mainContent.style.display = "none";
}

////////////////////////////

cpYear.innerText = new Date().getFullYear();

////////////////////////////
// Pokazywanie streszczeń //
////////////////////////////

tytulTekst.addEventListener("click", () => {
  if (tytulElem.style.display === "block") schowaj();
  else schowaj(true, tytulElem);
});
pracaTekst.addEventListener("click", () => {
  if (pracaElem.style.display === "block") schowaj();
  else schowaj(true, pracaElem);
});
strEN.addEventListener("click", () => {
  if (strENelem.style.display === "block") schowaj();
  else schowaj(true, strENelem);
});
strPL.addEventListener("click", () => {
  if (strPLelem.style.display === "block") schowaj();
  else schowaj(true, strPLelem);
});
