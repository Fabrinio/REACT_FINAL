import { AuthProvider } from "./context/auth";
import { Login } from "./pages/Login";
import { Produto } from "./pages/Produto"
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
    <GlobalStyle/>
    <Produto/>
    </>
  );
}
