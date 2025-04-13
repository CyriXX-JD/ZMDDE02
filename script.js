const users = [
  { username: "admin", password: "Liamaria13" }
];

// Wenn das Login-Formular abgesendet wird
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Verhindert das automatische Neuladen der Seite beim Absenden

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Überprüfen, ob der Benutzer existiert und das Passwort korrekt ist
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert("Login erfolgreich!");
    // Weiterleitung zur Symptome-Seite
    window.location.href = "symptome.html";  // Ändere dies auf die URL deiner Symptomen-Seite
  } else {
    document.getElementById("error-message").textContent = "Benutzername oder Passwort ist falsch.";
  }
});
