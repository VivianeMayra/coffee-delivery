import styled from "styled-components"

export const LayoutContainer = styled.div`
  width: 90%;
  height: calc(100vh - 10rem);
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1020px) {
    width: 100%;
    margin: 0 auto;
    height: 100%;
  }
`
