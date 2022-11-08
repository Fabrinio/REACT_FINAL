import React, {useState, useEffect} from "react";
import { Container, ListaPedidos, Pedido } from "./styled";
import  axios  from "axios";

export function Pedidos() {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/pedido`)
        .then((response) => {
            console.log(response.data);
            setPedidos(response.data);
          })
    }, []);

    return (
        <>
        <Container>
            <ListaPedidos>
                {pedidos.map((pedidos) => {
                    return (
                        <Pedido key={pedidos.id}>
                            <p>
                            <li><span>Código do pedido:</span> {pedidos.id}</li>
                            <li><span>Nome do cliente:</span> {pedidos.nomeCliente}</li>
                            <li><span>Data do pedido:</span> {pedidos.dataPedido}</li>
                            <li><span>Status do pedido:</span> {pedidos.pedidoStatus}</li>
                            </p>
                        </Pedido>
                    );
                })}
            </ListaPedidos>
        </Container>
        </>
    )
}

export default Pedidos;