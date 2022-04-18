import styled from 'styled-components';
import Post from './Post';
import Share from './Share';

const FeedBar = ({ users, posts }) => {

	return (
		
		<Container>
			<Wrapper>
				<Share />
				<Post posts={posts} users={users} />
			</Wrapper>
		</Container>
	)
}


const Container = styled.div`
flex: 6;
`;
const Wrapper = styled.div`
padding: 20px;
`;

export default FeedBar