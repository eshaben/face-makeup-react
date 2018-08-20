import React from 'react';
import {
  Navbar,
  NavbarBrand} from 'reactstrap';
import logo from '../../assets/eyelogo.png';

export default function NavBar() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand style={{ 'text-align': 'left', 'margin-left': '3%' }} href="/"><img style={{ 'width': '8%' }} src={ logo } /> FACE Makeup</NavbarBrand>
        </Navbar>
      </div>
    );
}
