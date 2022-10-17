import React from 'react';
import styled from 'styled-components';

type AnswerProps = {
	answer: string;
	guesedLetters: string[];
};

const Answerboard = ({ answer, guesedLetters }: AnswerProps) => {
	const answerArray = [...answer];
	const renderAnswersLetters = answerArray.map((letter, index) => {
		if (guesedLetters.includes(letter)) {
			return (
				<LetterStyledDiv key={index}>
					<p>{letter.toUpperCase()}</p>
					<span></span>
				</LetterStyledDiv>
			);
		} else {
			return (
				<EmptyLetterDiv key={index}>
					<p></p>
					<span></span>
				</EmptyLetterDiv>
			);
		}
	});

	return (
		<StyledContainerDiv>
			<WordContainerDiv>{renderAnswersLetters}</WordContainerDiv>
		</StyledContainerDiv>
	);
};

const StyledContainerDiv = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
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

	@media (min-width: 480px) {
		height: 40px;
		width: 40px;
	}
	@media (min-width: 520px) {
		height: 45px;
		width: 45px;
	}

	& p {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;

		font-size: 24px;
		font-weight: bold;
		color: #fff;

		@media (min-width: 480px) {
			font-size: 28px;
		}
		@media (min-width: 520px) {
			font-size: 32px;
		}
	}

	& span {
		height: 3px;
		width: 100%;
		border-radius: 3px;

		background-color: #000;

		@media (min-width: 480px) {
			height: 5px;
		}
		@media (min-width: 520px) {
			height: 7px;
		}
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

	@media (min-width: 480px) {
		height: 40px;
		width: 40px;
	}
	@media (min-width: 520px) {
		height: 45px;
		width: 45px;
	}
	& p {
		width: 100%;
	}

	& span {
		height: 3px;
		width: 100%;
		border-radius: 3px;

		background-color: #fff;

		@media (min-width: 480px) {
			height: 5px;
		}
		@media (min-width: 520px) {
			height: 7px;
		}
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
