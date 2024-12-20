import { StyledTab, StyledTabs } from './tabs.styles';

const Tabs = ({ tabs, tabActive, color, action }) => {
	return (
		<StyledTabs>
			{tabs.map((tab, index) => (
				<StyledTab
					key={tab.id}
					$color={color}
					$active={tabActive}
					$state={index}
					onClick={() => action(index)}
				>
					{tab.tabTitle}
				</StyledTab>
			))}
		</StyledTabs>
	);
};

export default Tabs;
