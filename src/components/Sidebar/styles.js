import styled from 'styled-components';

import { darken } from 'polished';

import { drawerWidth, headerHeight } from '../../config/stylesconfig.js';


export const Container = styled.div`

  .drawerPaper {
    border: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 600px;
  }


`;

export const BackgroundSideImage = styled.div`

  background-image: radial-gradient(circle, transparent 24%, rgba(0,0,0,0.9) 70%), url(${props => props.img});

  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  display: block;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;

`;

export const SideBarStyle = styled.div`

  .brand {
    width: ${drawerWidth};
    height: ${headerHeight};

    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
    }

    p {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 20px;
      color: white;
    }
  }

  .divider {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, white, rgba(0, 0, 0, 0.75), white);
  }

  .list {

    .navLink {
      text-decoration: none;
    }

    .listItem {
      padding-left: 50px;
      display: flex;
      justify-content: center;
      align-items: center;

      background: ${darken(0.2, 'rgba(70,36,138,0.5)')};

      .itemIcon {
        color: white;
      }
      .itemText {
        color: white;
      }
    }

    .listItem:hover {
      background: ${darken(0.9, 'rgba(70,36,138,0.5)')};
    }
  }
`;



