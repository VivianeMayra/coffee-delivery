import styled from "styled-components"

export const LayoutContainer = styled.div`
  max-width: 89rem;
  height: calc(100vh - 10rem);
  margin: 2rem auto;
  padding: 1rem;
  background: ${(props) => props.theme["background-app"]};
  display: flex;
  flex-direction: column;
`
