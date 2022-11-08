import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  
`;

export const ListaProduto = styled.ul`
  margin-top: 150px;
  list-style: none;
  display: grid;
  /* aqui ta deixando responsivo com o minmax */
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Product = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #CAF0F8;
  border-radius: 1rem;

  img {
    margin-top: 10px;
    width: 12rem;
    height: 12rem;
    border-radius: 7px;
    margin-bottom: 2rem;
    background-color: #CAF0F8;
  }

  span {
    font-weight: bold;
    background-color: #CAF0F8;
    font-size: 120%;
    text-align: center;
  }

  img {
    transition: all 0.3s; /* o tempo da transição do aumento da imagem */
    background-color: #CAF0F8;
  }

  a{
    background-color: transparent;
  }

  img:hover {
    transform: scale(1.1); /* aumenta a imagem ao passar o mouse*/
  }

  button{
    margin-top: 7px;
    background-color: #2A8B9E;
    border: none;
    color: whitesmoke;
    border-radius: 1rem;
    height: 40px;
    width: 80px;
    margin-bottom: 10px;
    transition: all 0.3s; /* o tempo da transição do aumento da imagem */
    
    }

    button:hover{
      cursor: pointer;
      transform: scale(1.1); /* aumenta a imagem ao passar o mouse*/
    }

`;
