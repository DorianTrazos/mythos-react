import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledHamburger = styled.img`
	position: absolute;
	top: 30px;
	right: 20px;
`;

const StyledMenu = styled.ul`
	position: absolute;
	top: 87px;
	left: 0;
	width: 100%;
	background-color: ${COLORS.darken};
	translate: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
	transition: translate 0.3s;
`;

const StyledMenuItem = styled.li`
	padding: 28px 20px;

	border-bottom: 2px solid ${COLORS.primary};
`;

const StyledNavLink = styled(NavLink)`
	font-weight: 600;
	letter-spacing: 2px;
	&.active {
		color: ${({ $color }) => $color};
	}
`;

export { StyledHamburger, StyledMenu, StyledMenuItem, StyledNavLink };
