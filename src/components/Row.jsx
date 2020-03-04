import React from 'react';
import Cell from './Cell';
import styled from 'styled-components';

const StyledRow = styled.div`
	display: flex;
	justify-content: center;
`

const Row = ({cells, row, handleClick}) => (
	<StyledRow>
		{Array(7).fill(null).map((_, i) => <Cell key={i} cell={cells[i]} row={row} col={i} handleClick={handleClick} />)}
	</StyledRow>
)

export default Row;
