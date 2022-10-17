import React from 'react';

import styled from 'styled-components';

import hangmanOneWrongLetter from '../assets/hangman1.png';
import hangmanTwoWrongLetter from '../assets/hangman2.png';
import hangmanTreeWrongLetter from '../assets/hangman3.png';
import hangmanFourWrongLetter from '../assets/hangman4.png';
import hangmanFiveWrongLetter from '../assets/hangman5.png';
import hangmanSixWrongLetter from '../assets/hangman6.png';
import hangmanSevenWrongLetter from '../assets/hangman7.png';

type GameBoardState = {
	wrongAnswerLetters: string[];
};

const Gameboard = ({ wrongAnswerLetters }: GameBoardState) => {
	let hangmanImage: string | boolean = false;
	switch (wrongAnswerLetters.length) {
		case 1: {
			hangmanImage = hangmanOneWrongLetter;
			break;
		}
		case 2: {
			hangmanImage = hangmanTwoWrongLetter;
			break;
		}
		case 3: {
			hangmanImage = hangmanTreeWrongLetter;
			break;
		}
		case 4: {
			hangmanImage = hangmanFourWrongLetter;
			break;
		}
		case 5: {
			hangmanImage = hangmanFiveWrongLetter;
			break;
		}
		case 6: {
			hangmanImage = hangmanSixWrongLetter;
			break;
		}
		case 7: {
			hangmanImage = hangmanSevenWrongLetter;
			break;
		}
		default: {
			hangmanImage = false;
			break;
		}
	}

	return (
		<StyledContainerDiv>
			{hangmanImage && <img src={hangmanImage} alt='Hangman img ' />}
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

	img {
		width: 360px;
		height: 260px;
	}
`;

export default Gameboard;
