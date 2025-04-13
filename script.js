const patientForm = document.getElementById('patientForm');
const patientInfo = document.getElementById('patientInfo');
const downloadSection = document.getElementById('downloadSection');
const downloadBtn = document.getElementById('downloadBtn');

// Symptom-Daten mit Behandlung
const symptomsData = {
    "Allgemeine leichte Schmerzen": {
        medication: "Paracetamol",
        form: "Tablette",
        dosage: "500 mg",
    },
    "Allgemeine mittlere Schmerzen": {
        medication: "Novaminsulfon",
        form: "Tablette / Intravenös",
        dosage: "500 - 1000 mg",
    },
    "Allgemeine starke Schmerzen": {
        medication: "Morphin",
        form: "Intravenös",
        dosage: "5 - 10 ml",
    },
    "Angststörung / Depression": {
        medication: "Duloxalta",
        form: "Hartkapseln",
        dosage: "30 - 60 mg",
    },
    "Atembeschwerden": {
        medication: "Salbutamol",
        form: "Dosier - Aerosol",
        dosage: "1 - 2 Sprühstöße (100 - 200 µg)",
    },
    "Augenrötung": {
        medication: "Dexapos",
        form: "Augentropfen",
        dosage: "3 - 5 Mal täglich 1 Tropfen",
    },
    "Bauchschmerzen": {
        medication: "Carbabeta",
        form: "Tablette",
        dosage: "200 mg",
    },
    "Blähungen": {
        medication: "Mebeverin dura",
        form: "Filmtablette",
        dosage: "135 mg",
    },
    "Infektion (bakteriell)": {
        medication: "Antibiotika",
        form: "Filmtablette",
        dosage: "500 - 1000 mg",
    },
    "Blutvergiftung (Sepsis)": {
        medication: "Ofloxacin",
        form: "Filmtablette",
        dosage: "100 / 200 / 400 mg",
    },
    "Durchfall": {
        medication: "Mebeverin dura",
        form: "Filmtablette",
        dosage: "135 mg",
    },
    "Erbrechen": {
        medication: "Vomex",
        form: "Tablette / Intravenös",
        dosage: "1 - 4 Mal täglich 50 - 400 mg",
    },
    "Erektionsstörungen": {
        medication: "Viagra",
        form: "Filmtablette",
        dosage: "1 Mal täglich 1 Tablette (100 mg)",
    },
    "Fieber": {
        medication: "Paracetamol",
        form: "Tablette",
        dosage: "500 mg",
    },
    "Gelenk- / Muskelschmerzen": {
        medication: "Diclofenac",
        form: "Gel / Retardkapsel",
        dosage: "1 Mal täglich 100 mg",
    },
    "Hämatom (Bluterguss / Beule)": {
        medication: "Voltaren",
        form: "Gel",
        dosage: "Nach Bedarf",
    },
    "Hypotonie (Niedriger Blutdruck)": {
        medication: "Gutron",
        form: "Tropfen / Tablette",
        dosage: "2-3 mal täglich 7 Tropfen",
    },
    "Hypertonie (Hoher Blutdruck)": {
        medication: "Catapresan",
        form: "Tablette",
        dosage: "75 / 100 / 300 mg",
    },
    "Halsschmerzen": {
        medication: "Lemocin",
        form: "Lutschpastille",
        dosage: "max 8 Pastillen pro Tag",
    },
    "Hustenreiz (trocken)": {
        medication: "Capval",
        form: "Saft",
        dosage: "1 - 3 täglich 10 ml",
    },
    "Hustenreiz (schleimig)": {
        medication: "ACC 200",
        form: "Brausetablette",
        dosage: "1 - 3 Mal täglich 1 Tablette",
    },
    "Juckreiz": {
        medication: "Fenistil",
        form: "Gel",
        dosage: "Nach Bedarf",
    },
    "Kopfschmerzen": {
        medication: "Aspirin",
        form: "Tablette",
        dosage: "500 - 1000 mg",
    },
    "Krampfanfälle": {
        medication: "Diazepam",
        form: "Tablette",
        dosage: "2 / 5 / 10 mg",
    },
    "Schlafstörungen": {
        medication: "Adumbran",
        form: "Tablette",
        dosage: "10 mg",
    },
    "Schnupfen": {
        medication: "Nasic",
        form: "Nasenspray",
        dosage: "Nach Bedarf",
    },
    "Schürfwunden": {
        medication: "Betaisodona",
        form: "Salbe",
        dosage: "Nach Bedarf",
    },
    "Schwindel": {
        medication: "Betahistin",
        form: "Tablette",
        dosage: "8 - 16 mg",
    },
    "Übelkeit": {
        medication: "Vomex",
        form: "Tablette",
        dosage: "50 - 400 mg",
    },
    "Verbrennung": {
        medication: "Bepanthene",
        form: "Salbe",
        dosage: "Nach Bedarf",
    },
    "Verstopfung": {
        medication: "Lactulose",
        form: "Sirup",
        dosage: "15 - 30 ml",
    }
};

// Patientenbehandlung anzeigen
patientForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const patientName = document.getElementById('patientName').value;
    const patientAddress = document.getElementById('patientAddress').value;
    const selectedSymptom = document.getElementById('patientSymptom').value;
    
    if (!patientName || !patientAddress || !selectedSymptom) {
        alert('Bitte alle Felder ausfüllen!');
        return;
    }
    
    const treatment = symptomsData[selectedSymptom];
    
    // Patientendaten anzeigen
    patientInfo.innerHTML = `
        <h3>Patienteninformation</h3>
        <p><strong>Name:</strong> ${patientName}</p>
        <p><strong>Adresse:</strong> ${patientAddress}</p>
        <p><strong>Symptom:</strong> ${selectedSymptom}</p>
        <h4>Behandlung:</h4>
        <p><strong>Medikament:</strong> ${treatment.medication}</p>
        <p><strong>Form:</strong> ${treatment.form}</p>
        <p><strong>Dosierung:</strong> ${treatment.dosage}</p>
    `;
    
    // Downloadbereich anzeigen
    downloadSection.style.display = 'block';
    
    // Textdatei zum Download vorbereiten
    downloadBtn.addEventListener('click', function() {
        const treatmentText = `Patientenbehandlung:
Name: ${patientName}
Adresse: ${patientAddress}
Symptom: ${selectedSymptom}
Behandlung:
Medikament: ${treatment.medication}
Form: ${treatment.form}
Dosierung: ${treatment.dosage}`;
        
        const blob = new Blob([treatmentText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${patientName}_Behandlung.txt`;
        a.click();
    });
});
