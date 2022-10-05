import React from 'react';

import styled from 'styled-components';

import resetIcon from '../assets/resetIcon.svg';

interface Props {
	type: string;
	resetButtonOnClick: () => void;
}

type StyleProps = {
	bgcColor: string;
};

const EndGame = ({ type, resetButtonOnClick }: Props) => {
	let bgcColor = 'rgba(255, 0, 0, 0.7)';

	if (type === 'You Won') {
		bgcColor = 'rgba(4, 175, 0, 0.7);';
	}

	return (
		<ContainerDiv bgcColor={bgcColor}>
			<div>
				<p>{type}</p>
			</div>
			<button onClick={resetButtonOnClick}>
				Reset
				<img src={resetIcon} alt='Reset Button' />
			</button>
		</ContainerDiv>
	);
};

const ContainerDiv = styled.div<StyleProps>`
	display: flex;
	justify-content: center;
	align-content: flex-start;
	flex-wrap: wrap;

	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;

	z-index: 3;
	background-color: rgba(0, 0, 0, 0.4);

	& div {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 80px;
		margin-top: 160px;

		background-color: ${props => props.bgcColor};

		& p {
			font-size: 40px;
			font-weight: bold;
			color: #fff;
		}
	}

	& button {
		all: unset;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		border-radius: 50px;
		width: 210px;
		height: 70px;
		margin-top: 40px;

		background-color: #21959c;
		font-size: 40px;
		font-weight: bold;
		color: #fff;
		cursor: pointer;
		transition: background-color 0.1s;

		&:hover {
			background-color: #196b6f;
		}

		& img {
			height: 60px;
			width: 60px;
		}
	}
`;

export default EndGame;
