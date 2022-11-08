import { Container, Forms } from "./styled";
import Input from "../../components/Input";
import { ToastContainer, toast } from "react-toastify";


export function Comprar() {
  const notify = () => toast.success('Compra feita com sucesso!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "ligth",
    });
  return (
    <>
    <Container>
      <h1>Preencha os dados para compra</h1>
      <Forms>
        <span>Nome:</span>
        <Input type="text" placeholder="Digite seu nome" />
        <span>CPF:</span>
        <Input type="text" placeholder="Digite seu cpf" />
        <span>Celular:</span>
        <Input type="text" placeholder="Digite seu celular" />
        <span>CEP:</span>
        <Input type="text" placeholder="Digite seu cep" />
        <span>Número:</span>
        <Input type="text" placeholder="Digite o numero se existir" />
      </Forms>
      <button onClick={notify}>Finalizar compra</button>
    </Container>
      <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
    
  </>
  );
}
