import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  color:black;

  table{
    border: 2px solid #2A8B9E;
    width: 80%;
    height: 500px;
    color:black;
  }

  th {
    border-bottom: 1px solid black;
    background-color: #CAF0F8;
    color:black;
  }

  td{
    text-align: center;
    color:black;
  }
`;