import {
  CoffeList,
  IconContainer,
  MenuContainer,
  TextContainer,
} from "./styles"
import ImageCoffee from "../../assets/ImageCoffee.svg"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import { CoffeeCard } from "./components/CoffeeCard"
import { coffees } from "../../Coffees/coffees"
import { Container, Box } from "@chakra-ui/react"

export function Home() {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      minWidth={{ base: "70%", md: "100%" }}
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        mt={20}
        mb={10}
        marginLeft={{ base: "200px", md: 0 }}
        alignItems="center"
        justifyContent={{ base: "center", md: "space-around" }}
        maxWidth="100%"
        gap={{ base: "0", md: "100px" }}
        textAlign={{ base: "center", md: "start" }}
      >
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
        <Box marginTop={{ base: "2rem", md: "0" }} minWidth="50%">
          <img src={ImageCoffee} alt="" />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        mt={20}
        mb={20}
        alignItems="center"
        marginLeft={{ base: "7rem", md: "0" }}
      >
        <MenuContainer>
          <h2>Nossos Cafés</h2>
          <CoffeList>
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </CoffeList>
        </MenuContainer>
      </Box>
    </Container>
  )
}
