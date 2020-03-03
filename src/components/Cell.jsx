import React from 'react';
import Circle from './Circle';

export default function Cell(props) {
	let style = {
		height: 50,
		width: 50,
		border: '1px solid black',
		backgroundColor: 'yellow'
	};
	return (
		<div style={style} onClick={() => { props.handleClick(props.row, props.col) }}>
			<Circle cell={props.cell} />
		</div>
	);
}
