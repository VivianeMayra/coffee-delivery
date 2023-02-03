import { produce } from "immer"
import { createContext, ReactNode, useEffect, useState } from "react"
import { Adress } from "../pages/Checkout"

export interface AdressItem extends Adress {
  information: string
}

interface AdressContextType {
  adressItems: AdressItem[]
  addAdressToForm: (Adress: AdressItem) => void
}

interface AdressContextProviderProps {
  children: ReactNode
}

const ADRESS_ITEMS_STORAGE_KEY = "coffeeDelivery:adressItems"

export const AdressContext = createContext({} as AdressContextType)

/*para usar contextos, lembre-se que precisamos da criação de um provider */
export function AdressContextProvider({
  children,
}: AdressContextProviderProps) {
  const [adressItems, setAdressItems] = useState<AdressItem[]>(() => {
    const storedAdressItems = localStorage.getItem(ADRESS_ITEMS_STORAGE_KEY)
    if (storedAdressItems) {
      return JSON.parse(storedAdressItems)
    }
    return []
  })

  function addAdressToForm(adress: AdressItem) {
    const adressAlreadyExistsInForm = adressItems.findIndex(
      (adressItem) => adressItem.id === adress.id
    )

    const newAdress = produce(adressItems, (draft) => {
      if (adressAlreadyExistsInForm < 0) {
        draft.push(adress)
      } else {
        draft[adressAlreadyExistsInForm].information = adress.information
      }
    })

    setAdressItems(newAdress)
  }

  useEffect(() => {
    localStorage.setItem(ADRESS_ITEMS_STORAGE_KEY, JSON.stringify(adressItems))
  }, [adressItems])

  return (
    <AdressContext.Provider value={{ adressItems, addAdressToForm }}>
      {children}
    </AdressContext.Provider>
  )
}
