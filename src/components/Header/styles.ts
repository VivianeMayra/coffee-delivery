import styled from "styled-components"
export const HeaderContainer = styled.header`
  width: 100%;
  background: ${(props) => props.theme["white"]};
  height: 4rem;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  @media (min-width: 1028px) {
    width: 100%;
  }

  nav {
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 0.75rem;

    .location {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      gap: 0.25rem;
      background: ${(props) => props.theme["purple-light"]};
      border-radius: 6px;
      color: ${(props) => props.theme["purple-dark"]};
      font-style: normal;
      line-height: 130%;
    }

    a {
      padding: 0.5rem;
      gap: 0.25rem;
      isolation: isolate;
      background: ${(props) => props.theme["yellow-light"]};
      color: ${(props) => props.theme["yellow-dark"]};
      border-radius: 6px;
      span {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        top: 24px;
        right: 35px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 700;
        background: ${(props) => props.theme["yellow-dark"]};
      }
    }
  }
`
