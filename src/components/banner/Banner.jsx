import { PAGE_INFO } from '../../constants/pages-info';

const Banner = ({ page = 'home' }) => {
	const { bannerImages } = PAGE_INFO;

	return (
		<div>
			<picture>
				<source
					media='(min-width: 1024px)'
					srcSet={bannerImages[page].desktop}
				/>
				<source media='(min-width: 768px)' srcSet={bannerImages[page].tablet} />
				<source media='(min-width: 320px)' srcSet={bannerImages[page].mobile} />
				<img src={bannerImages[page].mobile} alt={bannerImages[page].alt} />
			</picture>
		</div>
	);
};

export default Banner;
