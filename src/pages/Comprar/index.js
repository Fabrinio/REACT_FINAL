import { Container, Forms } from "./styled";
import Input from "../../components/Input";

export function Comprar() {
  return (
    <Container>
      <h1>Preencha os dados para compra</h1>
      <Forms>
        <span>Nome:</span>
      <Input
        type="text"
        placeholder="Digite seu nome"
      />
      <span>CPF:</span>
      <Input
        type="text"
        placeholder="Digite seu cpf"
      />
      <span>Celular:</span>
      <Input
        type="text"
        placeholder="Digite seu celular"
      />
      <span>CEP:</span>
      <Input
        type="text"
        placeholder="Digite seu cep"
      />
      <span>Número:</span>
      <Input
        type="text"
        placeholder="Digite o numero se existir"
      />
      </Forms>
    </Container>
  );
}
