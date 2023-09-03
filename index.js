let cardCount = 0;
const playerTallies = {}; // Object to store player tally counts

document.getElementById('gameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    createGameCard();
});

function createGameCard() {
    cardCount++;

    const gameTitle = document.getElementById('gameTitle').value;
    const gameImageURL = document.getElementById('gameImage').value;

    // Create a new game card
    const gameCard = document.createElement('div');
    gameCard.className = 'card';
    gameCard.innerHTML = `
        <h2>Game Card ${cardCount}</h2>
        <img src="${gameImageURL}" alt="${gameTitle}" width="200">
        <h3>${gameTitle}</h3>
        <div class="player-tally">
            <div>
                <p>Hyrum</p>
                <button onclick="incrementTally('hyrum')">+</button>
                <span id="hyrumTally${cardCount}">0</span>
            </div>
            <div>
                <p>Killian</p>
                <button onclick="incrementTally('killian')">+</button>
                <span id="killianTally${cardCount}">0</span>
            </div>
            <div>
                <p>Anne</p>
                <button onclick="incrementTally('anne')">+</button>
                <span id="anneTally${cardCount}">0</span>
            </div>
            <div>
                <p>Roger</p>
                <button onclick="incrementTally('roger')">+</button>
                <span id="rogerTally${cardCount}">0</span>
            </div>
            <div>
                <p>Ella</p>
                <button onclick="incrementTally('ella')">+</button>
                <span id="ellaTally${cardCount}">0</span>
            </div>
            <div>
                <p>Miri</p>
                <button onclick="incrementTally('miri')">+</button>
                <span id="miriTally${cardCount}">0</span>
            </div>
            <div>
                <p>David</p>
                <button onclick="incrementTally('david')">+</button>
                <span id="davidTally${cardCount}">0</span>
            </div>
            <div>
                <p>Josh</p>
                <button onclick="incrementTally('josh')">+</button>
                <span id="joshTally${cardCount}">0</span>
            </div>
            <!-- Add similar markup for other players -->
        </div>
    `;

    // Add the new game card to the container
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.appendChild(gameCard);

    // Initialize tally counts for this card
    initializeTallyCount();

    // Clear the form fields
    document.getElementById('gameTitle').value = '';
    document.getElementById('gameImage').value = '';
}

// Function to initialize tally counts for the current card
function initializeTallyCount() {
    for (const playerName in playerTallies) {
        playerTallies[playerName][cardCount] = 0;
        document.getElementById(`${playerName}Tally${cardCount}`).textContent = 0;
    }
}

// Function to increment the tally for a player
function incrementTally(playerName) {
    playerTallies[playerName][cardCount]++;
    document.getElementById(`${playerName}Tally${cardCount}`).textContent = playerTallies[playerName][cardCount];
}

// Initialize tally counts for all players
const players = ['hyrum', 'killian', 'anne', 'roger', 'ella', 'miri', 'david', 'josh'];

for (const playerName of players) {
    playerTallies[playerName] = {};
}

// Initial setup for tally counts (Game Card 0)
initializeTallyCount();
