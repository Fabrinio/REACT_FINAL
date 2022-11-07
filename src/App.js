import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./context/auth";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Carrinho } from "./pages/Carrinho";
import { Pedidos } from "./pages/Pedidos";
import { Produtos } from "./pages/Produtos";
import { Produto } from "./pages/Produto";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/pedidos' element={<Pedidos/>} />
        <Route path='/produtos' element={<Produtos/>} />
        <Route path='/login' element={<Login/>} />
        <Route path="/produto/:id" element={<Produto />}/>
      </Routes>
    </Router>
    </>
  );
}
