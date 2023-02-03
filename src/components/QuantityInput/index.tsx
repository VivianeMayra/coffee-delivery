import { Minus, Plus } from "phosphor-react"
import { IconWrapper, QuantityInputContainer } from "./styles"

interface QuantityInputProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper disabled={quantity >= 10} onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
