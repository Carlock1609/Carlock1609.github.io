import styled from 'styled-components';

export const Image = styled.div`
  height: ${(props) => props.size ? props.size : null}px;
  width: ${(props) => props.size ? props.size : null}px;

  border-radius: ${(props) => props.radius ? props.radius : null}px;
  background: url(${(props) => props.image ? props.image : ''}), grey;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Icon = styled.img`
  height: ${(props) => props.size ? props.size : null}px;
  width: ${(props) => props.size ? props.size : null}px;
`;