import { InputHTMLAttributes } from "react"
import { useFormContext } from "react-hook-form"
import { Input } from "../../../../components/Input"
import { FormContainer } from "./styles"
interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function NewAdressForm() {
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType
  return (
    <FormContainer>
      <div className="row">
        <Input
          placeholder="CEP"
          type="string"
          className="cep"
          {...register("cep")}
          error={errors.cep?.message}
        />
      </div>
      <div className="row">
        <Input
          placeholder="Rua"
          className="rua"
          {...register("rua")}
          error={errors.street?.message}
        />
      </div>
      <div className="row">
        <Input
          type="string"
          placeholder="Número"
          {...register("numero")}
          error={errors.number?.message}
        />
        <Input
          placeholder="Complemento"
          className="complemento"
          {...register("complemento")}
          error={errors.complement?.message}
          rightText="Opcional"
        />
      </div>
      <div className="row">
        <Input
          placeholder="Bairro"
          {...register("bairro")}
          error={errors.district?.message}
        />
        <Input
          placeholder="Cidade"
          className="cidade"
          {...register("cidade")}
          error={errors.city?.message}
        />
        <Input
          placeholder="UF"
          className="uf"
          {...register("uf")}
          error={errors.uf?.message}
        />
      </div>
    </FormContainer>
  )
}
