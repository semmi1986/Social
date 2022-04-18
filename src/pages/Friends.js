import styled from 'styled-components';
import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar';
import FriendMenu from '../components/FriendMenu';
import ChatOnlineFriends from '../components/ChatOnlineFriends';

const Friends = ({users}) => {
  return (
	<>
		<Header/>
		<Container>
			<SideBar/>
			<FriendsBox>
				<FriendMenu users={users}/>
			</FriendsBox>
			<FriendsOnline>
					<FriendsOnlineWrapper>
						<FriendsOnlineTetxt>Friends online</FriendsOnlineTetxt>
						<ChatOnlineFriends users={users} />
					</FriendsOnlineWrapper>
				</FriendsOnline>
		</Container>
	</>
  )
}

const Container = styled.div`
	height: calc(100vh - 75px);
	display: flex;
`

const FriendsBox = styled.div`
	flex: 8;
`

const FriendsBoxWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

// ----------------------------------FriendsOnline-------------------
const FriendsOnline = styled.div`
	flex: 2;
`
const FriendsOnlineWrapper = styled(FriendsBoxWrapper)``

const FriendsOnlineTetxt = styled.h2`
	margin: 10px;
	text-decoration: underline ;
`

export default Friends