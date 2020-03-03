import React from 'react';
import Row from './Row';

export default function Board(props) {
	let rows = []
	for (let i = 5; i >= 0; i--) {
		rows.push(
			<Row key={i} row={i} cells={props.cells[i]} handleClick={props.handleClick} />
		);
	}
	return (
		<div>{rows}</div>
	);
}
