import styled from "styled-components"

export const FormContainer = styled.form`
  width: 100%;
  .row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    > div {
      flex: 1;
    }
    + .row {
      margin-top: 1rem;
    }
    .cep {
      max-width: 9rem;
    }
    .complemento {
      flex: 2;
    }
    .cidade {
      flex: 1.5;
    }
    .uf {
      flex: 0.4;
    }
  }
  @media (max-width: 500px) {
    .row {
      flex-direction: column;
    }
    .cep {
      max-width: 100% !important;
    }
  }
`
