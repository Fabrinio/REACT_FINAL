import { Fragment, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import { Carrinho } from "../pages/Carrinho";
import Pedidos from "../pages/Pedidos";
import { Produto } from "../pages/Produto";
import { Navbar } from "../components/Navbar";
import { AuthContext } from "../context/auth";

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
            <Route path="*" element={<Carrinho />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/produto/:id" element={<Produto />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
      </>
    );
  };
  

export default RoutesApp;
