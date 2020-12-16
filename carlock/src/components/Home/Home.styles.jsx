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
  border-top-left-radius: ${(props) => props.first ? 5 : 0}px;
  cursor: pointer;
  :hover {
    transition: .2s;
    background:#bebebe;
  }
  ${(props) => props.selected ? `
    background:#bebebe;
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
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  height: 4px;
  width: 0%;
  background: white;
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
  width: ${(props) => props.size ? props.size : null};
  min-width: 350px;
  text-align: center;
  ${(props) => props.wrapEarly ? `
    min-width: 420px;
    margin-top: 15px;
  `: ``}
`;