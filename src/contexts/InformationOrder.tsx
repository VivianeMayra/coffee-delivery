import { produce } from "immer"
import { createContext, ReactNode, useEffect, useState } from "react"
import { Adress, InformationOrder, PaymentType } from "../pages/Checkout"

interface InformationOrderContextType {
  informationOrder: InformationOrder
  addInformationOrderToForm: (adress: Adress, paymentType: PaymentType) => void
}

interface InformationOrderContextProviderProps {
  children: ReactNode
}

const INFORMATION_ORDER_STORAGE_KEY = "coffeeDelivery:informationOrder"

export const InformationOrderContext = createContext(
  {} as InformationOrderContextType
)

/*para usar contextos, lembre-se que precisamos da criação de um provider */
export function InformationOrderContextProvider({
  children,
}: InformationOrderContextProviderProps) {
  const [informationOrder, setInformationOrder] = useState<InformationOrder>(
    () => {
      const storedAdressItems = localStorage.getItem(
        INFORMATION_ORDER_STORAGE_KEY
      )
      if (storedAdressItems) {
        return JSON.parse(storedAdressItems)
      }
      return {}
    }
  )

  function addInformationOrderToForm(adress: Adress, paymentType: PaymentType) {
    setInformationOrder({
      adress,
      paymentType,
    })
  }

  useEffect(() => {
    localStorage.setItem(
      INFORMATION_ORDER_STORAGE_KEY,
      JSON.stringify(informationOrder)
    )
  }, [informationOrder])

  return (
    <InformationOrderContext.Provider
      value={{ informationOrder, addInformationOrderToForm }}
    >
      {children}
    </InformationOrderContext.Provider>
  )
}
