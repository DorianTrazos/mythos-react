import { useLocation } from 'react-router-dom';
import Banner from '../banner/Banner';
import { StyledHeroText, StyledHeroTitle } from './hero.styles';

const Hero = ({ heroTitle, page }) => {
	const { pathname } = useLocation();
	const isHome = pathname === '/';
	return (
		<>
			<Banner page={page} />
			<StyledHeroTitle>{heroTitle}</StyledHeroTitle>
			{isHome && (
				<StyledHeroText>
					Tempor porta porta placerat lobortis, ex. gravida placerat convallis.
					sodales. diam Cras gravida Lorem maximus luctus maximus placerat est.
					faucibus maximus elit. elit. ipsum risus nec quam nisi nisi maximus Ut
					risus cursus sollicitudin. placerat quam Lorem tincidunt eu lacus ex
					fringilla lobortis, Donec quis quis
				</StyledHeroText>
			)}
		</>
	);
};

export default Hero;
