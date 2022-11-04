import './styles.js';
import { Container } from './styles.js';

export function Login(){
    return(
        <Container>
        
            <h1 >Login</h1>
            <input type={'text'}  placeholder= 'Usuário ou email' />
            <input type={'password'} placeholder= 'senha'/>
            <button >Entrar</button>
            <button >Cadastre-se aqui</button>
        
        </Container>
    )
}

export default Login;