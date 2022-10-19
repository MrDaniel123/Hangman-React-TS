import { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	font-family: Arial, Helvetica, sans-serif;

	background-color: rgb(41, 41, 41);
}`;

export const showPopup = keyframes`
from{
	opacity: 0;
}

to{
	opacity: 1;
}
`;

export default GlobalStyle;
