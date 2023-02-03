import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react"
import {
  ButtonsContainer,
  CheckoutContainer,
  CoffeeContainer,
  ConfirmationButton,
  Frame,
  Icon,
  IconPay,
  Location,
  PayContainer,
  TextContainer,
  Total,
  TotalSum,
} from "./style"

import { NavLink, useNavigate } from "react-router-dom"
import { useCart } from "../../hooks/useCart"
import { CoffeeCartCard } from "./components/CoffeeCartCard"
import { formatMoney } from "../../utils/formatMoney"
import { useAdress } from "../../hooks/useAdress"
import { useState } from "react"
import { NewAdressForm } from "./components/NewAdressForm"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"

const DELIVERY_PRICE = 4.5

/*Atributos que desejo capturar */
export interface Adress {
  id: number
  rua: string
  numero: number
  bairro: string
  cidade: string
  uf: string
}

interface AdressProps {
  adress: Adress
}

const newAdressFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  rua: zod.string().min(1, "Informe a Rua"),
  numero: zod.number().min(1, "Informe o número"),
  complemento: zod.string(),
  bairro: zod.string().min(1, "Informe o bairro"),
  cidade: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe o UF"),
})

export type NewAdressFormData = zod.infer<typeof newAdressFormValidationSchema>

export function Checkout({ adress }: AdressProps) {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal
  const formattedItensTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)
  /*Criando os estados */
  const [information] = useState("")
  const { addAdressToForm } = useAdress()

  const newAdressForm = useForm<NewAdressFormData>({
    resolver: zodResolver(newAdressFormValidationSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: 0,
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  })

  const { handleSubmit } = newAdressForm
  const navigate = useNavigate()

  function handleCreateNewAdress(data: NewAdressFormData) {
    navigate("/success", {
      state: data,
    })
  }

  return (
    <CheckoutContainer>
      <Frame>
        <h2>Complete seu pedido</h2>
        <Location>
          <div>
            <Icon>
              <MapPinLine size={22} />
            </Icon>
            <TextContainer>
              <h2>Endereço de entrega</h2>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </TextContainer>
          </div>
          <FormProvider {...newAdressForm}>
            <NewAdressForm />
          </FormProvider>
        </Location>
        <PayContainer>
          <div>
            <IconPay>
              <CurrencyDollar size={22} />
            </IconPay>
            <TextContainer>
              <h2>Pagamento</h2>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </TextContainer>
          </div>
          <ButtonsContainer>
            <button>
              <IconPay>
                <CreditCard size={16} />
              </IconPay>
              Cartão de Crédito
            </button>
            <button>
              <IconPay>
                <Bank size={16} />
              </IconPay>
              Cartão de débito
            </button>
            <button>
              <IconPay>
                <Money size={16} />
              </IconPay>
              Dinheiro
            </button>
          </ButtonsContainer>
        </PayContainer>
      </Frame>
      <Frame>
        <h2>Cafés selecionados</h2>
        <CoffeeContainer>
          {cartItems.map((item) => (
            <CoffeeCartCard key={item.id} coffee={item} />
          ))}
          <hr />
          <Total>
            <div>
              <span>Total de entregas</span>
              <h2>{formattedItensTotal}</h2>
            </div>
            <div>
              <span>Entrega</span>
              <h2>{formattedDeliveryPrice}</h2>
            </div>
            <TotalSum>
              <h1>Total</h1>
              <h1>{formattedCartTotal}</h1>
            </TotalSum>
          </Total>
          <ConfirmationButton
            onSubmit={handleSubmit(handleCreateNewAdress)}
            disabled={cartQuantity <= 0}
            type="submit"
          >
            <NavLink to="/success">Confirmar pedido</NavLink>
          </ConfirmationButton>
        </CoffeeContainer>
      </Frame>
    </CheckoutContainer>
  )
}
