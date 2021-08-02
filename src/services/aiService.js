export function calculateWinner(cells) {
	if (!cells) return; // No Cells

	if (cells.every((row) => row.every((cell) => !cell))) return; // All Cells Empty

	// If Wins return Winner:
	if (!!cells[0][0] && cells[0][0] === cells[0][1] && cells[0][0] === cells[0][2])
		return cells[0][0];
	if (!!cells[1][0] && cells[1][0] === cells[1][1] && cells[1][0] === cells[1][2])
		return cells[1][0];
	if (!!cells[2][0] && cells[2][0] === cells[2][1] && cells[2][0] === cells[2][2])
		return cells[2][0];
	if (!!cells[0][0] && cells[0][0] === cells[1][0] && cells[0][0] === cells[2][0])
		return cells[0][0];
	if (!!cells[0][1] && cells[0][1] === cells[1][1] && cells[0][1] === cells[2][1])
		return cells[0][1];
	if (!!cells[0][2] && cells[0][2] === cells[1][2] && cells[0][2] === cells[2][2])
		return cells[0][2];
	if (!!cells[0][0] && cells[0][0] === cells[1][1] && cells[0][0] === cells[2][2])
		return cells[0][0];
	if (!!cells[0][2] && cells[0][2] === cells[1][1] && cells[0][2] === cells[2][0])
		return cells[0][2];

	// return Tie
	if (cells.every((row) => row.every((cell) => !!cell))) return "Tie";
		
	// const winningLines = [
	// 	[[0,0], [0,1], [0,2]],
	// 	[[1,0], [1,1], [1,2]],
	// 	[[2,0], [2,1], [2,2]],
	// 	[[0,0], [1,0], [2,0]],
	// 	[[0,1], [1,1], [2,1]],
	// 	[[0,2], [1,2], [2,2]],
	// 	[[0,0], [1,1], [2,2]],
	// 	[[0,2], [1,1], [2,0]],
	// ];
	return null;
}

export function bestMove(cells) {
	let bestScore = -Infinity;
	let move;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (cells[i][j] === null) {
				cells[i][j] = "O";
				let score = minimax(cells, false);
				cells[i][j] = null;
				if (score > bestScore) {
					bestScore = score;
					move = { i, j };
				}
			}
		}
	}
	return move;
}

const scores = {
	X: -1,
	O: 1,
	Tie: 0,
};

function minimax(cells, isMaximizing) {
	let result = calculateWinner(cells);
	if (result !== null) {
		let score = scores[result];
		return score;
	}
	if (isMaximizing) {
		let bestScore = -Infinity;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (cells[i][j] === null) {
					cells[i][j] = "O";
					let score = minimax(cells, false);
					cells[i][j] = null;
					bestScore = Math.max(score, bestScore);
				}
			}
		}
		return bestScore;
	} else {
		let bestScore = Infinity;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (cells[i][j] === null) {
					cells[i][j] = "X";
					let score = minimax(cells, true);
					cells[i][j] = null;
					bestScore = Math.min(score, bestScore);
				}
			}
		}
		return bestScore;
	}
}
