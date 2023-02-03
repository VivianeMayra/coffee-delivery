import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useLocation } from "react-router-dom"
import Illustration from "../../assets/Illustration.svg"
import { useAdress } from "../../hooks/useAdress"
import { NewAdressFormData } from "../Checkout"
import {
  ContainerMain,
  Frame,
  Icon,
  InfoContainer,
  TextContainer,
} from "./styles"

interface LocationType {
  state: NewAdressFormData
}

export function Success() {
  const { adressItems } = useAdress()
  console.log(adressItems)

  const { state } = useLocation() as LocationType

  return (
    <ContainerMain>
      <Frame>
        <TextContainer>
          <h1>Uhu!Pedido Confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </TextContainer>
        <InfoContainer>
          <div>
            <Icon type="location">
              <MapPin size={16} weight="fill" />
            </Icon>
            <TextContainer>
              <h2>
                Entrega em{" "}
                <strong>
                  {state.rua},{state.numero}
                </strong>
              </h2>
              <span>
                {state.bairro} - {state.cidade}, {state.uf}
              </span>
            </TextContainer>
          </div>
          <div>
            <Icon type="time">
              <Timer size={16} weight="fill" />
            </Icon>
            <TextContainer>
              <h2>Previsão de entrega</h2>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </TextContainer>
          </div>
          <div>
            <Icon type="money">
              <CurrencyDollar size={16} weight="fill" />
            </Icon>
            <TextContainer>
              <h2>Pagamento na entrega</h2>
              <span>
                <strong>Cartão de crédito</strong>
              </span>
            </TextContainer>
          </div>
        </InfoContainer>
      </Frame>
      <img src={Illustration} alt="" />
    </ContainerMain>
  )
}
