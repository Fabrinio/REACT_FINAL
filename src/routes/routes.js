import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import {Carrinho} from "../pages/Carrinho";
import Pedidos from "../pages/Pedidos";
import {Produto} from "../pages/Produto";
import { Navbar } from "../components/Navbar";

const Private = ({ Item }) => {
  const { signed } = useAuth();
    console.log( signed )
  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
    
         
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Carrinho />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/pedidos' element={<Pedidos/>} />
          <Route path='/produto/:id' element={<Produto/>} />
        </Routes>
        
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;