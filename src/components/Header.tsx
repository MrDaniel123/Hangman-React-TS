import React from 'react';

import styled from 'styled-components';

const Header = () => {
	return <HeaderContainerDiv>Hangman</HeaderContainerDiv>;
};

const HeaderContainerDiv = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	width: 360px;
	height: 60px;
	background-color: #00503d;

	font-size: 40px;
	color: #fff;
	font-weight: bold;
`;

export default Header;
