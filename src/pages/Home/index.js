import React, { useState, useEffect } from "react";
import { Container, ListaProduto, Product } from "./styled";
import { Link } from "react-router-dom";
import axios from "axios";


export function Home() {
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
        <ListaProduto>
          {produtos.map((produtos) => {
            return (
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
    </>
  )
}

export default Home;
