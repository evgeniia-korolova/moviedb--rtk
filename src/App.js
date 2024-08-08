
import { Link, Route, Routes } from 'react-router-dom';
import s from './App.module.scss';

import Movies from './Components/Movies/Movies';
import Info from './Components/Info/Info'

function App() {
  return (
		<div className={s.App}>
			<header>
				<Link to='/'>Movies</Link>
				<Link to='/info'>Info</Link>
			</header>
			<Routes>
				<Route
					path='/*'
					element={<Movies />}
				/>
				<Route
					path='/info'
					element={<Info />}
        />
        
			</Routes>
		</div>
  );
}

export default App;
