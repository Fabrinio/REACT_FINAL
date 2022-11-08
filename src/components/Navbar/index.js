import React from 'react';
import { Nav, NavLink, NavMenu, NavBtnLink } from './styled';
import logo from '../../assets/LogoBranco.png';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

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
          <NavBtnLink Text="Sair" onClick={() => {
            signout();
            navigate("/")
          }}>Sair</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};