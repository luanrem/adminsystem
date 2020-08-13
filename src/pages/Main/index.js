import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

import systemRoutes from '../../routes/SystemRoutes';

import { Container, ViewContent, Scroll } from './styles';

const switchRoutes = (
  <Switch>
    {systemRoutes.map((prop, key) => {
      if (prop.layout === "/system") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
  </Switch>
)

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

      <ViewContent>
        <Scroll>
          {switchRoutes}
        </Scroll>
      </ViewContent>
    </Container>
  );
}

export default Main;