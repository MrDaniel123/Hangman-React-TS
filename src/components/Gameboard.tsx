import React from 'react';

import styled from 'styled-components';

const Gameboard = () => {
	return <StyledContainerDiv>Gameboard</StyledContainerDiv>;
};

const StyledContainerDiv = styled.div`
	width: 360px;
	height: 328px;

	background: radial-gradient(
		133.61% 94.63% at 48.75% -24.1%,
		rgba(0, 185, 162, 0.23) 0%,
		#ffffff 100%
	);
`;

export default Gameboard;
