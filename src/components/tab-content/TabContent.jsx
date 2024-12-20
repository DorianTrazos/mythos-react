import Separator from '../separator/Separator';

const TabContent = ({ title, img, text }) => {
	return (
		<div>
			<h2>{title}</h2>
			<img src={img} alt='' />
			<Separator />
			<p>{text}</p>
		</div>
	);
};

export default TabContent;
