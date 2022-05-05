import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUsers } from '../services/api';
import Conversation from "./Conversation"

const FriendMenu = () => {

	const [users, setUsers] = useState([]);
	const [newUsersLoading, setNewUsersLoading] = useState(false);
	const [page, setPage] = useState(1200);

	const onUsersRequest = (page, initial) => {
		initial ? setNewUsersLoading(false) : setNewUsersLoading(true)
		getUsers(page)
		.then(onUsersLoaded)
	}

	const onUsersLoaded =(newUsersList) => {
		setUsers(users => [...users, ...newUsersList]);
		setNewUsersLoading(false)
		setPage(page => page + 1)
		
	}

	useEffect(() => {
		onUsersRequest(page, true)
	}, [])

	console.log(page);


	return (
		<>
			<FriendsMenu>
				<FriendMenuWrapper>

					<FriendMenuInput placeholder='Serch Friends' />
						{users.map((item) => (
							item.username === "Homer Simpson" ? null :
								<Conversation key={item.id} user={item} />
						))}
						<Button 
							disabled={newUsersLoading}
							onClick={() => onUsersRequest(page)}
							>LOAD MORE</Button>
				</FriendMenuWrapper>
				
			</FriendsMenu>
		</>
	)
}

const FriendsMenu = styled.div`
	flex: 2;
	height: 100vh ;
	overflow-y: scroll;
`;

const FriendMenuWrapper = styled.div`
	padding: 10px;
	height: 100%;
`;

const FriendMenuInput = styled.input`
	width: 90%;
	padding: 10px 0;
	border: none;
	border-bottom: 1px solid grey;
	:focus{
		outline: none;
	}
`;

const Button = styled.button`
	display: block;
	margin: 15px auto 0 auto;
	min-width: 110px;
	width: 170px;
	padding: 15px;
	background-color: #1976d2;
	border: none;
	color: white;
	border-radius: 10px;
	cursor: pointer;
	font-size: 14px;
	font-weight: 400;
	transition: 0.7s transform;
	:hover{
		transform: translateY(-7px);
		-webkit-box-shadow: -1px 0px 5px 3px rgba(0,0,0,0.54); 
		box-shadow: -1px 0px 5px 3px rgba(0,0,0,0.54);
	}
`;

export default FriendMenu