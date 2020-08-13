import React from 'react';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";


import Menu from "@material-ui/icons/Menu";

import { Container, MobileHeader } from './styles';

export default function Navbar(props) {
  function makeBrand() {
    var name;
    props.routes.map((prop) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = prop.name;
      } return null;
    })
    return name;
  }

  return (
    <Container>
      <AppBar className="appbar" position="fixed">
        <Toolbar>

          <Hidden smDown>
            <h1>{makeBrand()}</h1>
          </Hidden>

          <Hidden mdUp>

            <MobileHeader>
              <h1>{makeBrand()}</h1>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerToggle}
              >
                <Menu />
              </IconButton>
            </MobileHeader>

          </Hidden>

        </Toolbar>
      </AppBar>
    </Container>

  );
}
