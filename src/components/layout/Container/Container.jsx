import styled from '@emotion/styled';
import MuiContainer from '@material-ui/core/Container';

const StyledContainer = styled(MuiContainer)`
  max-width: 1200px;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.backgroundContainer};
  padding-top: 64px;
  padding-bottom: 56px;
`;

export default StyledContainer;
