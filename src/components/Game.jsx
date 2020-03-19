import React, { useEffect, useState } from 'react';
import Board from './Board';
import {
	checkDiagonal,
	checkHorizontal,
	transpose,
} from './../util';

const Game = () => {
	// negro: true | rojo: false
	const [player, setPlayer] = useState(false);
	// 1: negro | 2: rojo
	const [winner, setWinner] = useState(0);
	const [cells, setCells] = useState(Array(6).fill(null).map(() => Array(7).fill(0)));

	useEffect(() => {
		const num = player ? 2 : 1;
		console.log('num:', num)
		if (checkVictory(cells, num, 4)) {
			console.log('ganaste')
			setWinner(prevPlayer => prevPlayer ? 1 : 2);
		}
	}, [cells])
	
	const handleClick = (row, col) => {
		if (winner) return; 
		console.log(`row: ${row} | col: ${col}`);
		let temp = [...cells];
		let newRow = findAvailableRow(col);
		temp[newRow][col] = player ? 1 : 2;
		setCells(temp);
		setPlayer(prevPlayer => !prevPlayer);
	}

	const findAvailableRow = (col) => {
		for (let i = 0; i < 6; i++) {
			if (cells[i][col] === 0) {
				return i;
			}
		}
		return -1;
	}

	const checkVictory = (matrix, value, minLen) => {
		console.log(matrix, value, minLen)
		if (checkHorizontal(matrix, value, minLen)) {
			return true;
		}
		const t_matrix = transpose(matrix);
		// vertical
		if (checkHorizontal(t_matrix, value, minLen)) {
			return true;
		}
		// diagonales positivas
		if (checkDiagonal(matrix, value, minLen)) {
			return true;
		}
		// diagonal negativas
		if (checkDiagonal(t_matrix, value, minLen)) {
			return true;
		}
		return false;
	}

	const restart = () => {
		setPlayer(false);
		setWinner(0);
		setCells(Array(6).fill(null).map(() => Array(7).fill(0)));
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
