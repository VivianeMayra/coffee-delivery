import styled from "styled-components"

export const Requests = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 4px;
  gap: 30px;
  > img {
    width: 64px;
    height: 64px;
  }
  hr {
    width: 368px;
    border: 1px solid ${(props) => props.theme["base-button"]};
  }
`
export const TitlesAndButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  > p {
    align-self: flex-start;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;

    > button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 4px;
      text-transform: uppercase;
      background: ${(props) => props.theme["base-button"]};
      border-radius: 6px;
      border: none;

      &:hover {
        background: ${(props) => props.theme["base-hover"]};
        transition: 0.5s;
      }
    }
  }
`
