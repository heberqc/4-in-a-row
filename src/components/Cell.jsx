import React from 'react';
import styled from 'styled-components';
import Circle from './Circle';

const StyledCell = styled.div`
	height: 50px;
	width: 50px;
	border: 1px solid black;
	background-color: yellow;
`

const Cell = ({row, col, cell, handleClick}) => (
	<StyledCell onClick={() => handleClick(row, col)}>
		<Circle cell={cell} />
	</StyledCell>
)

export default Cell;
