import React, { useState, useEffect } from "react";
import { Container, ListaProduto, Product } from "./styled";
import { Link } from "react-router-dom";
import { Axios } from "axios";


export function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/produto`)
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
        console.log(data);
      });
  }, []);

  return (
    <Container>
      <ListaProduto>
        {produtos.map((produtos) => {
          return(
          <Product key={produtos.id}>
            <Link to={`/produto/${produtos.id}`}>
              <img src={produtos.fotoLink} alt={produtos.nome} />
            </Link>
            <span>{produtos.nome}</span>
            <Link to={`/produto/${produtos.id}`}><button>R$ {produtos.valor},99</button></Link>
          </Product>
          );
        })}
      </ListaProduto>
      
    </Container>
  );
}
