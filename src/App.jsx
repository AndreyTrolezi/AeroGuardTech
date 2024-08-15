//para de colocar as coisas em ingles pq a gente n é ingles

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Pagina1 } from "./pages/Pagina1.jsx"
import { theme } from "./styles/theme.js"
import { GlobalStyle } from "./styles/global.js"
import { SobreNos } from "./pages/SobreNos.jsx"
import { Refs } from "./pages/Refs.jsx"
import { Guia } from "./pages/Guia.jsx"
import { Mate } from "./pages/Mate.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pagina1/>
  },
  {
    path: "/sobre",
    element: <SobreNos/> //pra fazer uma outra pagina precisa disso aq ent é só copiar esse modelo, n vou apagar e é isso, vai ficar assim msm
  },
  {
    path: "/refs",
    element: <Refs/>
  },
  {
    path: "/guia",
    element: <Guia/>
  },
  {
    path: "/mate",
    element: <Mate/>
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
