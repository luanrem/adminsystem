import React from 'react';

import { Container } from './styles';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function SidebarProfile() {
  return (
    <Container>
      <div className="profile">
        <img src="https://avatars1.githubusercontent.com/u/46967826?v=4" alt="user"/>
      </div>
      <div className="NameIcon">
        <p>Luan Roberto Martins</p>
        <ArrowDropDownIcon />
      </div>
    </Container>
  );
}