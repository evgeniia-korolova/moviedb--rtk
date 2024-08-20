
import { Link, Route, Routes } from 'react-router-dom';
import s from './App.module.scss';

import Movies from './Components/Movies/Movies';
import Favorite from './Components/Info/Favorite';


function App() {
  return (
		<div className={s.App}>
			<header>
				<Link to='/'>Movies</Link>
				<Link to='/favorite'>Favorite</Link>
			</header>
			<Routes>
				<Route
					path='/*'
					element={<Movies />}
				/>
				<Route
					path='/favorite'
					element={<Favorite />}
        />
        
			</Routes>
		</div>
  );
}

export default App;
