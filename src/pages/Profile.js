import styled from 'styled-components';
import FeedBar from '../components/FeedBar';
import Header from '../components/Header';
import RightBar from '../components/RightBar';
import SideBar from '../components/SideBar';

const Profile = ({users, posts}) => {
	return (
		<>
			<Header />
			<Container>
				<SideBar />
				<ProfileRight>
					<ProfileRightTop>
						<ProfileCover>
							<ProfileCoverImage src={'/assets/post/3.jpeg'} />
							<ProfileImage src={'/assets/homer.png'} />
						</ProfileCover>
						<ProfileInfo>
							<ProfileName>Homer Simpson</ProfileName>
							<ProfileDesc>Hello my friends</ProfileDesc>
						</ProfileInfo>
					</ProfileRightTop>
					<ProfileRightBottom>
						<FeedBar users={users} posts={posts}/>
						<RightBar />
					</ProfileRightBottom>
				</ProfileRight>
			</Container>
		</>

	)
}

const Container = styled.div`
	display: flex;
	width: 100%;
`;
const ProfileRight = styled.div`
	flex: 9;
`;
const ProfileRightTop = styled.div`
`;
const ProfileRightBottom = styled.div`
	display: flex;
`;

const ProfileCover = styled.div`
	height: 320px;
	position: relative;
`;
const ProfileCoverImage = styled.img`
	width: 100%;
	height: 250px;
	object-fit: cover;
`

const ProfileImage = styled.img`
	width: 150px;
	height: 150px;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid white;
	position: absolute;
	right:0;
	left: 0;
	top: 150px;
	margin: auto;
`;

const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const ProfileName = styled.h4`
	font-size: 24px;
`
const ProfileDesc = styled.p`
	font-weight: 300;
`

export default Profile