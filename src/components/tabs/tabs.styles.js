import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledTabs = styled.div`
	display: flex;
	justify-content: center;
	gap: 0.75rem;
	padding-inline: 1.25rem;
	width: 335px;
	margin-inline: auto;
`;

const StyledTab = styled.div`
	display: flex;
	justify-content: center;
	color: ${({ $state, $active, $color }) =>
		$state === $active ? $color : COLORS.tabs};
	border: 1px solid;
	padding: 0.625rem 1.5rem;
	font-size: 0.875rem;
	min-width: 100px;
	max-width: 125px;

	&:nth-child(2) {
		flex-shrink: 0;
	}
`;

export { StyledTab, StyledTabs };
