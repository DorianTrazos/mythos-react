import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const StyledHeader = styled.header`
	display: flex;
	padding: 1.5rem 1.25rem;
	color: ${COLORS.primary};
	font-family: ${FONTS.cinzel};
	border-bottom: 2px solid ${COLORS.primary};
`;

export { StyledHeader };
