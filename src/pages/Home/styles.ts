import styled from "styled-components"

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80%;

  @media (max-width: 480px) {
    min-width: 70%;
  }

  @media (max-width: 1024px) {
    min-width: 156%;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1rem;
  max-width: "50%";

  @media (max-width: 480px) {
    align-items: center;
    gap: 2rem;
    margin-left: 2rem;
  }

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
    display: grid;
    grid-template-columns: 400px 200px;

    @media (max-width: 480px) {
      grid-template-columns: 300px 200px;
      margin-right: 80px;
    }

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

  @media (max-width: 480px) {
    margin-left: 85px;
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
  }

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

  @media (max-width: 480px) {
    /* ou qualquer largura de tela que você preferir */
    grid-template-columns: repeat(2, 1fr); /* exibe apenas uma coluna */
    column-gap: 2.5rem;
  }

  @media (max-width: 1024px) {
    column-gap: 5rem;
  }
`
