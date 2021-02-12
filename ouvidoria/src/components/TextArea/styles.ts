import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    label {
        display: block;
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0.5rem;
    }

    textarea {
        width: 100%;
        padding: 0.8rem;
        border-radius: 0.6rem;
        border: 1px solid #999;
        margin-bottom: 1rem;
        resize: none;
        height: 15rem;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;

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
