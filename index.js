let cardCount = 0;
const playerTallies = {}; // Object to store player tally counts

// Function to create a new game card
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
        <button onclick="incrementTally('hyrum${cardCount}')">+</button>
        <span id="hyrumTally${cardCount}">0</span>
    </div>
    <div>
    <p>Killian</p>
    <button onclick="incrementTally('killian${cardCount}')">+</button>
    <span id="killianTally${cardCount}">0</span>
</div>
<div>
    <p>Anne</p>
    <button onclick="incrementTally('anne${cardCount}')">+</button>
    <span id="anneTally${cardCount}">0</span>
</div>
<div>
    <p>Roger</p>
    <button onclick="incrementTally('roger${cardCount}')">+</button>
    <span id="rogerTally${cardCount}">0</span>
</div>
<div>
    <p>Ella</p>
    <button onclick="incrementTally('ella${cardCount}')">+</button>
    <span id="ellaTally${cardCount}">0</span>
</div>
<div>
    <p>Miri</p>
    <button onclick="incrementTally('miri${cardCount}')">+</button>
    <span id="miriTally${cardCount}">0</span>
</div>
<div>
    <p>David</p>
    <button onclick="incrementTally('david${cardCount}')">+</button>
    <span id="davidTally${cardCount}">0</span>
</div>
<div>
    <p>Josh</p>
    <button onclick="incrementTally('josh${cardCount}')">+</button>
    <span id="joshTally${cardCount}">0</span>
</div>
        </div>
    `;

    // Add the new game card to the container
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.appendChild(gameCard);

    // Initialize tally counts for this card
    initializeTallyCount();

    // Save the card data to Local Storage
    saveCardDataToLocalStorage(gameCard.outerHTML);
}

// Function to initialize tally counts for the current card
function initializeTallyCount() {
    
    for (const playerName in playerTallies) {
        const elementId = `${playerName}Tally${cardCount}`;
        const element = document.getElementById(elementId);
        console.log(`Element ID: ${elementId}, Element: ${element}`);
        playerTallies[playerName][cardCount] = 0;
        document.getElementById(`${playerName}Tally${cardCount}`).textContent = 0;
    }
}

// Function to increment the tally for a player
function incrementTally(playerName) {
    playerTallies[playerName][cardCount]++;
    document.getElementById(`${playerName}Tally${cardCount}`).textContent = playerTallies[playerName][cardCount];
    
    // Call the save function to update Local Storage
    savePlayerTalliesToLocalStorage();
}

// Function to save player tallies to Local Storage
function savePlayerTalliesToLocalStorage() {
    localStorage.setItem('playerTallies', JSON.stringify(playerTallies));
}

// Function to save the card data to Local Storage
function saveCardDataToLocalStorage(cardData) {
    // Use a unique key for each card, e.g., 'gameCard1', 'gameCard2', etc.
    const cardKey = `gameCard${cardCount}`;
    localStorage.setItem(cardKey, cardData);
}

// Function to load card data from Local Storage and populate the container
function loadCardDataFromLocalStorage() {
    const gameContainer = document.getElementById('gameContainer');

    // Loop through card keys (e.g., 'gameCard1', 'gameCard2', ...) and load the card data
    for (let i = 1; i <= cardCount; i++) {
        const cardKey = `gameCard${i}`;
        const cardData = localStorage.getItem(cardKey);

        if (cardData) {
            // Create a new game card element and populate it with the saved data
            const gameCard = document.createElement('div');
            gameCard.innerHTML = cardData;

            // Add the game card to the container
            gameContainer.appendChild(gameCard);
        }
    }
}

// Initialize tally counts for all players
const players = ['hyrum', 'killian', 'anne', 'roger', 'ella', 'miri', 'david', 'josh'];

for (const playerName of players) {
    playerTallies[playerName] = {};
}

// Initial setup for tally counts (Game Card 0)
initializeTallyCount();

// Call the load function to load saved card data when the page loads
loadCardDataFromLocalStorage();


