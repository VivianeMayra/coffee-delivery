import {
  CidadeInput,
  ComplementoInput,
  FormContainer,
  MaxInput,
  MiddleInput,
  MinInput,
} from "./styles"

export function NewAdressForm() {
  return (
    <FormContainer>
      <form>
        <MiddleInput className="cep" type="number" placeholder="CEP" />
      </form>
      <form>
        <MaxInput name="rua" placeholder="Rua" />
      </form>
      <div>
        <form>
          <MiddleInput name="numero" placeholder="Número" />
        </form>
        <form>
          <ComplementoInput name="complemento" placeholder="Complemento" />
        </form>
      </div>
      <div>
        <form>
          <MiddleInput name="bairro" placeholder="Bairro" />
        </form>
        <form>
          <CidadeInput name="cidade" placeholder="Cidade" />
        </form>
        <form>
          <MinInput name="uf" placeholder="UF" />
        </form>
      </div>
    </FormContainer>
  )
}
