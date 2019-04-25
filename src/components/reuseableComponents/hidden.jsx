import styled from 'styled-components';

const Hidden = styled.div`
  display: block;
  visibility: ${props => (props.hidden ? 'hidden' : 'visible')};
`;
export default Hidden;
