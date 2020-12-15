import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${(props) => props.size ? props.size : ''}px;
  font-weight: ${(props) => props.weight ? props.weight : '400'};

  color: ${(props) => props.color ? props.color : 'black'};
  margin-top: ${(props) => props.indentTop ? props.indentTop : ''}px;
  margin-bottom: ${(props) => props.indentBottom ? props.indentBottom : ''}px;
  margin-right: ${(props) => props.indentRight ? props.indentRight : ''}px;
  margin-left: ${(props) => props.indentLeft ? props.indentLeft : ''}px;
  ${(props) => props.underline ? `
    border-bottom: 2px solid white;
  ` : ``}
`;
export const Title = styled.h1`

`;