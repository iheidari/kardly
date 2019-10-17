import styled from 'src/themes/styled';
import ThemeProps from 'src/themes/types';
import { Container } from '@material-ui/core';

const StyledContainer = styled(Container)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }: ThemeProps) =>
    theme.color.backgroundContainer};
`;

export default StyledContainer;
