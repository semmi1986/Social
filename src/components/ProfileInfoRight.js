import styled from 'styled-components';

const ProfileInfoRight = () => {
  return (
	 <>
		 <RightbarTitle>User Information</RightbarTitle>
				<RightbarInfo>
					<RightbarInfoItem>
						<RightbarInfoKey>City:</RightbarInfoKey>
						<RightbarInfoValue>New York</RightbarInfoValue>
					</RightbarInfoItem>
					<RightbarInfoItem>
						<RightbarInfoKey>From:</RightbarInfoKey>
						<RightbarInfoValue>Madrid</RightbarInfoValue>
					</RightbarInfoItem>
					<RightbarInfoItem>
						<RightbarInfoKey>Relationship:</RightbarInfoKey>
						<RightbarInfoValue>Single</RightbarInfoValue>
					</RightbarInfoItem>
				</RightbarInfo>

				<RightbarTitle>My Friends</RightbarTitle>
	 </>
  )
}

const RightbarTitle = styled.h4`
	font-size: 18px;
	font-weight: 500;
	margin-bottom: 10px;
`
const RightbarInfo = styled.div``
const RightbarInfoItem = styled.div`
	margin-bottom: 10px;
`
const RightbarInfoKey = styled.span`
	font-weight: 500;
	margin-right: 10px;
	color: #555;
`
const RightbarInfoValue = styled.span`
	font-weight: 300;
`

export default ProfileInfoRight