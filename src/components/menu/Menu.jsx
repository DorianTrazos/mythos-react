import { useState } from 'react';
import { MENU_INFO } from '../../constants/menu';
import {
	StyledHamburger,
	StyledMenu,
	StyledMenuItem,
	StyledNavLink
} from './menu.styles';

const hamburgerIcons = {
	open: '/assets/images/common/close.png',
	close: '/assets/images/common/hamburger.png'
};

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<StyledHamburger
				src={isOpen ? hamburgerIcons.open : hamburgerIcons.close}
				alt='hamburger logo'
				onClick={() => setIsOpen(!isOpen)}
			/>
			<nav>
				<StyledMenu $isOpen={isOpen}>
					{MENU_INFO.map(menu => (
						<StyledMenuItem key={menu.id}>
							<StyledNavLink
								$color={menu.color}
								to={menu.path}
								onClick={() => setIsOpen(false)}
							>
								{menu.text}
							</StyledNavLink>
						</StyledMenuItem>
					))}
				</StyledMenu>
			</nav>
		</>
	);
};

export default Menu;
