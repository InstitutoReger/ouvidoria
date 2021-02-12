import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    label {
        display: block;
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0.5rem;
    }

    input {
        width: 100%;
        padding: 0.8rem;
        border-radius: 0.6rem;
        border: 1px solid #999;
        margin-bottom: 1.2rem;
        font-family: 'Roboto', sans-serif;

        &:hover,
        &:focus {
            outline: none;
            box-shadow: 0 0 0 1px #333;
        }
    }

    & > p {
        color: red;
        font-size: 1.2rem;
        margin-top: -0.5rem;
        text-align: right;
    }
`;
