const daten = {
  "Allgemeine leichte Schmerzen": ["Paracetamol", "Tablette", "500 mg"],
  "Allgemeine mittlere Schmerzen": ["Novaminsulfon", "Tablette / Intravenös", "500 - 1000 mg"],
  "Allgemeine starke Schmerzen": ["Morphin", "Intravenös", "5 - 10 ml"],
  "Angststörung / Depression": ["Duloxalta", "Hartkapseln", "30 - 60 mg"],
  "Atembeschwerden": ["Salbutamol", "Dosier - Aerosol", "1 - 2 Sprühstöße (100 - 200 µg)"],
  "Augenrötung": ["Dexapos", "Augentropfen", "3 - 5 Mal täglich 1 Tropfen"],
  "Bauchschmerzen": ["Carbabeta", "Tablette", "200 mg"],
  "Blähungen": ["Mebeverin dura", "Filmtablette", "135 mg"],
  "Infektion (bakteriell)": ["Antibiotika", "Filmtablette", "500 - 1000 mg"],
  "Blutvergiftung (Sepsis)": ["Ofloxacin", "Filmtablette", "100 / 200 / 400 mg"],
  "Durchfall": ["Mebeverin dura", "Filmtablette", "135 mg"],
  "Erbrechen": ["Vomex", "Tablette / Intravenös", "1 - 4 Mal täglich 50 - 400 mg"],
  "Erektionsstörungen": ["Viagra", "Filmtablette", "1 Mal täglich 1 Tablette (100 mg)"],
  "Fieber": ["Paracetamol", "Tablette", "500 mg"],
  "Gelenk- / Muskelschmerzen": ["Diclofenac", "Gel / Retardkapsel", "1 Mal täglich 100 mg"],
  "Hämatom (Bluterguss / Beule)": ["Voltaren", "Gel", "Nach Bedarf"],
  "Hypotonie (Niedriger Blutdruck)": ["Gutron", "Tropfen / Tablette", "2-3 mal täglich 7 Tropfen"],
  "Hypertonie (Hoher Blutdruck)": ["Catapresan", "Tablette", "75 / 100 / 300 mg"],
  "Halsschmerzen": ["Lemocin", "Lutschpastille", "max 8 Pastillen pro Tag"],
  "Hustenreiz (trocken)": ["Capval", "Saft", "1 - 3 täglich 10 ml"],
  "Hustenreit (schleimig)": ["ACC 200", "Brausetablette", "1 - 3 Mal täglich 1 Tablette"],
  "Infektionen": ["Amoxicillin", "Filmtablette", "1 - 3 Mal täglich 125 mg"],
  "Juckreiz": ["Fenistil", "Gel", "Nach Bedarf"],
  "Kopfschmerzen": ["Aspirin", "Tablette", "500 - 1000 mg"],
  "Krampfanfälle": ["Diazepam", "Tablette", "2 / 5 / 10 mg"],
  "Schlafstörungen": ["Adumbran", "Tablette", "10 mg"],
  "Schnupfen": ["Nasic", "Nasenspray", "Nach Bedarf"],
  "Schürfwunden": ["Bepanthen", "Creme", "Nach Bedarf"],
  "Schwindel": ["Betahistin", "Tablette", "6 / 12 mg"],
  "Übelkeit": ["Vomex", "Tablette", "1 - 4 Mal täglich 50 - 400 mg"],
  "Verbrennung": ["Fenistil", "Gel", "Auf Verbrennung I"],
  "Verstopfung": ["Movicol", "Pulverbeutel", "1 - 3 Mal täglich 1 Beutel"]
};

window.onload = function () {
  const symptomSelect = document.getElementById("symptom");
  for (let symptom in daten) {
    let opt = document.createElement("option");
    opt.value = symptom;
    opt.innerText = symptom;
    symptomSelect.appendChild(opt);
  }
};

document.getElementById("symptom").addEventListener("change", () => {
  const symptom = document.getElementById("symptom").value;
  const behandlung = daten[symptom];
  const patient = document.getElementById("patient").value;
  if (symptom && patient) {
    document.getElementById("behandlung").innerHTML = `
      <h3>Patientenakte</h3>
      <strong>Patient:</strong> ${patient}<br>
      <strong>Symptom:</strong> ${symptom}<br>
      <strong>Medikament:</strong> ${behandlung[0]}<br>
      <strong>Darreichungsform:</strong> ${behandlung[1]}<br>
      <strong>Dosierung:</strong> ${behandlung[2]}
    `;
  }
});

function generateDocument() {
  const output = document.getElementById("behandlung").innerText;
  const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Patientenakte.txt";
  link.click();
}

function resetSelection() {
  document.getElementById("patient").value = "";
  document.getElementById("symptom").value = "";
  document.getElementById("behandlung").innerHTML = "";
}
