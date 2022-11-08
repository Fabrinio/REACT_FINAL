import styled from 'styled-components'

export const Container = styled.div`

    padding: 4rem 0;
    color: #2A8B9E;

   

    h1 {
        margin: 3rem 0;
        margin-top: -10px;
        color:black;
    }

    .produto{
        display: flex;
        align-items: center;
        justify-content: center;
        color:black;
    }

    img {
        width: 350px;
        height: 350px;
        border-radius: 7px;

    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
        color:black;
    }

    span {
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%;
        color:black;
    }

    .price {
        font-size: 150%;
    }
    button {
    background-color: #2A8B9E;
    border: none;
    border-radius: 1rem;
    color:  whitesmoke;
    padding: 0.8rem 2rem;
    margin-top: 7px;
    font-size: 100%;
    transition: all 0.3s;
  }

  button:hover {
    background-color: #CAF0F8;
    color: #2A8B9E;
  }
 `;

 export const Container2 = styled.div`
 
    display: flex;
    flex-direction: row;
    color:black;

 `;

export const ListaProduto = styled.ul`
margin-left: 87%;
margin-top: -21%;
list-style: none;
display: grid;
/* aqui ta deixando responsivo com o minmax */
grid-template-rows: repeat(3, minmax(100px, 1fr));
column-gap: 3rem;
row-gap: 4rem;
color:black;
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
  color:black;
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

export const Container3 = styled.div`
    background-color: #CAF0F8;
    margin-top: -163%;
    border-radius: 6px;
    margin-left: 20%;
    margin-right: 20%;

    h1{
        background-color: #CAF0F8;
        border-radius: 1rem;
        border-style: none;
        color:black;
    }

    button{
        border: none;
        background-color: transparent;
        margin-right: 30px;
        font-size: 26px;
        margin-bottom: 1rem;
        color:black;
    }

    button:hover{
        cursor: pointer;
    }

    button:active{
        text-decoration: dashed;
        font-weight: bold;
    }




`;
 
 