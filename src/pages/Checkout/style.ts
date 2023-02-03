import styled from "styled-components"
export const CheckoutContainer = styled.div`
  display: flex;
  margin-top: 5rem;
`
export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 15rem;
  padding: 0px;
  gap: 12px;

  > h2 {
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    align-items: center;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  width: 640px;
  height: 372px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 35rem;
    height: 2.75rem;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 2px;

  > h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    align-items: center;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  > h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    align-items: center;
    color: ${(props) => props.theme["base-text"]};
  }
`
export const Icon = styled.div`
  color: ${(props) => props.theme["yellow-dark"]};
`
export const IconPay = styled.div`
  color: ${(props) => props.theme["purple-middle"]};
`

export const PayContainer = styled.div`
  padding: 2.5rem;
  gap: 2rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    width: 35rem;
    height: 2.75rem;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;

  button {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    gap: 12px;
    border-radius: 6px;
    background: ${(props) => props.theme["base-button"]};
    border: none;
    cursor: pointer;
    margin-top: 15px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme["base-text"]};

    &:hover {
      background: ${(props) => props.theme["base-hover"]};
      transition: 0.5s;
    }
  }
`
export const CoffeeContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;
  width: 448px;
  left: 832px;
  top: 182px;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
`
export const Total = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  gap: 12px;

  > div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 8px;
    width: 368px;
    height: 21px;
  }
`
export const TotalSum = styled.div`
  margin-top: 0.75rem;
  color: ${(props) => props.theme["base-subtitle"]};
`
export const ConfirmationButton = styled.button`
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 4px;
  width: 23rem;
  height: 2.87rem;
  background: ${(props) => props.theme["yellow-middle"]};
  border: none;
  border-radius: 6px;
  > a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
  }

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
    transition: 0.5s;
  }
`
