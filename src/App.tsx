import { type FC } from "react"
import {Routes, Route, Link} from "react-router-dom";
import {LoginPage, HomePage, RegisterPage, ProductsPage, ProductPage} from "./pages";
import { pagesConfig } from "./configs/pages.config.ts";
import "./App.scss"

const App: FC = () => {
  return (
    <>
      <header>
        <nav style={{display: "flex", gap: 70, marginBottom: 90}}>
          <Link to={pagesConfig.home}>Home</Link>
          <Link to={pagesConfig.products}>Products</Link>
          <Link to={pagesConfig.login}>Login</Link>
          <Link to={pagesConfig.register}>Register</Link>
        </nav>
        <p></p>
      </header>
      
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
