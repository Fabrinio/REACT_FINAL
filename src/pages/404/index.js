import { Container } from "./styled"
import robot from '../../assets/robozinhotriste.png';

export function NoPage() {
    return(
    <Container>
        <img src={robot} alt="Robozinho atendimento" />
        <h1>ERROR 404</h1>
        <h2>Página não encontrada   
        </h2>
        <h3>Volte para a home para o problema ser restaurado</h3>
    </Container>
    )


}

