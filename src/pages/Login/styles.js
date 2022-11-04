import styled from 'styled-components'

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


h1 {
    flex-direction: column;
    color: aliceblue;
    font-size: 70px;
    margin-bottom: 1rem;
}

input {
    margin-top: 10px;
    padding: 5px;
    border-radius: 6px;
    border: none;
    width: 50%;
    height:6%;
    transition: all 0.3s;
}

input:hover{
    background-color:#CAF0F8;
}

button{
    padding: 5px;
    margin-top: 10px;
    border-radius: 6px;
    border: none;
    transition: all 0.3s;
}

button:hover{
    transform: scale(1.1);
}
`;