import { type FC } from "react"
import {Routes, Route} from "react-router-dom";
import {LoginPage, HomePage, RegisterPage, ProductsPage, ProductPage} from "./pages";
import { pagesConfig } from "./configs/pages.config.ts";
import "./App.scss"

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path={pagesConfig.home} element={<HomePage/>} />
        <Route path={pagesConfig.login} element={<LoginPage/>} />
        <Route path={pagesConfig.register} element={<RegisterPage/>} />
        <Route path={pagesConfig.products} element={<ProductsPage/>} />
        <Route path={pagesConfig.product} element={<ProductPage/>} />
      </Routes>
    </>
  )
}

export default App
