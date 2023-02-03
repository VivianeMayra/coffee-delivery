import { HeaderContainer } from "./styles"
import logoCoffee from "../../assets/logoCoffee.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"
import { useCart } from "../../hooks/useCart"
export function Header() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} alt="" />
      </NavLink>
      <nav>
        <div className="location">
          <MapPin size={22} weight="fill" />
          <h2>Fortaleza, CE</h2>
        </div>
        <NavLink to={"/checkout"} title="carrinho">
          {cartQuantity >= 1 && <span>{cartQuantity}</span>}
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
