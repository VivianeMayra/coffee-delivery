import styled from "styled-components"

export const ContainerMain = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: space-between;
`
export const Frame = styled.div`
  display: flex;
  flex-direction: column;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  > h1 {
    width: 22.06rem;
    height: 2.62rem;
    left: calc(50% - 22.06rem / 2 - 23.96rem);
    top: 11.5rem;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-dark"]};
  }
`
export const InfoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  width: 32.8rem;
  margin-top: 2.5rem;
  border: 1px solid;
  border-radius: 0.37rem 2rem;
  border-color: rgba(128, 71, 248, 1);

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
  }
`
export const Icon = styled.div<any>`
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
    props.type == "location"
      ? props.theme["purple-middle"]
      : props.type == "time"
      ? props.theme["yellow-middle"]
      : props.theme["yellow-dark"]};
`
