import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #2A8B9E;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

    img{
      background: #2A8B9E;
    }
`;

export const NavLink = styled(Link)`
  background: #2A8B9E;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #2A8B9E;
    color: #002447;
  }
  &.active {
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
  background: #2A8B9E;
  display: flex;
  align-items: center;
  margin-right: -24px;
  margin-right: 24px; 
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  background-color: #2A8B9E;
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;