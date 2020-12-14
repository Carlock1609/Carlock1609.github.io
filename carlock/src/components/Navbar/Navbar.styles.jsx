import styled from 'styled-components';

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;

  padding: 0 20px;
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