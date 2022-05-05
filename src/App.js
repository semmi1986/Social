import { Route, Routes } from 'react-router-dom'
import Chat from './pages/Chat';
import Friends from './pages/Friends';
import Profile from './pages/Profile';




const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Profile />} />
				<Route path='chat' element={<Chat />} />
				<Route path='friends' element={<Friends />} />
			</Routes>

		</>
	)
}

export default App;
