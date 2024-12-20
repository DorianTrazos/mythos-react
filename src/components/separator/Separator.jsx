import { StyledSeparator } from './separator.styles';

const Separator = ({ direction = 'horizontal' }) => {
	const separatorImage =
		direction === 'horizontal'
			? '/assets/images/common/separator-h.png'
			: '/assets/images/common/separator-v.png';
	return <StyledSeparator src={separatorImage} alt='a section separator' />;
};

export default Separator;
