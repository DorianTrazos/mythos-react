import { v4 } from 'uuid';
import { COLORS } from '../styles/colors';

export const MENU_INFO = [
	{
		id: v4(),
		mythology: 'roman',
		path: '/roman',
		color: COLORS.roman,
		text: 'ROMAN'
	},
	{
		id: v4(),
		mythology: 'greek',
		path: '/greek',
		color: COLORS.greek,
		text: 'GREEK'
	},
	{
		id: v4(),
		mythology: 'egyptian',
		path: '/egyptian',
		color: COLORS.egyptian,
		text: 'EGYPTIAN'
	},
	{
		id: v4(),
		mythology: 'nordic',
		path: '/nordic',
		color: COLORS.nordic,
		text: 'NORDIC'
	}
];
