import React from 'react';

import styled from 'styled-components';

const Header = () => {
	return (
		<HeaderContainer>
			<p>Hangman</p>
			<span>World City</span>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 60px;
	background-color: #00503d;

	& > p {
		font-size: 40px;
		color: #fff;
		font-weight: bold;
	}

	& > span {
		font-size: 32px;
		color: #a6a6a6;
		font-weight: bold;
	}
`;

export default Header;
