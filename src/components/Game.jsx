import React, {useState} from 'react';
import Board from './Board';

const Game = () => {
	const [player, setPlayer] = useState(false);
	const [cells, setCells] = useState(Array(6).fill(null).map((() => Array(7).fill(0))));
	const [winner, setWinner] = useState(0);

	const handleClick = (row, col) => {
		if (winner) return;
		console.log(`row: ${row} | col: ${col}`);
		console.log(player);
		let temp = [];
		for (let i = 0; i < 6; i++) {
			temp.push(cells[i].slice());
		}
		let newRow = findAvailableRow(col);
		temp[newRow][col] = player ? 1 : 2;
		setCells(temp);
		setPlayer(!player);
		if (checkVictory(newRow, col)) {
			console.log('win');
			setWinner(player ? 2 : 1);
		}
	}

	const findAvailableRow = (col) => {
		for (let i = 0; i < 6; i++) {
			if (cells[i][col] === 0) {
				return i;
			}
		}
		return -1;
	}

	const checkVictory = (row, col) => {
		let player_n = player ? 2 : 1;
		let board = cells;
		let contador = 0;
		// horizontal
		for (let i = 0; col + i < 7; i++) {
			if (board[row][col + i] === player_n) contador++;
			else break;
		}
		for (let i = 1; col - i >= 0; i++) {
			if (board[row][col - i] === player_n) contador++;
			else break;
		}
		if (contador >= 4) return true;
		else contador = 0;
		// positive diagonal
		for (let i = 0; row + i < 6 && col + i < 7; i++) {
			if (board[row + i][col + i] === player_n) contador++;
			else break;
		}
		for (let i = 1; row - i >= 0 && col - i >= 0; i++) {
			if (board[row - i][col - i] === player_n) contador++;
			else break;
		}
		if (contador >= 4) return true;
		else contador = 0;
		// negative diagonal
		for (let i = 0; row + i < 6 && col - i >= 0; i++) {
			if (board[row + i][col - i] === player_n) contador++;
			else break;
		}
		for (let i = 1; row - i >= 0 && col + i < 7; i++) {
			if (board[row - i][col + i] === player_n) contador++;
			else break;
		}
		if (contador >= 4) return true;
		else contador = 0;
		// vertical
		for (let i = 0; row + i < 6; i++) {
			if (board[row + i][col] === player_n) contador++;
			else break;
		}
		for (let i = 1; row - i >= 0; i++) {
			if (board[row - i][col] === player_n) contador++;
			else break;
		}
		if (contador >= 4) return true;
		else contador = 0;
		return false;
	}

	const restart = () => {
		setPlayer(false);
		setCells(cells);
		setWinner(Array(6).fill(null).map((() => Array(7).fill(0))));
	}

	return (
		<>
			<h1>{winner > 0 ? winner === 1 ? 'Black Wins' : 'Red Wins' : player ? 'Blacks Turn' : 'Reds Turn'} </h1>
			<Board cells={cells} handleClick={handleClick} />
			<button onClick={() => restart()}>Restart</button>
		</>
	)
};

export default Game;
