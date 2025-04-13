const treatments = {
  schmerzen_leicht: {
    medicament: "Paracetamol",
    form: "Tablette",
    dosage: "500 mg",
    application: "oral"
  },
  schmerzen_mittel: {
    medicament: "Novaminsulfon",
    form: "Tablette / Intravenös",
    dosage: "500 - 1000 mg",
    application: "percutan"
  },
  schmerzen_stark: {
    medicament: "Morphin",
    form: "Intravenös",
    dosage: "5 - 10 ml",
    application: "sublingual"
  },
  angst: {
    medicament: "Duloxalta",
    form: "Hartkapseln",
    dosage: "30 - 60 mg",
    application: "nasal"
  },
  atem: {
    medicament: "Salbutamol",
    form: "Dosier-Aerosol",
    dosage: "1 - 2 Sprühstöße (100 - 200 µg)",
    application: "intravenös"
  },
  // Weitere Symptome und deren Behandlungen hier hinzufügen...
};

// Wenn das Formular abgesendet wird
document.getElementById("symptomForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Verhindert das automatische Neuladen der Seite beim Absenden

  const symptom = document.getElementById("symptom").value;
  const treatment = treatments[symptom];

  // Behandlung anzeigen
  const resultDiv = document.getElementById("treatmentResult");
  const downloadButton = document.getElementById("downloadButton");
  if (treatment) {
    resultDiv.innerHTML = `
      <h3>Behandlung für: ${symptom}</h3>
      <p>Medikament: ${treatment.medicament}</p>
      <p>Darreichungsform: ${treatment.form}</p>
      <p>Dosierung: ${treatment.dosage}</p>
      <p>Verabreichungsform: ${treatment.application}</p>
    `;
    downloadButton.style.display = "block"; // Zeigt den Download-Button an
  } else {
    resultDiv.innerHTML = `<p>Keine Behandlung für dieses Symptom gefunden.</p>`;
    downloadButton.style.display = "none"; // Versteckt den Download-Button
  }
});

// Funktion, um das PDF zu generieren
document.getElementById("downloadButton").addEventListener("click", function() {
  const symptom = document.getElementById("symptom").value;
  const treatment = treatments[symptom];
  
  if (treatment) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    doc.setFont("helvetica", "normal");
    doc.text(20, 20, `Patientenbehandlung für: ${symptom}`);
    doc.text(20, 30, `Medikament: ${treatment.medicament}`);
    doc.text(20, 40, `Darreichungsform: ${treatment.form}`);
    doc.text(20, 50, `Dosierung: ${treatment.dosage}`);
    doc.text(20, 60, `Verabreichungsform: ${treatment.application}`);

    // PDF generieren und herunterladen
    doc.save(`Behandlung_${symptom}.pdf`);
  }
});
