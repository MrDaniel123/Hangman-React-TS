import React, { useReducer } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Answerboard from './components/Answerboard';
import Keyboard from './components/Keyboard';
import EndGame from './components/EndGame';

type StateReducer = {
	answer: string;
	goodLetters: string[];
	wrongLetters: string[];
	guessedLetters: string[];
	winGamePopUp: boolean;
};

type ReducerAction =
	| { type: 'SET_GOOD_LETTERS'; payload: string[] }
	| { type: 'SET_WRONG_LETTERS'; payload: string[] }
	| { type: 'SET_GUESSED_LETTERS'; payload: string[] }
	| { type: 'SHOW_WIN_GAME_POPUP' }
	| { type: 'RESET_GAME' };

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

const answers: string[] = [
	'mouse',
	'snake',
	'elephant',
	'butterfly',
	'mouse',
	'monkey',
	'chicken',
	'giraffe',
	'crocodrile',
	'hippoptamus',
	'penguin',
	'shark',
	'kangaroo',
	'dolphin',
];

const initialState: StateReducer = {
	answer: answers[Math.floor(Math.random() * answers.length)],
	goodLetters: [],
	wrongLetters: [],
	guessedLetters: [],
	winGamePopUp: false,
};

function reducer(state: StateReducer, action: ReducerAction) {
	switch (action.type) {
		case 'SET_GOOD_LETTERS':
			return { ...state, goodLetters: action.payload };
		case 'SET_WRONG_LETTERS':
			return { ...state, wrongLetters: action.payload };
		case 'SET_GUESSED_LETTERS':
			return { ...state, guessedLetters: action.payload };
		case 'SHOW_WIN_GAME_POPUP':
			return { ...state, winGamePopUp: true };
		case 'RESET_GAME':
			return {
				...state,
				goodLetters: [],
				wrongLetters: [],
				guessedLetters: [],
				winGamePopUp: false,
				answer: answers[Math.floor(Math.random() * answers.length)],
			};
		default:
			throw new Error();
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const keyboardClickHandler = (clickedLetter: string) => {
		let lettersHandler;
		if (state.answer.includes(clickedLetter)) {
			lettersHandler = state.goodLetters;
			lettersHandler.push(clickedLetter);
			dispatch({ type: 'SET_GOOD_LETTERS', payload: lettersHandler });
			setGuessedLetters();
		} else {
			lettersHandler = state.wrongLetters;
			lettersHandler.push(clickedLetter);
			dispatch({ type: 'SET_WRONG_LETTERS', payload: lettersHandler });
		}
	};

	const setGuessedLetters = () => {
		let answerArray = [...state.answer];
		let guessedLettersHandler = state.guessedLetters;

		const guessedLettersArray = answerArray.filter(letter => {
			if (state.goodLetters.includes(letter)) {
				guessedLettersHandler.push(letter);
				return guessedLettersHandler;
			}
		});

		dispatch({ type: 'SET_GUESSED_LETTERS', payload: guessedLettersArray });
	};

	const checkGameIsWon = () => {
		if (state.guessedLetters.length === state.answer.length && !state.winGamePopUp) {
			dispatch({ type: 'SHOW_WIN_GAME_POPUP' });
		}
	};

	const resetGameHandler = () => {
		dispatch({ type: 'RESET_GAME' });
	};

	checkGameIsWon();

	return (
		<StyledDiv>
			<Header />
			<Gameboard wrongAnswerLetters={state.wrongLetters} />
			<StyledKeyboardContainer>
				<Answerboard answer={state.answer} guesedLetters={state.guessedLetters} />
				<Keyboard
					keyboardLetters={keyboardLetters}
					wrongLetters={state.wrongLetters}
					goodLetters={state.goodLetters}
					onClickHandler={keyboardClickHandler}
				/>
			</StyledKeyboardContainer>

			{state.wrongLetters.length >= 7 && (
				<EndGame type='Game Over' resetGameHandler={resetGameHandler} />
			)}
			{state.winGamePopUp && <EndGame type='You Won' resetGameHandler={resetGameHandler} />}
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	flex-direction: column;

	position: relative;
	min-height: 640px;
	height: 100vh;
	max-height: 720px;
	min-width: 360px;
	width: 100%;
	max-width: 640px;
`;

const StyledKeyboardContainer = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;

	background: radial-gradient(62.7% 110.54% at 40.97% 29.96%, #008c7b 0%, #230f2f 100%);
`;

export default App;
