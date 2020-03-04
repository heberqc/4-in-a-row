import styled from 'styled-components';

const colors = {
	1: 'black',
	2: 'red',
	default: 'white',
};

const Circle = styled.div`
	background-color: ${props => colors[props.cell] || colors['default']};
	border: 1px solid black;
	border-radius: 100%;
	padding-top: 98%;
`

export default Circle;
