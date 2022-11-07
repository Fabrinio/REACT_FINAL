import React, { useState, useEffect } from "react";
import { Container, ListaProduto } from "./styled";
import { Link } from "react-router-dom";
import { Produto } from "../Produto";

export function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/produto`)
      .then((response) => response.json())
      .then((data) => setProdutos(data.results));
  }, []);

  return (
    <Container>
      {/* <ListaProduto>
        {produtos.map((produtos) => {
          return (
            <Produto key={produtos.id}>
              <Link to={`/Produto/${produtos.id}`}>
                <img src={produtos.fotoLink} alt={produtos.nome} />
              </Link>
              <span>{produtos.nome}</span>
              <span>{produtos.valor}</span>
            </Produto>
          );
        })}
      </ListaProduto> */}
      <h1>COEEEEE</h1>
    </Container>
  );
}
