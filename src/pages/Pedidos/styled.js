import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListaPedidos = styled.div`
    //margin-top: 85px;
    display: grid;
    grid-template-columns: repeat(1);
    width: 80%;
`;

export const Pedido = styled.div`
    border-color: gray;
    border-style: double;
    border-radius: 1rem;
    height: 100px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    padding: 20px;

    p{
      text-align: justify;
    }

    span{
      font-weight: bold;
    }
`;