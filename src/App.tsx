import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Answerboard from './components/Answerboard';
import Keyboard from './components/Keyboard';
import EndGame from './components/EndGame';

interface Letter {
	letter: string;
	isShow: boolean;
}

function App() {
	console.log('rerender');

	const answer: string = 'Daniello';
	const answerLetters = Array.from(answer.toLowerCase());
	// let spaceIndex: number | undefined;
	let counterGoodLetters: number = 0;

	const [goodLetter, setGoodLetter] = useState<string[]>([]);
	const [badLetter, setBadLetter] = useState<string[]>([]);
	const [letters, setLetters] = useState<Letter[]>();
	const [spaceIndex, setSpaceIndex] = useState<number>();
	const [gameIsOwer, setGameIsOwer] = useState<boolean>(false);

	const createLettersObjectHandler = () => {
		// console.log(letters);

		if (letters === undefined) {
			//TODO Ranodm words grenerator
			console.log('lsl');

			answerLetters.filter((letter, index) => {
				if (letter === ' ') {
					setSpaceIndex(index);
				}
			}); //*Filter is space exist

			if (spaceIndex) {
				//* Cut space
				const firstWord = answerLetters.slice(0, spaceIndex);
				const secondWord = answerLetters.slice(spaceIndex + 1, answerLetters.length);

				const word = firstWord.concat(secondWord);

				const wordObj: Letter[] = word.map(letter => {
					return {
						letter: letter,
						isShow: false,
					};
				});

				setLetters(wordObj);
			}
			const wordObj: Letter[] = answerLetters.map(letter => {
				return {
					letter: letter,
					isShow: false,
				};
			});
			setLetters(wordObj);
		}
	};

	const checkLettersHandler = () => {
		//!spagetti code Fix IT!!!!
		if (letters !== undefined) {
			goodLetter.forEach(letter => {
				letters?.forEach(letterObj => {
					if (letter === letterObj.letter) {
						const newLetters = [...letters];

						newLetters.forEach(letterObj => {
							if (letterObj.letter === letter) {
								// eslint-disable-next-line no-sequences
								return letterObj.letter, (letterObj.isShow = true);
							} else return letterObj;
						});
					}
				});
			});
		}
	};

	const checkAnswerHandler = (letter: string) => {
		if (answerLetters.find(findLetter => findLetter === letter)) {
			if (!goodLetter.find(findLetter => findLetter === letter)) {
				setGoodLetter(prevState => [...prevState, letter]);
			} //*Checks whether a letter has been used
		} else {
			setBadLetter(prevState => [...prevState, letter]);
		}
	}; //*keyboard checking letters

	const checkWon = () => {
		counterGoodLetters = 0;
		letters?.forEach(letterObj => {
			if (letterObj.isShow === false) {
				return null;
			} else {
				counterGoodLetters++;
			}
		});
		if (counterGoodLetters === letters?.length) {
			console.log('Gra skońµćzone');

			setGameIsOwer(true);
		}
	};

	const resetGameHandler = () => {
		counterGoodLetters = 0;
		setBadLetter([]);
		setGoodLetter([]);
		setLetters([]);
		setGameIsOwer(false);
	};

	checkWon();
	createLettersObjectHandler();
	checkLettersHandler();

	return (
		<StyledDiv>
			<Header />
			<Gameboard />
			<StyledKeyboardContainer>
				<Answerboard
					answerLetters={answerLetters}
					goodLetters={goodLetter}
					spaceIndex={spaceIndex}
					letters={letters}
				/>
				<Keyboard
					checkAnswerOnClick={checkAnswerHandler}
					badLetter={badLetter}
					goodLetter={goodLetter}
				/>
			</StyledKeyboardContainer>

			{badLetter.length >= 10 && <EndGame resetOnClick={resetGameHandler} type='Game Over' />}
			{gameIsOwer && <EndGame resetOnClick={resetGameHandler} type='You Won' />}
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
