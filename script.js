// Filter Table Function
document.getElementById("filterInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll("#statsTable tbody tr");

  rows.forEach(row => {
    const playerName = row.cells[0].textContent.toLowerCase();
    if (playerName.includes(filter)) {
      row.style.display = ""; // Show the row
    } else {
      row.style.display = "none"; // Hide the row
    }
  });
});
