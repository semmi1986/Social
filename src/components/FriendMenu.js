import styled from 'styled-components';
import Conversation from "./Conversation"

const FriendMenu = ({users}) => {
  return (
	 <>
		 <FriendsMenu>
					<FriendMenuWrapper>
						<FriendMenuInput placeholder='Serch Friends' />
						{users.map((item) => (
							item.username === "Homer Simpson" ? null :
								<Conversation key={item.id} user={item} />
						))}
					</FriendMenuWrapper>
				</FriendsMenu>
	 </>
  )
}

const FriendsMenu = styled.div`
	flex: 2;
	height: calc(100vh - 50px);
	overflow-y: scroll;
`
const FriendMenuWrapper = styled.div`
	padding: 10px;
	height: 100%;
`

const FriendMenuInput = styled.input`
	width: 90%;
	padding: 10px 0;
	border: none;
	border-bottom: 1px solid grey;
	:focus{
		outline: none;
	}

`

export default FriendMenu