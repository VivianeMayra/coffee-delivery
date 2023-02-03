import styled from "styled-components"

export const FormContainer = styled.form`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0px;
  gap: 16px;
  > div {
    display: flex;
    > label {
      margin-right: 0.75rem;
    }
  }
`
const BaseInput = styled.input`
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;
  &:focus {
    border-color: ${(props) => props.theme["yellow-dark"]};
  }

  color: ${(props) => props.theme["base-text"]};
  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`
export const MiddleInput = styled(BaseInput)`
  width: 12.5rem;
`
export const ComplementoInput = styled(BaseInput)`
  width: 21.75rem;
`
export const CidadeInput = styled(BaseInput)`
  width: 17.25rem;
`

export const MinInput = styled(BaseInput)`
  width: 3.75rem;
`
export const MaxInput = styled(BaseInput)`
  width: 35rem;
`
