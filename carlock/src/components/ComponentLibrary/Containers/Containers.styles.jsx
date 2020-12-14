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

  margin: 50px auto 0 auto;
`;
export const Wrapper = styled.div`

  margin-top: ${(props) => props.indentTop ? props.indentTop : ''}px;
  padding: 15px;
  background: #c4c4c4;
  border-radius: 5px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.397);
`;