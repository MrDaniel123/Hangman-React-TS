import { answers } from '../data/data';
import { AppStateReducer, AppReducerAction } from '../utils/types';

export const initialState: AppStateReducer = {
	answer: answers[Math.floor(Math.random() * answers.length)].toLowerCase(),
	goodLetters: [],
	wrongLetters: [],
	guessedLetters: [],
	winGamePopUp: false,
};

export function reducer(state: AppStateReducer, action: AppReducerAction) {
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
				answer: answers[Math.floor(Math.random() * answers.length)].toLowerCase(),
			};
		default:
			throw new Error();
	}
}
