import { Route, Routes } from 'react-router-dom';
import { MENU_INFO } from '../constants/menu';
import Home from '../pages/home/Home';
import Mythology from '../pages/mythology/Mythology';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			{MENU_INFO.map(route => (
				<Route
					key={route.id}
					path={route.path}
					element={<Mythology mythology={route.mythology} />}
				/>
			))}
		</Routes>
	);
};

export default Router;
