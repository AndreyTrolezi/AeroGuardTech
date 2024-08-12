import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Pagina1 } from "./pages/Pagina1"
import { theme } from "./styles/theme.js"
import { GlobalStyle } from "./styles/global.js"
import { Teste } from "./pages/Teste.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pagina1/>
  },
  {
    path: "/teste",
    element: <Teste/> //pra fazer uma outra pagina precisa disso aq ent é só copiar esse modelo, n vou apagar e é isso, vai ficar assim msm
  }
])


export function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
