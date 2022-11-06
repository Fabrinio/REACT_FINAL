import React from 'react';
import { Nav, NavLink, NavMenu, NavBtnLink } from './styled';
import logo from '../../assets/LogoBranco.png';


export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/Home'>
          <img src={logo} alt='Logo' height={70}></img>
        </NavLink>
        <NavMenu>
        <NavLink to='/Pedidos' activeStyle>
            Pedidos
          </NavLink>
          <NavLink to='/Produtos' activeStyle>
            Produtos
          </NavLink>
          <NavLink to='/Carrinho' activeStyle>
            Carrinho
          </NavLink>
          <NavBtnLink to='/Login'>Login</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};