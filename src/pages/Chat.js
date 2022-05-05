import Header from '../components/Header';
import styled from 'styled-components';
// import Conversation from '../components/Conversation';
import Message from '../components/Message';
import ChatOnlineFriends from '../components/ChatOnlineFriends';
import SideBar from '../components/SideBar';


const Chat = () => {
	return (
		<>
			<Header />
			<Container>
			<SideBar/>
				{/* <ChatMenu>
					<ChatMenuWrapper>
						<ChatMenuInput placeholder='Serch Friends' />
						{Users.map((item) => (
							item.username === "Homer Simpson" ? null :
								<Conversation key={item.id} user={item} />
						))}
					</ChatMenuWrapper>
				</ChatMenu> */}
				<ChatBox>
					<ChatBoxWrapper>
						<ChatBoxTop>
							<Message />
							<Message own={true} />
							<Message />
							<Message />
							<Message />
							<Message />
							<Message />
							<Message />
							<Message own={true} />

						</ChatBoxTop>
						<ChatBoxBottom>
							<MessageField placeholder='write message...'></MessageField>
							<Button>Send</Button>
						</ChatBoxBottom>
					</ChatBoxWrapper>
				</ChatBox>
				<ChatOnline>
					<ChatOnlineWrapper>
						<ChatOnlineTetxt>Friends online</ChatOnlineTetxt>
						<ChatOnlineFriends />
					</ChatOnlineWrapper>
				</ChatOnline>
			</Container>
		</>
	)
}

const Container = styled.div`
	height: calc(100vh - 75px);
	display: flex;
`
// ----------------------------------ChatMenu-------------------
// const ChatMenu = styled.div`
// 	flex: 2;
// 	height: calc(100vh - 50px);
// 	overflow-y: scroll;
// `
const ChatMenuWrapper = styled.div`
	padding: 10px;
	height: 100%;
`

// const ChatMenuInput = styled.input`
// 	width: 90%;
// 	padding: 10px 0;
// 	border: none;
// 	border-bottom: 1px solid grey;
// 	:focus{
// 		outline: none;
// 	}

// `

// ----------------------------------ChatBox-------------------
const ChatBox = styled.div`
	flex: 8;
`
const ChatBoxWrapper = styled(ChatMenuWrapper)`
	display: flex;
	flex-direction: column;
`

const ChatBoxTop = styled.div`
	height: 100%;
	overflow-y: scroll;
	padding-right: 10px;
`
const ChatBoxBottom = styled.div`
	display: flex;
	margin-top: 10px;
	align-items: center;
	justify-content: space-between;
`
const MessageField = styled.textarea`
	width: 80%;
	height: 90px;
	padding: 10px;
	:focus{
		outline: none;
	}
`
const Button = styled.button`
	width: 80px;
	height: 40px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	background-color: #1877f2;
	font-size: 14px;
	font-weight: 500;
	color: white;

`

// ----------------------------------ChatOnline-------------------
const ChatOnline = styled.div`
	flex: 2;
`
const ChatOnlineWrapper = styled(ChatMenuWrapper)``

const ChatOnlineTetxt = styled.h2`
	margin-bottom: 5px;
	text-decoration: underline ;
`


export default Chat