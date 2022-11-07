import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./context/auth";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Carrinho } from "./pages/Carrinho";
import { Pedidos } from "./pages/Pedidos";
import { Produtos } from "./pages/Produtos";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Carrinho' element={<Carrinho />} />
        <Route path='/Pedidos' element={<Pedidos/>} />
        <Route path='/Produtos' element={<Produtos/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
    </Router>
    </>
  );
}
