import { Link } from 'react-router-dom';
import { StyledLogo } from './logo.styles';

const Logo = () => {
	return (
		<Link to='/'>
			<StyledLogo>MYTHOS</StyledLogo>
		</Link>
	);
};

export default Logo;
