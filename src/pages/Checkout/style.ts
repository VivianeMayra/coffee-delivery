import styled from "styled-components"
export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5rem;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  @media (max-width: 1024px) {
    margin: 5rem auto;
  }
`
export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 2rem;
  padding: 0px;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 3rem;
  }

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
  align-items: center;
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

    min-width: 30rem;
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
  max-width: 35rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
    max-width: 35rem;
  }

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
  justify-content: flex-start;
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
    &.selected {
      background: ${(props) => props.theme["purple-light"]};
      border: 1px solid ${(props) => props.theme["purple-dark"]};
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
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;

  @media (max-width: 480px) {
    min-width: 35rem;
  }
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
    gap: 15px;
    width: 400px;
    height: 21px;

    @media (max-width: 480px) {
      width: 450px;
    }
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
  width: 25rem;
  height: 2.87rem;
  background: ${(props) => props.theme["yellow-middle"]};
  border: none;
  border-radius: 6px;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-weight: 700;

  @media (max-width: 480px) {
    width: 30rem;
  }

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
    transition: 0.5s;
  }
`
