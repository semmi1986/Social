import styled from 'styled-components';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../prevData'
import { useState } from 'react';

const Post = ({ post }) => {

	const [like, setLike] = useState(post[10].like);
	const [isLiked, setisLiked] = useState(false);


	const handelClick = () =>{
		setLike(isLiked ? like + 1 : like - 1);
		setisLiked(!isLiked)
	}
	return (
		<Container>
			<Wrapper>

				<PostTop>
					<PostTopLeft>
						<PostProfileImage src={Users[11].profilePicture} alt='avatar' />
						<PostUserName>
							{Users[11].username}
						</PostUserName>
						<PostDataTime>{post[10].date}</PostDataTime>
					</PostTopLeft>
					<PostTopRight>
						<CustomIconMoreVertical />
					</PostTopRight>
				</PostTop>

				<PostCenter>
					<PostText>{post[10].desc}</PostText>
					<PostImg src={post[10].photo}/>
				</PostCenter>

				<PostBottom>
					<PostBottomLeft>
						<LikedIcon src={'/assets/like-flat.png'} onClick={handelClick} alt="like" />
						<LikedIcon src={'/assets/heart.png'} onClick={handelClick} alt="heart" />
						<PostLikeCount> {like} piople liked it</PostLikeCount>
					</PostBottomLeft>

					<PostBottomRight>
						<PostCommentText> {post[10].comment} comments</PostCommentText>
					</PostBottomRight>
				</PostBottom>

			</Wrapper>
		</Container>
	)
}


const Container = styled.div`
	width: 100%;
	border-radius: 15px;
	-webkit-box-shadow: 0px 1px 8px 3px rgba(0,0,0,0.34); 
	box-shadow: 0px 1px 8px 3px rgba(0,0,0,0.34);
	margin: 30px 0;
`;
const Wrapper = styled.div`
	padding: 15px;
`;

// -----------------------------TOP---------------
const PostTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const PostTopLeft = styled.div`
	display: flex;
	align-items: center;


`;
const PostProfileImage = styled.img`
	width: 40px;
	height: 40px;
	object-fit: cover;
	border-radius: 50%;
	border: 1px solid black;

`;
const PostUserName = styled.span`
	font-size: 16px;
	margin: 0 10px;
	font-weight: 500;
`;
const PostDataTime = styled.span`
	font-size: 10px;
`;

const PostTopRight = styled.div``;
const CustomIconMoreVertical = styled(MoreVertIcon)``;

// --------------------------CENTER-----

const PostCenter = styled.div`
	margin: 20px 0;
`;
const PostText = styled.span`
`;
const PostImg = styled.img`
	margin-top: 20px;
	width: 100%;
	max-height: 500px;
	object-fit: contain;

`;

// ------------------------BOTTOM------------

const PostBottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const PostBottomLeft = styled.div`
	display: flex;
	align-items: center;
	
`;
const LikedIcon = styled.img`
	width: 25px;
	height: 25px;
	cursor: pointer;
	margin-right: 5px;
	object-fit: cover;
`;
const PostLikeCount = styled.span`
	font-size: 12px;
	font-weight: 500;
`;
const PostBottomRight = styled.div``;
const PostCommentText = styled.span`
	font-size: 14px;
	cursor: pointer;
	border-bottom: 1px dashed gray;
`;

export default Post