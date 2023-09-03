let cardCount = 0;

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
            <!-- Add similar markup for other players -->
        </div>
    `;

    // Add the new game card to the container
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.appendChild(gameCard);

    // Initialize tally counts for this card
    const tallyCounts = {
        hyrum: 0,
        killian: 0,
        Anne: 0,
        Roger: 0,
        Ella: 0,
        Miri: 0,
        David: 0,
        Josh: 0,
    };

    // Function to increment the tally for a player on this card
    function incrementTally(playerName) {
        tallyCounts[playerName]++;
        document.getElementById(`${playerName}Tally${cardCount}`).textContent = tallyCounts[playerName];
    }

    // Clear the form fields
    document.getElementById('gameTitle').value = '';
    document.getElementById('gameImage').value = '';
}
