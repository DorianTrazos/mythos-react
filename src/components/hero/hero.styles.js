import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const StyledHeroTitle = styled.h2`
	font-family: ${FONTS.cinzel};
	font-size: 2rem;
	text-align: center;
	color: ${COLORS.primary};
	letter-spacing: 2px;
`;

const StyledHeroText = styled.p`
	font-size: 0.875rem;
	text-align: center;
	color: ${COLORS.tabs};
	line-height: 1.75rem;
	padding-inline: 1.25rem;
`;

export { StyledHeroText, StyledHeroTitle };
