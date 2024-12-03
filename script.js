// Fetch Football Stats
const apiKey = 'YOUR_API_KEY'; // Replace with your API key
const apiUrl = 'https://api.football-data.org/v2/competitions/PL/scorers'; // Example endpoint

async function fetchFootballStats() {
  try {
    const response = await fetch(apiUrl, {
      headers: { 'X-Auth-Token': apiKey },
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    displayStats(data.scorers); // Assuming `scorers` is the relevant data array
  } catch (error) {
    console.error('Error fetching football stats:', error);
  }
}

// Display Stats in the Table
function displayStats(players) {
  const statsBody = document.getElementById('statsBody');
  statsBody.innerHTML = ''; // Clear existing data

  players.forEach(player => {
    const row = `
      <tr>
        <td>${player.player.name}</td>
        <td>${player.team.name}</td>
        <td>${player.numberOfGoals}</td>
        <td>${player.assists || 'N/A'}</td>
      </tr>
    `;
    statsBody.innerHTML += row;
  });
}

// Filter Table
document.getElementById('filterInput').addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll('#statsTable tbody tr');

  rows.forEach(row => {
    const playerName = row.cells[0].textContent.toLowerCase();
    if (playerName.includes(filter)) {
      row.style.display = ''; // Show the row
    } else {
      row.style.display = 'none'; // Hide the row
    }
  });
});

// Fetch data on page load
fetchFootballStats();

