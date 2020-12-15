import styled, { css, keyframes } from 'styled-components';

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  margin-bottom: 15px;
`;
export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
`;
export const FeedItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: fit-content;
  padding: 0 15px;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    transition: .2s;
    background: #969696;
  }
  ${(props) => props.selected ? `
    background:#969696;
  `: ``}
`;
const ExpandBar = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;
export const Bar = styled.div`
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  height: 4px;
  width: 0%;
  background: black;
  ${(props) => props.selected ? css`
    animation: ${ExpandBar} .2s ease-in;
    animation-fill-mode: forwards
  ` : ``}

`;
export const HorizontalHR = styled.div`
  height: 1px;
  width: 100%;
  background: #bbbbbb;
`;
export const AboutItem = styled.div`
  width: 300px;
  text-align: center;
`;