import styled from 'styled-components';

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  z-index: 99;
  padding: 0 20px;
  background: linear-gradient(to bottom,  rgba(0,0,0,.80), rgba(0,0,0,.10));
`;
export const NavItem = styled.div`
  height: 100%;

  border-radius: 15px;
  cursor: pointer;
  :hover {
    transition: .2s;
    color: grey;
  }
`;
export const LinkWrapper = styled.a`
  
`;