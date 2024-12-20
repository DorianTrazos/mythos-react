import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import MainContainer from '../../components/main-container/MainContainer';
import { COLORS } from '../../styles/colors';

const Mythology = ({ mythology }) => {
	return (
		<>
			<Header />
			<Hero heroTitle='Discover Mithologies' page={mythology} />
			<MainContainer mythology={mythology} color={COLORS[mythology]} />
		</>
	);
};

export default Mythology;
