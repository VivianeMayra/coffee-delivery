import styled from "styled-components"

export const ContainerMain = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 5rem;
  margin-left: 2rem;
  width: 100%;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: 5rem;
    gap: 5rem;
    margin-left: 0;
  }

  > img {
    min-width: 45%;
  }
`
export const Frame = styled.div`
  display: flex;
  flex-direction: column;
`
export const TextContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  > h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
    justify-content: center;
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

  @media (max-width: 768px) {
    width: 100%;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  > h1 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  @media (max-width: 768px) {
    width: 100%;
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
