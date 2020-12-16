import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: ${(props) => props.scalar ? props.scalar : 1};
  align-items: ${(props) => props.align ? props.align : ''};
  justify-content: ${(props) => props.justify ? props.justify : ''};
`;
export const Space = styled.div`
	position: relative;

  margin-top: ${(props) => 
    props.size === 'first' ? `
      0;
    `
    :
    props.size === 'small' ? `
      30px;
    `
    :
    props.size === 'smaller' ? `
      15px;
    `
    :
    `
      50px;
    `
  }
`;