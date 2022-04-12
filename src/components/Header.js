import styled from 'styled-components';
// import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
// import ChatSharpIcon from '@mui/icons-material/ChatSharp';
// import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
// import Badge from '@mui/material/Badge';

const Header = () => {
  return (
	<Container>
			<Logo>
				<ImageLogo src={"/assets/logo.png"} alt='logo'/>
				<TitleLogo>Social</TitleLogo>
			</Logo>
			{/* <Search>
				<SearchIcon style={{ fontSize: 20, marginLeft: 15 }} />
				<Input placeholder='Search for friends, post or video' />
			</Search> */}
			<Icons>
				{/* <IconsItem>
					<Badge badgeContent={4} color='secondary'>
						<PersonIcon sx={{color: 'white'}}/>
					</Badge>
				</IconsItem>
				<IconsItem>
					<Badge badgeContent={0} color='secondary'>
						<ChatSharpIcon sx={{color: 'white'}}/>
					</Badge>
				</IconsItem>
				<IconsItem>
					<Badge badgeContent={2}  color='secondary'>
						<NotificationsSharpIcon sx={{color: 'white'}}/>
					</Badge>
				</IconsItem> */}
				<Image src={'/assets/Homer.png'} alt='avatar' />
			</Icons>
		</Container>
	)
}


const Container = styled.div`
	width: 100%;
	height: 50px;
	background-color: #1877f2;
	display: flex ;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 10000;
`;

const Logo = styled.div`
	display: flex;
	flex: 3;
	align-items: center;
	cursor: pointer;
	margin-left: 20px;
`;

const ImageLogo = styled.img`
	width: 50px;
	height:  50px;
`;

const TitleLogo = styled.div`
	padding-left: 5px;
	font-size: 30px;
	font-weight: bold;
	color: white;

`;


// const Search = styled.div`
// 	width: 100%;
// 	height: 30px;
// 	background-color: white;
// 	border-radius: 30px;
// 	display: flex ;
// 	flex: 5;
// 	align-items: center;
// `;
// const Input = styled.input`
// 	border: none ;
// 	width: 70%;
// 	:focus{
// 		outline: none;
// 	}
// `;


const Icons = styled.div`
	display: flex;
	flex: 4;
	align-items: center;
	justify-content: end;
	margin-right: 20px;
`;
// const IconsItem = styled.div`
// 	margin-right: 20px;
// 	cursor: pointer;
// `;
const Image = styled.img`
	width:50px;
	height: 50px;
	border-radius: 50%;
	cursor: pointer;
	object-fit: cover;
`;

export default Header