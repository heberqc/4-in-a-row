import React from 'react';
import Row from './Row';

const Board = ({cells, handleClick}) => <>
	{Array(5).fill(null).map((_, i) => <Row key={i} row={i} cells={cells[i]} handleClick={handleClick} />).reverse()}
</>

export default Board;
