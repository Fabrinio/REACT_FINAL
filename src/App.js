import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./context/auth";
import { Login } from "./pages/Login";
import { Produto } from "./pages/Produto"
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
        <Route path='/' exact component={Home} />
        <Route path='/Carrinho' component={Carrinho} />
        <Route path='/Pedidos' component={Pedidos} />
        <Route path='/Produtos' component={Produtos} />
        <Route path='/Login' component={Login} />
      </Routes>
    </Router>
    <Home/>
    </>
  );
}
