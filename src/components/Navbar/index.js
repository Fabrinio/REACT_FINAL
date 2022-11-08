import React from 'react';
import { Nav, NavLink, NavMenu, NavBtnLink } from './styled';
import logo from '../../assets/LogoBranco.png';


export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/home'>
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
          <NavBtnLink>Sair</NavBtnLink> 
          {/* <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button> */ }
        </NavMenu>
      </Nav>
    </>
  );
};