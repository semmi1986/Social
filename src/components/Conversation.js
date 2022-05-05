
import { useState } from 'react';
import styled from 'styled-components';

const Conversation = ({ user }) => {

	const [followed, setFollowed] = useState(false);

	const onChange = () => {
		if (followed) {
			setFollowed(false)
		} else {
			setFollowed(true)
		}
	}

	return (
		<Container>
			<ConversationBlock>
				<ConversationImg src={user.photos.small != null ? user.photos.small : '/assets/friend.png'} alt='foto' />
				{followed ?
					<Button variant="contained" onClick={onChange}>UnFollow</Button>
					: <Button variant="contained" onClick={onChange}>Follow</Button>
				}
			</ConversationBlock>
			<ConversationBlockInfo>
				<ConversationName>{user.name}</ConversationName>
				{user.status
					? <ConversationStatus>{user.status}</ConversationStatus>
					: <ConversationStatus>One Status</ConversationStatus>}
			</ConversationBlockInfo>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items:center;
	padding: 10px;
	margin-top: 10px;
	:hover{
		background-color: rgba(207, 204, 204, 0.486);
		border-radius: 10px;
	}
`
const ConversationBlock = styled.div`
display: flex;
align-items: center;
	flex: 3;
`
const ConversationImg = styled.img`
	width: 70px;
	height: 70px;
	object-fit: cover;
	border-radius: 20px;
	margin-right: 30px;
`
const Button = styled.button`
	width: 100px;
	padding: 10px;
	background-color: #1976d2;
	border: none;
	color: white;
	border-radius: 10px;
	cursor: pointer;
	font-size: 14px;
	font-weight: 400;
	:hover{
		-webkit-box-shadow: -1px 0px 5px 3px rgba(0,0,0,0.54); 
		box-shadow: -1px 0px 5px 3px rgba(0,0,0,0.54);
	}

`
const ConversationBlockInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 6;
`

const ConversationName = styled.span`
	font-weight: 500;
	font-size: 19px;
	padding-bottom: 5px;
`
const ConversationStatus = styled.span`
	font-weight: 500;
	font-family: initial;
`

export default Conversation