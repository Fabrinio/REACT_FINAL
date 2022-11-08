import { AuthProvider } from "./context/auth";
import { GlobalStyle } from "./styles/global";
import RoutesApp from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";


export function App() {
  return (
    <>
      <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
      </AuthProvider>
    </>
  );
}

export default App;