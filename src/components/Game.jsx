import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
	constructor(props) {
		super(props);
		let cells = [];
		for (let i = 0; i < 6; i++) {
			cells.push(new Array(7).fill(0));
		}
		this.state = { player: false, cells: cells, winner: 0 };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(row, col) {
		if (this.state.winner) return;
		console.log(`row: ${row} | col: ${col}`);
		console.log(this.state.player);
		let temp = [];
		for (let i = 0; i < 6; i++) {
			temp.push(this.state.cells[i].slice());
		}
		let newRow = this.findAvailableRow(col);
		temp[newRow][col] = this.state.player ? 1 : 2;
		this.setState({ cells: temp, player: !this.state.player }, () => {
			if (this.checkVictory(newRow, col)) {
				console.log('win');
				this.setState({ winner: this.state.player ? 2 : 1 });
			}
		});
	}

	findAvailableRow(col) {
		for (let i = 0; i < 6; i++) {
			if (this.state.cells[i][col] === 0) {
				return i;
			}
		}
		return -1;
	}

	checkVictory(row, col) {
		let player = this.state.player ? 2 : 1;
		let board = this.state.cells;
		let contador = 0;
		// horizontal
		for (let i = 0; col + i < 7; i++) {
			if (board[row][col + i] === player) contador++;
			else break;
		}
		for (let i = 1; col - i >= 0; i++) {
			if (board[row][col - i] === player) contador++;
			else break;
		}
		if (contador >= 4) return true;
		else contador = 0;
		// positive diagonal
		for (let i = 0; row + i < 6 && col + i < 7; i++) {
			if (board[row + i][col + i] === player) contador++;
			else break;
		}
		for (let i = 1; row - i >= 0 && col - i >= 0; i++) {
			if (board[row - i][col - i] === player) contador++;
			else break;
		}
		if (contador >= 4) return true;
		else contador = 0;
		// negative diagonal
		for (let i = 0; row + i < 6 && col - i >= 0; i++) {
			if (board[row + i][col - i] === player) contador++;
			else break;
		}
		for (let i = 1; row - i >= 0 && col + i < 7; i++) {
			if (board[row - i][col + i] === player) contador++;
			else break;
		}
		if (contador >= 4) return true;
		else contador = 0;
		// vertical
		for (let i = 0; row + i < 6; i++) {
			if (board[row + i][col] === player) contador++;
			else break;
		}
		for (let i = 1; row - i >= 0; i++) {
			if (board[row - i][col] === player) contador++;
			else break;
		}
		if (contador >= 4) return true;
		else contador = 0;
		return false;
	}

	restart() {
		let cells = [];
		for (let i = 0; i < 6; i++) {
			cells.push(new Array(7).fill(0));
		}
		this.setState({ player: false, cells: cells, winner: 0 });
	}

	render() {
		return (
			<div>
				<h1>{this.state.winner > 0 ? this.state.winner === 1 ? 'Black Wins' : 'Red Wins' : this.state.player ? 'Blacks Turn' : 'Reds Turn'} </h1>
				<Board cells={this.state.cells} handleClick={this.handleClick} />
				<button onClick={() => this.restart()}>Restart</button>
			</div>
		);
	}
}

export default Game;
