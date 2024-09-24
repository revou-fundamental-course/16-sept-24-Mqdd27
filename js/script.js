var username = "Miqdad";

// Wait until the DOM is fully loaded before attaching event listeners
window.addEventListener("DOMContentLoaded", function () {
  // Display username in the header
  document.getElementById("welcome-message").innerHTML =
    "<h2>Welcome " + username + ", To My Website</h2>";
});

// Wait until the DOM is fully loaded before attaching event listeners
window.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("messageForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission from refreshing the page

      // Get form values
      const nama = document.getElementById("nama").value;
      const tanggalLahir = document.getElementById("tanggal-lahir").value;
      const jenisKelamin = document.querySelector(
        'input[name="jenis-kelamin"]:checked'
      ).value;
      const pesan = document.getElementById("message-text").value;

      // Create the result text
      const resultText = `Nama: ${nama}\nTanggal Lahir: ${tanggalLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan: ${pesan}`;

      // Display in the result textarea
      document.getElementById("result").value = resultText;
    });
});
