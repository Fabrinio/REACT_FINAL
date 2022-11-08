import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color:black;
`;

export const ListaPedidos = styled.div`
    //margin-top: 85px;
    display: grid;
    grid-template-columns: repeat(1);
    width: 80%;
    color:black;
`;

export const Pedido = styled.div`
    border-color: gray;
    border-style: double;
    border-radius: 1rem;
    height: 90%;
    margin: 1%;
    display: flex;
    flex-direction: row;
    padding: 2%;
    color:black;

    li{
      color:black;
    }

    p{
      text-align: justify;
      color:black;
    }

    span{
      font-weight: bold;
      color:black;
    }
`;