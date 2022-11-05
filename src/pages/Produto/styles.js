import styled from 'styled-components'

export const Container = styled.div`

    padding: 4rem 0;
    color: #2A8B9E;

    h1 {
        margin: 3rem 0;
    }

    .produto{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 300px;
        border-radius: 7px;

    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        max-width: 50%;
    }

    span {
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%;
    }

    .price {
        font-size: 150%;
    }
 `;
 
 