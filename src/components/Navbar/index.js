import React from 'react';
import { Nav, NavLink, NavMenu } from './styled';
import logo from '../../assets/LogoBranco.png';


export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='Logo' height={70}></img>
        </NavLink>
        <NavMenu>
        <NavLink to='/pedidos' activeStyle>
            Pedidos
          </NavLink>
          <NavLink to='/produtos' activeStyle>
            Produtos
          </NavLink>
          <NavLink to='/carrinho' activeStyle>
            Carrinho
          </NavLink>
          {/* <NavBtnLink to='/login'>Login</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};