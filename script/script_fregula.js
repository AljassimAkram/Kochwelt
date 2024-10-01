let zutat = [
  { menge: 75, einheit: "g", name: "Fregula Sarda" },
  { menge: 1, einheit: "Stück", name: "kleine Zucchini" },
  { menge: 1, einheit: "Stück", name: "kleine Karotte(n)" },
  { menge: 1.5, einheit: "Stück", name: "Zwiebel(n)" },
  { menge: 1, einheit: "Stück", name: "Knoblauchzehe(n)" },
  { menge: 1, einheit: "EL", name: "Olivenöl" },
  { menge: 200, einheit: "ml", name: "Gemüsebrühe" },
  { menge: 50, einheit: "g", name: "Kirschtomaten" },
  { menge: 30, einheit: "g", name: "Parmesan (gerieben)" },
  { menge: "", einheit: "", name: "Salz und Pfeffer nach Geschmack" },
  { menge: "", einheit: "", name: "Frische Basilikumblätter zum Garnieren" },
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

