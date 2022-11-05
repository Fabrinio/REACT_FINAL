import { useEffect, useState } from "react";
import { Container } from "./styles.js";

export function Produto() {

  const [produto, setProduto] = useState({});


  useEffect(()=>{
    fetch(`http://localhost:8080/produto/3`)
    .then((response)=>response.json())
    .then((data)=>{
        const{id,nome,descricao,valor,fotoLink} = data;

        const produto = {
          id, 
          nome, 
          descricao, 
          valor, 
          fotoLink
        };

        setProduto(produto);
     });
});

  return (
    <Container>
      <div className="produto">
        <img
          src={produto.fotoLink}
          alt={produto.nome}
        />
        <div className="details">
          <h1>{produto.nome}</h1>
          <span>{produto.descricao}</span>
          <span className="price">R$ {produto.valor},99</span>
        </div>
      </div>
    </Container>
  );
}
