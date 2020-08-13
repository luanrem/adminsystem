import styled from 'styled-components';

import PerfectScrollbar from 'react-perfect-scrollbar';

import { drawerWidth, headerHeight } from '../../config/stylesconfig';

export const Container = styled.div`

`;

export const ViewContent = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: calc(100vw - ${drawerWidth});
  height: calc(100vh - ${headerHeight});
  top: ${headerHeight};
  right: 0;

  padding: 20px;

  @media (max-width: 960px) {
    width: 100vw;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 100%
`;