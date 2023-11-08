import { CurrencyDollar, MapPin, Timer } from "phosphor-react"

import Illustration from "../../assets/Illustration.svg"
import { useInformationOrder } from "../../hooks/useInformationOrder"

import {
  ContainerMain,
  Frame,
  Icon,
  InfoContainer,
  TextContainer,
  TextContainerTitle,
} from "./styles"

export function Success() {
  const { informationOrder } = useInformationOrder()

  return (
    <ContainerMain>
      <Frame>
        <TextContainerTitle>
          <h1>Uhu!Pedido Confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
        </TextContainerTitle>
        <InfoContainer>
          <div>
            <Icon type="location">
              <MapPin size={16} weight="fill" />
            </Icon>
            <TextContainer>
              <h2>
                Entrega em{" "}
                <strong>
                  {informationOrder.adress.rua},{informationOrder.adress.numero}
                </strong>
              </h2>
              <span>
                {informationOrder.adress.bairro} -{" "}
                {informationOrder.adress.cidade}, {informationOrder.adress.uf}
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
                <strong>{informationOrder.paymentType}</strong>
              </span>
            </TextContainer>
          </div>
        </InfoContainer>
      </Frame>
      <img src={Illustration} alt="" />
    </ContainerMain>
  )
}
