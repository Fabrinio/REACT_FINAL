import { Fragment} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import { NoPage } from "../pages/404";
import {Pedidos} from "../pages/Pedidos";
import { Produto } from "../pages/Produto";
import { Produtos } from "../pages/Produtos";
import { Navbar } from "../components/Navbar";
import { Comprar } from "../pages/Comprar";

/*const Private = ({ Item }) => {
  console.log("POSITIVO", signed);
  return signed > 0 ? <Item /> : <Signin />;
};*/

const RoutesApp = () => {
  const { signed } = useAuth();
  if (signed <= 0) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
    }
    return (
      <>
      <BrowserRouter>
      <Navbar/> 
        <Fragment>
          <Routes>
            <Route exact path="/home" element={<Home />} />            
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/comprar" element={<Comprar />} />
            <Route path="*" element={<NoPage />} />            
          </Routes>
        </Fragment>
      </BrowserRouter>
      </>
    );
  };
  

export default RoutesApp;
