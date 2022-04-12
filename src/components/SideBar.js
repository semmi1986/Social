import React from 'react';
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import GroupIcon from '@mui/icons-material/Group';
import FlagSharpIcon from '@mui/icons-material/FlagSharp';
// import { Users } from "../dummyData"
// import FriendsSideBar from './FriendsSideBar';

const SideBar = () => {
	return (
		<Container>
			<Wrapper>
				<List>
					<ListItem>
						<PersonIcon />
						<ListItemText>Profile</ListItemText>
					</ListItem>
					<ListItem>
						<ChatIcon />
						<ListItemText>Chat</ListItemText>
					</ListItem>
					<ListItem>
						<SlowMotionVideoIcon />
						<ListItemText>Videos</ListItemText>
					</ListItem>
					<ListItem>
						<GroupIcon />
						<ListItemText>Groups</ListItemText>
					</ListItem>
					<ListItem>
						<FlagSharpIcon />
						<ListItemText>Friends</ListItemText>
					</ListItem>
				</List>

				{/* <hr></hr>

				<FriendItems>
					<Friends>My Friends</Friends>
					<Inner>
						{Users.map(user => (
							<FriendsSideBar key={user.id} user={user} />
						))}
					</Inner>
				</FriendItems> */}
			</Wrapper>
		</Container>
	)
}

const Container = styled.div`
	flex: 2;
	height: calc(100vh - 50px);
	overflow-y: scroll;
	::--webkit-scrollbar {
		width: 5px;
	}
	:--webkit-scrollbar-track {
		background-color: white;
	}
	:--webkit-scrollbar-thumb {
		background-color: gray;
	}
	position: sticky;
	top: 50px;
`;

const Wrapper = styled.div`
	padding: 20px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;
const ListItem = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	cursor: pointer;
	transition: font-size 0.5s;

	:hover{
		color: rgb(85, 88, 88);
		font-size: 20px;
	}
`;
const ListItemText = styled.span`
	margin-left: 10px;
`;


// const FriendItems = styled.div`
// `;
// const Friends = styled.h1`
// 	padding: 20px 0;
// `;

// const Inner = styled.div``;
export default SideBar