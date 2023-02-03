import { useFormContext } from "react-hook-form"
import {
  CidadeInput,
  ComplementoInput,
  FormContainer,
  MaxInput,
  MiddleInput,
  MinInput,
} from "./styles"

export function NewAdressForm() {
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label>
        <MiddleInput
          className="cep"
          type="string"
          placeholder="CEP"
          {...register("cep")}
        />
      </label>
      <label>
        <MaxInput
          className="rua"
          type="string"
          placeholder="Rua"
          {...register("rua")}
        />
      </label>
      <div>
        <label>
          <MiddleInput
            className="numero"
            type="number"
            placeholder="Número"
            {...register("numero")}
          />
        </label>
        <label>
          <ComplementoInput
            className="complemento"
            type="string"
            placeholder="Complemento"
            {...register("complemento")}
          />
        </label>
      </div>
      <div>
        <label>
          <MiddleInput
            className="bairro"
            type="string"
            placeholder="Bairro"
            {...register("bairro")}
          />
        </label>
        <label>
          <CidadeInput
            className="cidade"
            type="string"
            placeholder="Cidade"
            {...register("cidade")}
          />
        </label>
        <label>
          <MinInput
            className="uf"
            type="string"
            placeholder="UF"
            {...register("uf")}
          />
        </label>
      </div>
    </FormContainer>
  )
}
