import { AuthProvider } from "./context/auth";
import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
    <GlobalStyle/>
    <Login/>
    </>
  );
}
