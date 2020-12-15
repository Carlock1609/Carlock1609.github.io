import styled from 'styled-components';

export const Image = styled.div`
  height: ${(props) => props.size ? props.size : ''}px;
  width: ${(props) => props.size ? props.size : ''}px;

  border-radius: ${(props) => props.radius ? props.radius : null}px;
  background: url(${(props) => props.image ? props.image : null}), grey;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: ${(props) => props.select ? 'pointer' : ''};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.397);
  ${(props) => props.card ? `
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  ` : ``}
`;
export const Icon = styled.img`
  height: ${(props) => props.size ? props.size : null}px;
  width: ${(props) => props.size ? props.size : null}px;

  margin-top: ${(props) => props.indentTop ? props.indentTop : ''}px;
  margin-bottom: ${(props) => props.indentBottom ? props.indentBottom : ''}px;
  margin-right: ${(props) => props.indentRight ? props.indentRight : ''}px;
  margin-left: ${(props) => props.indentLeft ? props.indentLeft : ''}px;
`;