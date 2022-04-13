import styled from 'styled-components';

const Message = ( {own} ) => {

  return (
	 <Container style={own}>
		<MessageTop>
			<MessageAvatar src={'/assets/person/3.jpeg'} alt='avatar'/>
			<MessageText style={own}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil nobis nerspiciatis placeat.</MessageText>
		</MessageTop>
		<MessageBottom>1 hour ago</MessageBottom>
	 </Container>
  )
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	align-items:  ${props => props.style ? "flex-end" : "flex-start"};
`

const MessageTop = styled.div`
	display: flex;
	
`
const MessageAvatar = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	object-fit: cover;
	margin-right: 10px;
`
const MessageText = styled.p`
	padding: 10px;
	border-radius: 20px;
	background-color: ${props => props.style ? "rgb(245,241,241)": "#1877f2"};
	color: ${props => props.style ? "black": "white"};
	max-width: 350px;
	
`
const MessageBottom = styled.div`
	font-size: 12px;
	margin-top: 10px;
`

export default Message