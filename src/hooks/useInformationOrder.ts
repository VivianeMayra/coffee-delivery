import { useContext } from "react"
import { InformationOrderContext } from "../contexts/InformationOrder"

export function useInformationOrder() {
  const context = useContext(InformationOrderContext)
  return context
}
