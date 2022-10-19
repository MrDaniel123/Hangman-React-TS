import React from 'react';

import styled from 'styled-components';

import { hangmanImages } from '../data/data';

type GameBoardState = {
	wrongAnswerLetters: string[];
};

const Gameboard = ({ wrongAnswerLetters }: GameBoardState) => {
	return (
		<StyledContainerDiv>
			{wrongAnswerLetters.length > 0 && (
				<img src={hangmanImages[wrongAnswerLetters.length - 1]} alt='Hangman img' />
			)}
		</StyledContainerDiv>
	);
};

const StyledContainerDiv = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	grid-row: 2 /3;

	width: 100%;
	height: 328px;
	border-bottom: 10px solid black;

	background: radial-gradient(
		133.61% 94.63% at 48.75% -24.1%,
		rgba(0, 185, 162, 0.23) 0%,
		#ffffff 100%
	);
`;

export default Gameboard;
