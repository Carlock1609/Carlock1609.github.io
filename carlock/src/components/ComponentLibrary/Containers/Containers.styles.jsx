import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  align-items: flex-start;	
  width: 100%;
  min-height: 100vh;
  height: 100%;
  
  margin: 0;
  background: #5a5a5a;
`;
export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1250px;
  

  margin: 50px auto 50px auto;
`;
export const Wrapper = styled.div`
  z-index: ${(props) => props.ZIndex ? props.ZIndex : 1};
  margin-top: ${(props) => props.indentTop ? props.indentTop : ''}px;
  padding: ${(props) => props.noPadding ? '0' : '25px'};
  background: rgba(224, 224, 224, 0.329);
  border-radius: 5px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.397);
  box-sizing: border-box;
  ${(props) => props.Bottom ? `
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  ` : ``}
  ${(props) => props.Top ? `
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  ` : ``}
`;