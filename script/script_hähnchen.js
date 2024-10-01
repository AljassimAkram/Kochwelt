let zutat = [
  { menge: 200, einheit: "g", name: "Hähnchenbrustfilet" },
  { menge: 1, einheit: "Stück", name: "Paprika" },
  { menge: 100, einheit: "g", name: "Brokoli" },
  { menge: 100, einheit: "g", name: "Möhren" },
  { menge: 50, einheit: "g", name: "Zuchini" },
  { menge: 50, einheit: "g", name: "Champignons" },
  { menge: 250, einheit: "ml", name: "Kokosmilch" },
  { menge: 1, einheit: "TL", name: "roter Curry" },
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

