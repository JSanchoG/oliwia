const mainContent = document.getElementById("div-main-content");
const tytulTekst = document.getElementById("nav-1");
const tytulElem = document.getElementById("elem-1");
const pracaTekst = document.getElementById("nav-2");
const pracaElem = document.getElementById("elem-2");
const strEN = document.getElementById("nav-3");
const strENelem = document.getElementById("elem-3");
const strPL = document.getElementById("nav-4");
const strPLelem = document.getElementById("elem-4");
const kontaktTekst = document.getElementById("nav-5");
const kontaktElem = document.getElementById("elem-5");
const imgBox = document.getElementById("img-box");
const mainImg = document.getElementById("main-img");

////////////////////////////

mainImg.addEventListener("click", () => {
  if (mainImg.src.includes("assets/img/zdj-9.png"))
    mainImg.src = "assets/img/zdj-10.png";
  else mainImg.src = "assets/img/zdj-9.png";
});

////////////////////////////

function schowaj(arg1, arg2) {
  tytulElem.style.display = "none";
  pracaElem.style.display = "none";
  strENelem.style.display = "none";
  strPLelem.style.display = "none";
  kontaktElem.style.display = "none";
  imgBox.style.display = "none";
  if (arg2) {
    if (arg2 == tytulElem) {
      tytulElem.style.display = "block";
      document.getElementById("footer").style.position = "absolute";
    } else if (arg2 == pracaElem) {
      pracaElem.style.display = "block";
      document.getElementById("footer").style.position = "relative";
    } else if (arg2 == strENelem) {
      strENelem.style.display = "block";
      document.getElementById("footer").style.position = "absolute";
    } else if (arg2 == strPLelem) {
      strPLelem.style.display = "block";
      document.getElementById("footer").style.position = "absolute";
    } else if (arg2 == kontaktElem) {
      kontaktElem.style.display = "block";
      document.getElementById("footer").style.position = "absolute";
    }
  }
  if (arg1) return (mainContent.style.display = "block");
  mainContent.style.display = "none";
  imgBox.style.display = "block";
}

////////////////////////////
// Pokazywanie streszczeń //
////////////////////////////

tytulTekst.addEventListener("click", () => {
  if (tytulElem.style.display === "block") schowaj();
  else schowaj(true, tytulElem);
});
pracaTekst.addEventListener("click", () => {
  if (pracaElem.style.display === "block") {
    schowaj();
    document.getElementById("footer").style.position = "absolute";
  } else schowaj(true, pracaElem);
});
strEN.addEventListener("click", () => {
  if (strENelem.style.display === "block") schowaj();
  else schowaj(true, strENelem);
});
strPL.addEventListener("click", () => {
  if (strPLelem.style.display === "block") schowaj();
  else schowaj(true, strPLelem);
});
kontaktTekst.addEventListener("click", () => {
  if (kontaktElem.style.display === "block") schowaj();
  else schowaj(true, kontaktElem);
});
