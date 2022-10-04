import React from 'react';

import styled from 'styled-components';

type Letters = {
	letter: string;
	keyPressWrongLetter: boolean;
	keyPressCurentLetter: boolean;
	isAnswerWordLetter: boolean;
};

type KeyboardProps = {
	lettersObj: Letters[];
	onClickHandler: (letterKeycap: string) => void;
};

type PropsStyle = {
	bgc: string;
};

// backgroundColor = 'rgba(20, 255, 0, 0.47)'; green
// backgroundColor = 'rgba(0, 0, 0, 0.5)'; BLack Wrong letter

const Keyboard = ({ lettersObj, onClickHandler }: KeyboardProps) => {
	const keyboardTop = lettersObj.slice(0, 10);
	const keyboardMiddle = lettersObj.slice(10, 19);
	const keyboardBottom = lettersObj.slice(19, 26);

	const backgroundColorCurrentKeycap = 'rgba(20, 255, 0, 0.47)';
	const backgroundColorWrongKeycap = 'rgba(0, 0, 0, 0.5)';
	const backgroundColorNoClickkeycap = 'rgba(255, 255, 255, 0.5)';

	const renderKeyboardHandler = (keyboardLetters: Letters[]) => {
		const renderKeyboard = keyboardLetters.map(letterObj => {
			const { letter, keyPressCurentLetter, keyPressWrongLetter } = letterObj;

			if (keyPressWrongLetter === true) {
				return (
					<KeyCapDiv
						bgc={backgroundColorWrongKeycap}
						key={letter}
						onClick={onClickHandler.bind(null, letter)}>
						<p>{letter}</p>
					</KeyCapDiv>
				);
			} else if (keyPressCurentLetter === true) {
				return (
					<KeyCapDiv
						bgc={backgroundColorCurrentKeycap}
						key={letter}
						onClick={onClickHandler.bind(null, letter)}>
						<p>{letter}</p>
					</KeyCapDiv>
				);
			} else {
				return (
					<KeyCapDiv
						bgc={backgroundColorNoClickkeycap}
						key={letter}
						onClick={onClickHandler.bind(null, letter)}>
						<p>{letter}</p>
					</KeyCapDiv>
				);
			}
		});

		return renderKeyboard;
	};

	return (
		<>
			<StyledkeyboardContainer>{renderKeyboardHandler(keyboardTop)}</StyledkeyboardContainer>
			<StyledkeyboardContainer>{renderKeyboardHandler(keyboardMiddle)}</StyledkeyboardContainer>
			<StyledkeyboardContainer>{renderKeyboardHandler(keyboardBottom)}</StyledkeyboardContainer>
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

const KeyCapDiv = styled.button<PropsStyle>`
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
	background-color: ${props => props.bgc};

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
