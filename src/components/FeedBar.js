import styled from 'styled-components';
import Post from './Post';
import Share from './Share';
import { Posts } from '../prevData'

const FeedBar = () => {

	return (
		<Container>
			<Wrapper>
				<Share />
				<Post post={Posts} />
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