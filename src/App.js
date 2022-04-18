import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from './pages/Chat';
import Friends from './pages/Friends';
import Profile from './pages/Profile';
import { Users } from './prevData';
import { Posts } from './prevData';

const App = () => { 
	return (
		<>
			<Routes>
				<Route path='/' element={<Profile users={Users} posts={Posts}/>} />
				<Route path='chat' element={<Chat users={Users}/>} />
				<Route path='friends' element={<Friends users={Users}/>} />
			</Routes>
			
		</>
	)
}

export default App
