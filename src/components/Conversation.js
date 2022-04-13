import styled from 'styled-components';

const Conversation = ({user}) => {
  return (
	 <Container>
		<ConversationImg src={user.profilePicture} alt='foto' />
		<ConversationName>{user.username}</ConversationName>
	 </Container>
  )
}

const Container = styled.div`
	display: flex;
	align-items:center;
	padding: 10px;
	cursor: pointer;
	margin-top: 20px;
	:hover{
		background-color: rgba(207, 204, 204, 0.486);
		border-radius: 10px;
	}
`
const ConversationImg = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;
	border-radius: 50%;
	margin-right: 15px;
`
const ConversationName = styled.span`
	font-weight: 500;
`

export default Conversation