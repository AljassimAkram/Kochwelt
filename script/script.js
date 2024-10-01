let zutat = [
  { menge: 125, einheit: "g", name: "getrocknete Kichererbsen" },
  { menge: 0.5, einheit: "Stück", name: "Zwiebel" },
  { menge: 1, einheit: "Stück", name: "Knoblauchzehen" },
  { menge: 1, einheit: "Stück", name: "Bund frische Petersilie" },
  { menge: 1, einheit: "TL", name: "Kreuzkümmel" },
  { menge: 1, einheit: "TL", name: "Korianderpulver" },
  { menge: 1, einheit: "TL", name: "Backpulver" },
  { menge: 25, einheit: "g", name: "Mehl" },
  { menge: 1, einheit: "Liter", name: "Pflanzenöl zum Frittieren" },
  { menge: 1, einheit: "Teelöffel", name: "Salz" },
  { menge: 1, einheit: "Teelöffel", name: "Pfeffer" },
];


function addZutaten(menge, einheit, name) {
  document.getElementById(
    "liste"
  ).innerHTML += `<li>${menge} ${einheit} ${name}</li>`;
}


function show() {
  for (let i = 0; i < zutat.length; i++) {
    addZutaten(zutat[i].menge, zutat[i].einheit, zutat[i].name);
  }
}


function addition() {
  let neueMege = +document.getElementById("input").value;
  if (neueMege > 0 && neueMege <= 10) {
    document.getElementById("liste").innerHTML = " ";
    for (let i = 0; i < zutat.length; i++) {
      let aktualisierteMenge = zutat[i].menge * neueMege;
      addZutaten(aktualisierteMenge, zutat[i].einheit, zutat[i].name);
    }
  } else {
    alert(`Bitte geben Sie eine gültige Zahl ein (1-10)`);
  }
}

