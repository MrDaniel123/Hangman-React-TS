export interface AppStateReducer {
	answer: string;
	goodLetters: string[];
	wrongLetters: string[];
	guessedLetters: string[];
	winGamePopUp: boolean;
}

export type AppReducerAction =
	| { type: 'SET_GOOD_LETTERS'; payload: string[] }
	| { type: 'SET_WRONG_LETTERS'; payload: string[] }
	| { type: 'SET_GUESSED_LETTERS'; payload: string[] }
	| { type: 'SHOW_WIN_GAME_POPUP' }
	| { type: 'RESET_GAME' };
