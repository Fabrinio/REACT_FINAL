import styled from "styled-components";

export const Container = styled.div`

    padding: 10%;
    

    h1{
        margin-top: -11rem;
        color: #2A8B9E;
        padding: 5%;
        margin-left: -77px;
    }

    button{
      margin-top: 10px;
      color: white;
      background-color: #2A8B9E;
      width: 350px;
      padding: 20px;
      border-radius: 2rem;
      border: 0px;
      cursor: pointer;
      &:hover {
      transition: all 0.2s ease-in-out;
      background: #256ce1;
      color: #010606;
      }
    }


`;

export const Forms = styled.div`
    gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #2A8B9E;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;

  span{
    background-color: #2A8B9E;
    color: whitesmoke;
    font-size: 16px;
    margin-left: -81%;
  }




`;