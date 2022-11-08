import React, { useState, useEffect } from "react";
import { Container } from "./styled";
import  axios  from "axios";

export function Produtos() {
    
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/produto`)
        .then((response) => {
          console.log(response.data);
          setProdutos(response.data);
        })
      }, []);

    return (
        <>
            <Container>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Categoria</th>
                        <th>Qtd Estoque</th>
                        <th>Valor</th>
                    </tr>
                    {produtos.map((produtos) => {
                        return (
                            <tr key={produtos.id}>
                                <td>{produtos.id}</td>
                                <td>{produtos.nome}</td>
                                <td>{produtos.nomeCategoria}</td>
                                <td>{produtos.qtdEstoque}</td>
                                <td>R$ {produtos.valor},99</td>
                            </tr>
                        )
                    })}
                </table>
            </Container>
        </>
    );
}