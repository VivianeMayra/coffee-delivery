import styled from "styled-components"

export const LayoutContainer = styled.div`
  width: 90%;
  height: calc(100vh - 10rem);
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1028px) {
    width: 70%;
    margin: 5rem auto;
    height: 100%;
  }
`
