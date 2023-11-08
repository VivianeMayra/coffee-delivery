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

import { useNavigate } from "react-router-dom"
import { useCart } from "../../hooks/useCart"
import { CoffeeCartCard } from "./components/CoffeeCartCard"
import { formatMoney } from "../../utils/formatMoney"

import { NewAdressForm } from "./components/NewAdressForm"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import { useInformationOrder } from "../../hooks/useInformationOrder"
import { useState } from "react"
/*Fazendo a validação do formulário */

const DELIVERY_PRICE = 4.5

/*Atributos que desejo capturar */
export interface Adress {
  rua: string
  numero: string
  bairro: string
  cidade: string
  uf: string
}

export type PaymentType = "debito" | "credito" | "dinheiro" | ""

export interface InformationOrder {
  adress: Adress
  paymentType: PaymentType
}

interface AdressProps {
  adress: Adress
}

const newAdressFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  rua: zod.string().min(1, "Informe a Rua"),
  numero: zod.string().min(1, "Informe o número"),
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
  const { addInformationOrderToForm } = useInformationOrder()
  const [paymentType, setPaymentType] = useState<PaymentType>("")

  const newAdressForm = useForm<NewAdressFormData>({
    resolver: zodResolver(newAdressFormValidationSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  })

  const { getValues } = newAdressForm
  const navigate = useNavigate()

  function handlePaymentType(type: PaymentType) {
    if (paymentType === type) {
      setPaymentType("")
    } else {
      setPaymentType(type)
    }
  }

  function handleCreateNewInformationOrder() {
    const { rua, cidade, bairro, uf, numero } = getValues()
    const adress = { rua, cidade, bairro, uf, numero }
    addInformationOrderToForm(adress, paymentType)
    navigate("/success")
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
            <button
              className={paymentType === "credito" ? "selected" : ""}
              onClick={() => handlePaymentType("credito")}
            >
              <IconPay>
                <CreditCard size={16} />
              </IconPay>
              Cartão de Crédito
            </button>
            <button
              className={paymentType === "debito" ? "selected" : ""}
              onClick={() => handlePaymentType("debito")}
            >
              <IconPay>
                <Bank size={16} />
              </IconPay>
              Cartão de débito
            </button>
            <button
              className={paymentType === "dinheiro" ? "selected" : ""}
              onClick={() => handlePaymentType("dinheiro")}
            >
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
            onClick={handleCreateNewInformationOrder}
            disabled={cartQuantity <= 0}
            type="submit"
          >
            Confirmar pedido
          </ConfirmationButton>
        </CoffeeContainer>
      </Frame>
    </CheckoutContainer>
  )
}

/*interface InformationOrder {
  address: Adress;
  paymentType: "tipo1" | "tipo2" | "tipo3" 
}
*/
