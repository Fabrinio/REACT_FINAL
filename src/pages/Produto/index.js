import axios from "axios";
import { useEffect, useState, React } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Container2,
  Container3,
  ListaProduto,
  Product,
} from "./styles.js";

export function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/produto/${id}`).then((response) => {
      const { id, nome, descricao, valor, fotoLink } = response.data;

      const produto = {
        id,
        nome,
        descricao,
        valor,
        fotoLink,
      };

      console.log(response.data);
      setProduto(response.data);
    });
  }, [id]);

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/produto`).then((response) => {
      console.log(response.data);
      setProdutos(response.data);
    });
  }, []);

  return (
    <>
      <Container>
        <div className="produto">
          <img src={produto.fotoLink} alt={produto.nome} />
          <div className="details">
            <h1>{produto.nome}</h1>
            <span>{produto.descricao}</span>
            <span className="price">R$ {produto.valor},99</span>
            <Link to={`/comprar`}>
            <button>Comprar</button>
            </Link>
          </div>
        </div>
      </Container>
      <Container2>
        <ListaProduto>
          {produtos.map((produtos) => {
            return (
              <Product key={produtos.id}>
                <Link to={`/produto/${produtos.id}`}>
                  <img src={produtos.fotoLink} alt={produtos.nome} />
                </Link>
                <span>{produtos.nome}</span>
                <Link to={`/produto/${produtos.id}`}>
                  <button>R$ {produtos.valor},99</button>
                </Link>
              </Product>
            );
          })}
        </ListaProduto>
      </Container2>
      <Container3>
        
        <button>Informações Gerais</button>
        <button >Avaliações</button>
      
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h1>
      </Container3>
    </>
  );
}
