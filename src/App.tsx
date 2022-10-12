import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Answerboard from './components/Answerboard';
import Keyboard from './components/Keyboard';
import EndGame from './components/EndGame';

//---------------------------------------Typr
type Letters = {
	letter: string;
	keyPressWrongLetter: boolean;
	keyPressCurentLetter: boolean;
	isAnswerWordLetter: boolean;
};

type StateReducer = {
	answerLetters: string[];
	isLoadingAnswerLetters: boolean;
	lettersObj: Letters[];
	// gameIsWon: boolean;
};

type ReducerAction =
	| { type: 'GENERATE_ANSWER_LETTERS' }
	| { type: 'LOADING_ANSWER_LETTERS'; payload: boolean }
	| { type: 'GENEREATE_ANSWER_OBJECT'; payload: string[] }
	| { type: 'MODIFICATION_ANSWER_OBJECT'; payload: Letters[] }
	| { type: 'DRAW_ANSWER_WORD' };
// | { type: 'SET_GAME_IS_WON'; payload: boolean };

//------------------------------------------
//------------------------------------------Variables and outside functions
//------------------------------------------
//------------------------------------------
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

const answerWords: string[] = ['Hangman', 'Awesome', 'Mordor', 'Imagine'];

const generateAnswerObject = (answerWordArray: string[], keyboardLetters: String[]) => {
	console.log('generate object', answerWordArray);

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
	//!! CHange any type Important
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
	return mainLettersObj;
}; //*Create a Letters Object

//------------------------------------------
//------------------------------------------
//------------------------------------------
//------------------------------------------

const randomizeAnswerLetters = () => {
	return [...answerWords[Math.floor(Math.random() * answerWords.length)].toLowerCase()];
};

const initialState = {
	answerLetters: randomizeAnswerLetters(),
	isLoadingAnswerLetters: false,
	lettersObj: [],
	gameIsWon: false,
};

function reducer(state: StateReducer, action: ReducerAction) {
	switch (action.type) {
		case 'GENEREATE_ANSWER_OBJECT':
			console.log('generate answer objewct: ', action.payload);

			return { ...state, lettersObj: generateAnswerObject(action.payload, keyboardLetters) };
		case 'LOADING_ANSWER_LETTERS':
			return { ...state, isLoadingAnswerLetters: action.payload };
		case 'MODIFICATION_ANSWER_OBJECT':
			return { ...state, lettersObj: action.payload };
		case 'DRAW_ANSWER_WORD':
			return {
				...state,
				answerLetters: [
					...answerWords[Math.floor(Math.random() * answerWords.length)].toLowerCase(),
				],
			};
		default:
			throw new Error('');
	}
}

//-----------------------------------------------------

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const [gameIsWon, setGameIsWon] = useState<boolean>(false);

	const keycapOnClickHandler = (letterKeycap: string) => {
		console.log('keycP CLICK');

		const newLettersObj: Letters[] = state.lettersObj.map((letterObj: Letters) => {
			const { letter, keyPressCurentLetter, keyPressWrongLetter, isAnswerWordLetter } = letterObj;

			let currentKeypressLetter = keyPressCurentLetter;
			let wrongKeypressletter = keyPressWrongLetter;

			if (letterKeycap === letter) {
				if (isAnswerWordLetter) {
					currentKeypressLetter = true;
				} else {
					wrongKeypressletter = true;
					// dispatch({ type: 'CURRENT_WRONG_ANSWER', payload: 1 });
				}
			}

			return {
				letter: letter,
				keyPressWrongLetter: wrongKeypressletter,
				keyPressCurentLetter: currentKeypressLetter,
				isAnswerWordLetter: isAnswerWordLetter,
			};
		});

		dispatch({ type: 'MODIFICATION_ANSWER_OBJECT', payload: newLettersObj });
	};

	const gameIsWonHandler = (isWon: boolean) => {
		setGameIsWon(isWon);
		// dispatch({ type: 'SET_GAME_IS_WON', payload: true });
	};

	const resetGameHandler = () => {
		dispatch({ type: 'DRAW_ANSWER_WORD' });

		dispatch({
			type: 'GENEREATE_ANSWER_OBJECT',
			payload: randomizeAnswerLetters(),
		});
		setGameIsWon(false);
		// dispatch({ type: 'SET_GAME_IS_WON', payload: false });
	};

	console.log(state.lettersObj);

	if (!state.isLoadingAnswerLetters) {
		dispatch({ type: 'GENEREATE_ANSWER_OBJECT', payload: randomizeAnswerLetters() });
		dispatch({ type: 'LOADING_ANSWER_LETTERS', payload: true });
	}

	if (state.isLoadingAnswerLetters) {
		return (
			<StyledDiv>
				<Header />
				<Gameboard />
				<StyledKeyboardContainer>
					<Answerboard lettersObj={state.lettersObj} gameIsWonHandler={gameIsWonHandler} />
					<Keyboard lettersObj={state.lettersObj} onClickHandler={keycapOnClickHandler} />
				</StyledKeyboardContainer>

				{/* {state.currentWrongAnswer >= 6 && (
				<EndGame type='Game Over' resetButtonOnClick={resetGameHandler} />
			)} */}
				{gameIsWon && <EndGame type='You Won' resetButtonOnClick={resetGameHandler} />}
			</StyledDiv>
		);
	} else {
		return <StyledDiv></StyledDiv>;
	}
}

const StyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
	flex-wrap: wrap;
	position: relative;

	height: 640px;
	width: 360px;
`;

const StyledKeyboardContainer = styled.div`
	height: 252px;
	width: 360px;

	background: radial-gradient(62.7% 110.54% at 40.97% 29.96%, #008c7b 0%, #230f2f 100%);
`;

export default App;
