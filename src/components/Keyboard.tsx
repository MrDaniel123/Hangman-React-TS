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
		<KeyboardConatainer>
			<StyledkeyboardContainer>{renderButtonKeyboardHandler(keyboardTop)}</StyledkeyboardContainer>
			<StyledkeyboardContainer>
				{renderButtonKeyboardHandler(keyboardMiddle)}
			</StyledkeyboardContainer>
			<StyledkeyboardContainer>
				{renderButtonKeyboardHandler(keyboardBottom)}
			</StyledkeyboardContainer>
		</KeyboardConatainer>
	);
};

const KeyboardConatainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: center;
`;

const StyledkeyboardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	/* height: 25px; */

	/* @media (min-width: 480px) {
		height: 35px;
	}
	@media (min-width: 520px) {
		height: 45px;
	} */
`;

const KeyCapButton = styled.button<PropsStyle>`
	all: unset;
	display: flex;
	align-items: center;
	justify-content: center;

	width: 8vw;
	height: 9vw;
	margin: 3px;
	border-radius: 8px;
	cursor: pointer;
	/* transition: background-color 0.1s; */
	background-color: ${props => props.bgc};

	@media (min-width: 520px) {
		height: 45px;
		width: 45px;
	}

	/* &:active,
	&:hover {
		background-color: rgba(255, 255, 255, 0.9);
	} */

	@media (hover: hover) {
		&:hover {
			background-color: rgba(255, 255, 255, 0.9);
		}
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

		@media (min-width: 380px) {
			font-size: 24px;
		}
		@media (min-width: 420px) {
			font-size: 28px;
		}
		@media (min-width: 480px) {
			font-size: 30px;
		}
		@media (min-width: 520px) {
			font-size: 35px;
		}
	}
`;

export default Keyboard;
