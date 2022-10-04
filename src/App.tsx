import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Answerboard from './components/Answerboard';
import Keyboard from './components/Keyboard';
import EndGame from './components/EndGame';

const keyboardLetters: string[] = [
	'q',
	'w',
	'e',
	'r',
	't',
	'y',
	'u',
	'i',
	'o',
	'p',
	'a',
	's',
	'd',
	'f',
	'g',
	'h',
	'J',
	'k',
	'l',
	'z',
	'x',
	'c',
	'v',
	'b',
	'n',
	'm',
];

const answer = 'Hangman';

type Letters = {
	letter: string;
	keyPressWrongLetter: boolean;
	keyPressCurentLetter: boolean;
	isAnswerWordLetter: boolean;
};

function App() {
	const [lettersObj, setLettersObj] = useState<Letters[]>([]);

	useEffect(() => {
		createAnswerObjHandler(answer, keyboardLetters);
	}, []);

	const createAnswerObjHandler = (answerWord: string, keyboardLetters: String[]) => {
		//*CHecking whtch letters is answer letters
		const answerWordArray = [...answerWord.toLowerCase()];
		const lettersOnAnswer = keyboardLetters.filter(letterKeyboard => {
			const answerLetter = answerWordArray.filter(letterAnswer => {
				if (letterAnswer === letterKeyboard) {
					return letterKeyboard;
				}
			});

			if (answerLetter.length !== 0) {
				return answerLetter;
			}
		});
		//ToDO Change "any" type is not good
		const mainLettersObj: any = keyboardLetters.map(letterKeyboard => {
			let letterIsInAnswer: boolean = false;

			lettersOnAnswer.filter(letterAnswer => {
				if (letterAnswer === letterKeyboard) {
					return (letterIsInAnswer = true);
				}
			});

			return {
				letter: letterKeyboard,
				keyPressWrongLetter: false,
				keyPressCurentLetter: false,
				isAnswerWordLetter: letterIsInAnswer,
			};
		});
		setLettersObj(mainLettersObj);
	}; //*Create a Letters Object

	const keycapOnClickHandler = (letterKeycap: string) => {
		const newLetterObj: any = lettersObj.map((letterObj, index) => {
			const { letter, keyPressCurentLetter, keyPressWrongLetter, isAnswerWordLetter } = letterObj;

			let currentKeypressLetter = keyPressCurentLetter;
			let wrongKeypressletter = keyPressWrongLetter;

			if (letterKeycap === letter) {
				if (isAnswerWordLetter) {
					currentKeypressLetter = true;
				} else {
					wrongKeypressletter = true;
				}
			}

			return {
				letter: letter,
				keyPressWrongLetter: wrongKeypressletter,
				keyPressCurentLetter: currentKeypressLetter,
				isAnswerWordLetter: isAnswerWordLetter,
			};
		});

		setLettersObj(newLetterObj);
	};

	return (
		<StyledDiv>
			<Header />
			<Gameboard />
			<StyledKeyboardContainer>
				<Keyboard lettersObj={lettersObj} onClickHandler={keycapOnClickHandler} />
			</StyledKeyboardContainer>
			{/* 
			{badLetter.length >= 10 && <EndGame resetOnClick={resetGameHandler} type='Game Over' />}
			{gameIsOwer && <EndGame resetOnClick={resetGameHandler} type='You Won' />} */}
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
	flex-wrap: wrap;
	position: relative;

	height: 640px;
	width: 360px;
	/* border: 1px solid black; */
`;

const StyledKeyboardContainer = styled.div`
	height: 252px;
	width: 360px;

	background: radial-gradient(62.7% 110.54% at 40.97% 29.96%, #008c7b 0%, #230f2f 100%);
`;

export default App;
