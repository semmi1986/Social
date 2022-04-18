
import styled from 'styled-components';
import BadgeAvatar from './BadgeAvatar';

const ChatOnlineFriends = ({ users }) => {
	return (
		<Container>
			{users.map((item) => (
				item.id === 12 ? null :
				<Wrapper key={item.id}>
					<FriendsInner>
						<BadgeAvatar  avatar={item.profilePicture}/>
					</FriendsInner>
					<FriendItemName>{item.username}</FriendItemName>
				</Wrapper>
			))}

		</Container>
	)
}

const Container = styled.div`
	height: calc(100vh - 50px);
	overflow-y: scroll;
	margin-left: 10px;
	
`
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	margin-top: 15px;
`
const FriendsInner = styled.div`
	margin-right: 10px;
`

const FriendItemName = styled.span`
	font-weight: 500;
`



export default ChatOnlineFriends