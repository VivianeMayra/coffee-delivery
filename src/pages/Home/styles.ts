import styled from "styled-components"
export const Container = styled.div`
  width: 89rem;
  height: calc(100vh);
`

export const HomeContainer = styled.div`
  height: 34rem;
  top: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1rem;
  width: 36.75rem;
  height: 12rem;
  left: calc(50% - 36.75rem / 2 - 16.62rem);
  top: calc(50% - 12rem / 2 - 5.12rem);

  h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
    font-stretch: 100;
  }

  ul {
    width: 35.43rem;
    height: 5.25rem;
    left: calc(50% - 35.43rem / 2 - 17.28rem);
    top: calc(50% - 5.25rem / 2 + 7.62rem);
    display: grid;
    grid-template-columns: 400px 200px;

    li {
      list-style: none;
      display: flex;
      margin-bottom: 1rem;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 12px;
      width: 294px;
      height: 32px;
      left: 271px;
      top: 52px;
    }
  }
`
export const IconContainer = styled.div<any>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  color: ${(props) => props.theme.white};
  width: 32px;
  height: 32px;
  border-radius: 60.5rem;
  background: ${(props) =>
    props.type == "car"
      ? props.theme["yellow-dark"]
      : props.type == "time"
      ? props.theme["base-text"]
      : props.type == "package"
      ? props.theme["yellow-middle"]
      : "#8047F8"};
`
export const MenuContainer = styled.div`
  height: 101rem;
  left: 0px;
  right: 0px;
  top: 40.5rem;

  h2 {
    height: 2.62rem;
    left: calc(50% - 12.5rem / 2 - 28.93rem);
    top: 2rem;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    align-items: center;
  }
`
export const CoffeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`
