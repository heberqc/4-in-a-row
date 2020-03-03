import React from 'react';

export default function Circle(props) {
	let color = 'white';
	if (props.cell === 1) {
		color = 'black';
	} else if (props.cell === 2) {
		color = 'red';
	}
	let style = {
		backgroundColor: color,
		border: '1px solid black',
		borderRadius: '100%',
		paddingTop: '98%'
	};
	return (
		<div style={style}></div>
	);
}
