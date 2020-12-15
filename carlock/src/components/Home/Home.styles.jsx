import styled from 'styled-components';

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
  height: 40px;
  width: 100%;
  padding: -15px;
`;
export const FeedItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: fit-content;
  padding: 0 15px;
  padding-bottom: 12px;
  cursor: pointer;
  ${(props) => props.selected ? `
    border-bottom: 4px solid black;
  `: ``}
`;
export const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;

  margin: 15px;
`;