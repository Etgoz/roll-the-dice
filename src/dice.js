const welcome = document.getElementById("welcome");
const players = document.getElementById("players");
const game = document.getElementById("game");
const scores = document.getElementById("scores");

const mains = ["welcome", "players", "game", "scores"];
const modes = ["number of wins", "total collected points"];
let state = {
	page: "welcome",
	playersNumber: 2,
	players: [{}, {}],
	rounds: 3,
	currentPlayer: 0,
	mode: "number of wins",
};

//view functions

const hideMains = () =>
	document.querySelectorAll("main").forEach((e) => (e.style.display = "none"));

function makePlayers(s) {
	const pNumber = s.playersNumber;
	for (let i = 0; i < pNumber; i++) {
		const pLabel = document.createElement("label");
		const pInput = document.createElement("input");
		pInput.setAttribute("type", "text");
		pInput.addEventListener("keyup", () => {
			setPlayerName(s, i, pInput.value);
		});
		pLabel.textContent = `Player ${i + 1} Name:`;
		document
			.querySelector("#players>form")
			.appendChild(pLabel)
			.appendChild(pInput);
	}
}

function render(s) {
	console.log(state);
	hideMains();
	document.getElementById(s.page).style.display = "flex";
	if (s.page === "players") {
		makePlayers(state);
	}
}

//actions

function startNewGame(s) {
	return { ...s, page: "players" };
}

const start = document.getElementById("start-button");

start.addEventListener("click", () => {
	state = startNewGame(state);
	render(state);
});

function setPlayerName(s, player, name) {
	s.players[player].name = name;
	console.log(s.players);
}
