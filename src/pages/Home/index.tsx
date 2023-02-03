import {
  CoffeList,
  Container,
  HomeContainer,
  IconContainer,
  MenuContainer,
  TextContainer,
} from "./styles"
import ImageCoffee from "../../assets/ImageCoffee.svg"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { CoffeeCard } from "./components/CoffeeCard"
import { coffees } from "../../Coffees/coffees"

export function Home() {
  return (
    <Container>
      <HomeContainer>
        <TextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <ul>
            <li>
              <IconContainer type="car">
                <ShoppingCart size={22} weight="fill" />
              </IconContainer>
              Compra simples e segura
            </li>
            <li>
              <IconContainer type="time">
                <Timer size={22} weight="fill" />
              </IconContainer>
              Entrega rápida e rastreada
            </li>
            <li>
              <IconContainer type="package">
                <Package size={22} weight="fill" />
              </IconContainer>
              Embalagem mantém o café intacto
            </li>
            <li>
              <IconContainer type="coffee">
                <Coffee size={22} weight="fill" />
              </IconContainer>
              O café chega fresquinho até você
            </li>
          </ul>
        </TextContainer>
        <img src={ImageCoffee} alt="" />
      </HomeContainer>
      <MenuContainer>
        <h2>Nossos Cafés</h2>
        <CoffeList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeList>
      </MenuContainer>
    </Container>
  )
}
