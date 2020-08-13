import React, { useState } from 'react';

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

import systemRoutes from '../../routes/SystemRoutes';

import { Container } from './styles';

function Main() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }
  return (
    <Container>
      <Sidebar 
        routes={systemRoutes}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
      />

      <Navbar 
      routes={systemRoutes}
      handleDrawerToggle={handleDrawerToggle}
      />
    </Container>
  );
}

export default Main;