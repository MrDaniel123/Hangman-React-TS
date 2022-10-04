import React from 'react';

import styled from 'styled-components';

interface Props {
	checkAnswerOnClick: (letter: string) => void;
	goodLetter: string[];
	badLetter: string[];
}

interface StyledProps {
	bgcColor: string;
}

const keyboardTop: string[] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const keyboardMiddle: string[] = ['a', 's', 'd', 'f', 'g', 'h', 'J', 'k', 'l'];
const keyboardBottom: string[] = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

const Keyboard = ({ checkAnswerOnClick, goodLetter, badLetter }: Props) => {
	//!!Not working Don't now why
	//todo Must Fix It!!!
	// const renderKeyboaard = (keyboard: string[]): ReactElement => {
	// 	keyboard.map(keyCap => {
	// 		return (
	// 			<KeyCapDiv>
	// 				<p>{keyCap} </p>
	// 			</KeyCapDiv>
	// 		);
	// 	});
	// };

	const keyboardTopKeyCap = keyboardTop.map(keyCap => {
		let backgroundColor: string = 'rgba(255, 255, 255, 0.5)';

		goodLetter.forEach(letter => {
			if (letter === keyCap) {
				backgroundColor = 'rgba(20, 255, 0, 0.47)';
			}
		});

		badLetter.forEach(letter => {
			if (letter === keyCap) {
				backgroundColor = 'rgba(0, 0, 0, 0.5)';
			}
		});

		return (
			<KeyCapDiv
				key={keyCap}
				onClick={checkAnswerOnClick.bind(null, keyCap)}
				bgcColor={backgroundColor}>
				<p>{keyCap}</p>
			</KeyCapDiv>
		);
	});

	const keyboardMiddleKeyCap = keyboardMiddle.map(keyCap => {
		let backgroundColor: string = 'rgba(255, 255, 255, 0.5)';

		goodLetter.forEach(letter => {
			if (letter === keyCap) {
				backgroundColor = 'rgba(20, 255, 0, 0.47)';
			}
		});

		badLetter.forEach(letter => {
			if (letter === keyCap) {
				backgroundColor = 'rgba(0, 0, 0, 0.5)';
			}
		});
		return (
			<KeyCapDiv
				key={keyCap}
				onClick={checkAnswerOnClick.bind(null, keyCap)}
				bgcColor={backgroundColor}>
				<p>{keyCap}</p>
			</KeyCapDiv>
		);
	});

	const keyboardBottomKeyCap = keyboardBottom.map(keyCap => {
		let backgroundColor: string = 'rgba(255, 255, 255, 0.5)';

		goodLetter.forEach(letter => {
			if (letter === keyCap) {
				backgroundColor = 'rgba(20, 255, 0, 0.47)';
			}
		});

		badLetter.forEach(letter => {
			if (letter === keyCap) {
				backgroundColor = 'rgba(0, 0, 0, 0.5)';
			}
		});

		return (
			<KeyCapDiv
				key={keyCap}
				onClick={checkAnswerOnClick.bind(null, keyCap)}
				bgcColor={backgroundColor}>
				<p>{keyCap}</p>
			</KeyCapDiv>
		);
	});

	return (
		<>
			<StyledkeyboardContainer>{keyboardTopKeyCap}</StyledkeyboardContainer>
			<StyledkeyboardContainer>{keyboardMiddleKeyCap}</StyledkeyboardContainer>
			<StyledkeyboardContainer>{keyboardBottomKeyCap}</StyledkeyboardContainer>
		</>
	);
};

const StyledkeyboardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 360px;
	height: 25px;
	margin-top: 5px;
`;

const KeyCapDiv = styled.button<StyledProps>`
	all: unset;
	display: flex;
	align-items: center;
	justify-content: center;

	width: 29px;
	height: 25px;
	margin: 3px;
	border-radius: 8px;
	cursor: pointer;
	/* transition: background-color 0.1s; */

	background-color: ${props => props.bgcColor};

	&:hover {
		background-color: rgba(255, 255, 255, 0.9);
	}

	& > p {
		font-size: 20px;
		font-weight: bold;
		text-transform: uppercase;

		background: linear-gradient(196.78deg, #2400ff 0.02%, #9b0070 80.67%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}
`;

export default Keyboard;
