import styled from 'styled-components';

import { drawerWidth } from '../../config/stylesconfig';

export const Container = styled.div`
  z-index: -1;
  border-bottom: 0;
  margin-bottom: 0;
  position: absolute;
  width: 100%;

  .appbar {
    width: calc(100vw - ${drawerWidth});
    background: linear-gradient(90deg, rgba(5,3,13,1) 0%, rgba(70,36,138,1) 38%, rgba(175,32,192,1) 100%);
  }

  @media (max-width: 960px) {
    .appbar {
      width: 100vw;
    }
  }

  `;

  export const MobileHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
