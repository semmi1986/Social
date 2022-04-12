import styled from 'styled-components';
import ProfileInfoRight from './ProfileInfoRight';

const RightBar = () => {
  return (
	<Container>
	<Wrapper>
		<ProfileInfoRight/>
	</Wrapper>
</Container>
  )
}

const Container = styled.div`
	flex: 2;
`;
const Wrapper = styled.div`
	padding: 20px 20px 0 0;
`;

export default RightBar