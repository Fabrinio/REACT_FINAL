import { AuthProvider } from "./context/auth";
import { GlobalStyle } from "./styles/global";
import RoutesApp from "./routes/routes";


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