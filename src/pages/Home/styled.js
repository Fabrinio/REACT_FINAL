import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const ListaProduto = styled.ul`
  list-style: none;
  display: grid;
  /* aqui ta deixando responsivo com o minmax */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Produto = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 10rem;
    border-radius: 7px;
    margin-bottom: 2rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
    transition: all 0.3s; /* o tempo da transição do aumento da imagem */
  }

  a:hover {
    transform: scale(1.1); /* aumenta a imagem ao passar o mouse*/
  }
`;
