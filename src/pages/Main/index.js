import React from 'react';

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

import { Container } from './styles';

function Main() {
  return (
    <Container>
      <Sidebar />

      <Navbar />
    </Container>
  );
}

export default Main;