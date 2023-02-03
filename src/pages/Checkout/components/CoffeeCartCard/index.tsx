import { Trash } from "phosphor-react"
import { QuantityInput } from "../../../../components/QuantityInput"
import { CartItem } from "../../../../contexts/CartContext"
import { useCart } from "../../../../hooks/useCart"
import { formatMoney } from "../../../../utils/formatMoney"
import { IconPay } from "../../style"
import { Requests, TitlesAndButtons } from "./styles"

interface CoffeeCartCardProps {
  coffee: CartItem
}
export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase")
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease")
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }
  const coffeeTotal = coffee.price * coffee.quantity

  const formattedPrice = formatMoney(coffeeTotal)

  return (
    <Requests>
      <img src={`/coffees/${coffee.avatarUrl}`} />
      <TitlesAndButtons>
        <h2>{coffee.name}</h2>
        <div>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={coffee.quantity}
          />
          <button onClick={handleRemove}>
            <IconPay>
              <Trash size={16} />
            </IconPay>
            Remover
          </button>
        </div>
      </TitlesAndButtons>
      <p>
        R$ <strong>{formattedPrice}</strong>{" "}
      </p>
    </Requests>
  )
}
