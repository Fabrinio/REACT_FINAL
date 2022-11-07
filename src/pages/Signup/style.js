import styled from "styled-components";

export const Container = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    width: 30vw;
    flex-direction: column;
    margin: auto;
    margin-top: 12rem;
    background-color: #2A8B9E;
    border-radius: 2rem;
    box-shadow: 20px 20px 10px #002447;
`;

export const Content = styled.div`
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
`;


export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: white;

  img{
    background-color:#2A8B9E
  }
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: white;
  background-color:#2A8B9E
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
  background-color:#2A8B9E
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #002447;
    background-color:#2A8B9E
  }
`;
