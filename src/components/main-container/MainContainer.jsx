import { useState } from 'react';

import { TABS } from '../../constants/tabs';
import TabContent from '../tab-content/TabContent';
import Tabs from '../tabs/Tabs';

const MainContainer = ({ mythology, color }) => {
	const [mainTabActive, setMainTabActive] = useState(0);
	const [secondaryTabActive, setSecondaryTabActive] = useState(0);

	const currentMythology = TABS[mythology];
	const subTabs = currentMythology[mainTabActive].subTabs;

	const contentInfo = subTabs[secondaryTabActive];

	return (
		<>
			<Tabs
				tabs={currentMythology}
				tabActive={mainTabActive}
				color={color}
				action={state => setMainTabActive(state)}
			/>
			<TabContent
				title={contentInfo.contentTitle}
				img={contentInfo.images.mobile}
				text={contentInfo.text}
			/>
			<Tabs
				tabs={subTabs}
				tabActive={secondaryTabActive}
				color={color}
				action={state => setSecondaryTabActive(state)}
			/>
		</>
	);
};

export default MainContainer;
