import React from 'react';
import styled from 'styled-components';

type Letters = {
	letter: string;
	keyPressWrongLetter: boolean;
	keyPressCurentLetter: boolean;
	isAnswerWordLetter: boolean;
};

type AnswerProps = {
	lettersObj: Letters[];
	gameIsWonHandler: (isWon: boolean) => void;
};

type Tab = {
	letter: string;
	isGoodAnswer: boolean;
};

const Answerboard = ({ lettersObj, gameIsWonHandler }: AnswerProps) => {
	let answerLettersObj: Tab[] = [];

	// //* Create AnswerLetterObj Magic XD
	// answerWordLetters.forEach(answerLetter => {
	// 	lettersObj.forEach(letterObj => {
	// 		const { letter, keyPressCurentLetter } = letterObj;
	// 		if (letter === answerLetter && keyPressCurentLetter) {
	// 			answerLettersObj.push({
	// 				letter: letter,
	// 				isGoodAnswer: true,
	// 			});
	// 		} else if (letter === answerLetter) {
	// 			answerLettersObj.push({
	// 				letter: letter,
	// 				isGoodAnswer: false,
	// 			});
	// 		}
	// 	});
	// });

	lettersObj.forEach(letterObj => {
		if (letterObj.isAnswerWordLetter) {
			answerLettersObj.push({
				letter: letterObj.letter,
				isGoodAnswer: true,
			});
		} else {
			answerLettersObj.push({
				letter: letterObj.letter,
				isGoodAnswer: false,
			});
		}
	});

	const goodChoices = answerLettersObj.filter(answerLetterObj => {
		if (answerLetterObj.isGoodAnswer) {
			return [true];
		}
	});

	//! if won must click reset button two times
	//!Propably bug is there Fix IT!!!
	// if (goodChoices.length >= answerWordLetters.length) {
	// 	gameIsWonHandler(true);
	// }

	const renderAnswerLetters = answerLettersObj.map((answerLetterObj, index) => {
		if (answerLetterObj.isGoodAnswer) {
			return (
				<LetterStyledDiv key={answerLetterObj.letter + index}>
					<p>{answerLetterObj.letter.toUpperCase()}</p>
					<span></span>
				</LetterStyledDiv>
			);
		} else {
			return (
				<EmptyLetterDiv key={answerLetterObj.letter + index}>
					<p></p>
					<span></span>
				</EmptyLetterDiv>
			);
		}
	});

	return (
		<StyledContainerDiv>
			<WordContainerDiv>{renderAnswerLetters}</WordContainerDiv>
		</StyledContainerDiv>
	);
};

const StyledContainerDiv = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 360px;
	height: 128px;
`;

const WordContainerDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
`;

const LetterStyledDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	flex-wrap: wrap;
	height: 30px;
	width: 30px;
	margin: 0 3px;

	& p {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;

		font-size: 24px;
		font-weight: bold;
		color: #fff;
	}

	& span {
		height: 3px;
		width: 100%;
		border-radius: 3px;

		background-color: #000;
	}
`;

const EmptyLetterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	flex-wrap: wrap;

	height: 30px;
	width: 30px;
	margin: 0 3px;

	& p {
		width: 100%;
	}

	& span {
		height: 3px;
		width: 100%;
		border-radius: 3px;

		background-color: #fff;
	}
`;

export default Answerboard;

{
	/* <LetterStyledDiv>
<p>{letter.letter.toUpperCase()}</p>
<span></span>
</LetterStyledDiv>
) : (
<EmptyLetterDiv>
<p></p>
<span></span> */
}
