import styled from 'styled-components';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

const Share = () => {
  return (
<Container>
			<Wrapper>
				<ShareTop>
					<ShareProfileImage src={'/assets/Homer.png'} />
					<ShareInput placeholder='What`s in your mind?' />
				</ShareTop>
				<hr style={{ margin: "20px" }} />
				<ShareButtom>
					<ShareOptions>

						<ShareOption>
							<CustomIconVideo />
							<ShareOptionText>Photo or Video</ShareOptionText>
						</ShareOption>

						<ShareOption>
							<CustomIconTag />
							<ShareOptionText>Tag</ShareOptionText>
						</ShareOption>

						<ShareOption>
							<CustomIconLocation />
							<ShareOptionText>Location</ShareOptionText>
						</ShareOption>

						<ShareOption>
							<CustomIconFeelings />
							<ShareOptionText>Feelings</ShareOptionText>
						</ShareOption>

					</ShareOptions>
					<ShareButton>Add</ShareButton>
				</ShareButtom>
			</Wrapper>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 175px;
	border-radius: 15px;
	-webkit-box-shadow: 0px 1px 8px 3px rgba(0,0,0,0.34); 
	box-shadow: 0px 1px 8px 3px rgba(0,0,0,0.34);
`;
const Wrapper = styled.div`
	padding: 15px;
`;
const ShareTop = styled.div`
	display: flex;
	align-items: center;
`;
const ShareProfileImage = styled.img`
	width: 65px;
	height: 65px;
	border-radius: 50%;
	object-fit: cover;
	border: 1px solid black;
	margin-right: 10px;
`;
const ShareInput = styled.input`
	border: none;
	width: 80%;
	:focus{
		outline: none;
	}
`;

const ShareButtom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const ShareOptions = styled.div`
	display: flex;
	margin-left: 20px;
`;
const ShareOption = styled.div`
	display: flex;
	align-items: center;
	margin-right: 30px;
	cursor: pointer;
`;
const ShareOptionText = styled.span`
	font-size: 14px;
	font-weight: 500;
`;


const CustomIconVideo = styled(PermMediaIcon)`
	margin-right: 5px ;
	color: rgb(187, 74, 74);
`;
const CustomIconTag = styled(LabelImportantIcon)`
	margin-right: 5px ;
	color: rgb(7, 118, 192);
`;
const CustomIconLocation = styled(LocationOnIcon)`
	margin-right: 5px ;
	color: rgb(74, 187, 121);
`;
const CustomIconFeelings = styled(EmojiEmotionsIcon)`
	margin-right: 5px ;
	color: rgb(226, 228, 99);
`;

const ShareButton = styled.button`
	border: none;
	cursor: pointer;
	font-weight: 500;
	background-color: rgb(74, 187, 121);
	border-radius: 5px;
	padding: 7px;
	margin-right: 20px;
	color: white;

`;

export default Share