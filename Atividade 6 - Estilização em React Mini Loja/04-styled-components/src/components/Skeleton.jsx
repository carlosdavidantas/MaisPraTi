import styled, { keyframes } from 'styled-components';

const skeletonLoading = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

const SkeletonContainer = styled.div`
  background-color: ${props => props.theme.cardBg};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  box-shadow: ${props => props.theme.cardShadow};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SkeletonImage = styled.div`
  width: 100%;
  padding-top: 100%; /* 1:1 aspect ratio */
  background: linear-gradient(90deg, 
    ${props => props.theme.skeletonBg} 25%, 
    ${props => props.theme.skeletonHighlight} 50%, 
    ${props => props.theme.skeletonBg} 75%);
  background-size: 200% 100%;
  animation: ${skeletonLoading} 1.5s infinite;
`;

const SkeletonContent = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const SkeletonTitle = styled.div`
  height: 2.5rem;
  background: linear-gradient(90deg, 
    ${props => props.theme.skeletonBg} 25%, 
    ${props => props.theme.skeletonHighlight} 50%, 
    ${props => props.theme.skeletonBg} 75%);
  background-size: 200% 100%;
  animation: ${skeletonLoading} 1.5s infinite;
  border-radius: ${props => props.theme.borderRadiusSm};
  margin-bottom: 0.5rem;
`;

const SkeletonRating = styled.div`
  height: 1rem;
  width: 40%;
  background: linear-gradient(90deg, 
    ${props => props.theme.skeletonBg} 25%, 
    ${props => props.theme.skeletonHighlight} 50%, 
    ${props => props.theme.skeletonBg} 75%);
  background-size: 200% 100%;
  animation: ${skeletonLoading} 1.5s infinite;
  border-radius: ${props => props.theme.borderRadiusSm};
  margin-bottom: 0.5rem;
`;

const SkeletonPrice = styled.div`
  height: 1.25rem;
  width: 30%;
  background: linear-gradient(90deg, 
    ${props => props.theme.skeletonBg} 25%, 
    ${props => props.theme.skeletonHighlight} 50%, 
    ${props => props.theme.skeletonBg} 75%);
  background-size: 200% 100%;
  animation: ${skeletonLoading} 1.5s infinite;
  border-radius: ${props => props.theme.borderRadiusSm};
  margin-bottom: 1rem;
`;

const SkeletonButton = styled.div`
  height: 2.5rem;
  background: linear-gradient(90deg, 
    ${props => props.theme.skeletonBg} 25%, 
    ${props => props.theme.skeletonHighlight} 50%, 
    ${props => props.theme.skeletonBg} 75%);
  background-size: 200% 100%;
  animation: ${skeletonLoading} 1.5s infinite;
  border-radius: ${props => props.theme.borderRadius};
  margin-top: auto;
`;

const Skeleton = ({ type = 'product', className = '' }) => {
  return (
    <SkeletonContainer className={className}>
      <SkeletonImage />
      <SkeletonContent>
        <SkeletonTitle />
        <SkeletonRating />
        <SkeletonPrice />
        <SkeletonButton />
      </SkeletonContent>
    </SkeletonContainer>
  );
};

export default Skeleton;