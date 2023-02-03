import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { CartContextProvider } from "./contexts/CartContext"
import { AdressContextProvider } from "./contexts/AdressContext"
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <AdressContextProvider>
            <Router />
          </AdressContextProvider>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
