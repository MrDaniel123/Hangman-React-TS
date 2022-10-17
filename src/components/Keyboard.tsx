import React from 'react';

import styled from 'styled-components';

type KeyboardProps = {
	keyboardLetters: string[];
	wrongLetters: string[];
	goodLetters: string[];
	onClickHandler: (clickedLetter: string) => void;
};

type PropsStyle = {
	bgc: string;
};

const Keyboard = ({
	keyboardLetters,
	wrongLetters,
	goodLetters,
	onClickHandler,
}: KeyboardProps) => {
	const keyboardTop = keyboardLetters.slice(0, 10);
	const keyboardMiddle = keyboardLetters.slice(10, 19);
	const keyboardBottom = keyboardLetters.slice(19, 26);

	const backgroundColorGoodKeycap = 'rgba(20, 255, 0, 0.47)';
	const backgroundColorWrongKeycap = 'rgba(0, 0, 0, 0.5)';
	const backgroundColorNoClickKeycap = 'rgba(255, 255, 255, 0.5)';

	const renderButtonKeyboardHandler = (letters: string[]) => {
		const renderKeyboard = letters.map(letter => {
			if (goodLetters.includes(letter)) {
				return (
					<KeyCapButton bgc={backgroundColorGoodKeycap} key={letter}>
						<p>{letter}</p>
					</KeyCapButton>
				);
			} else if (wrongLetters.includes(letter)) {
				return (
					<KeyCapButton bgc={backgroundColorWrongKeycap} key={letter}>
						<p>{letter}</p>
					</KeyCapButton>
				);
			} else {
				return (
					<KeyCapButton
						onClick={() => onClickHandler(letter)}
						bgc={backgroundColorNoClickKeycap}
						key={letter}>
						<p>{letter}</p>
					</KeyCapButton>
				);
			}
		});
		return renderKeyboard;
	};

	return (
		<>
			<StyledkeyboardContainer>{renderButtonKeyboardHandler(keyboardTop)}</StyledkeyboardContainer>
			<StyledkeyboardContainer>
				{renderButtonKeyboardHandler(keyboardMiddle)}
			</StyledkeyboardContainer>
			<StyledkeyboardContainer>
				{renderButtonKeyboardHandler(keyboardBottom)}
			</StyledkeyboardContainer>
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

const KeyCapButton = styled.button<PropsStyle>`
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
