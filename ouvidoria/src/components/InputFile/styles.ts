import styled from 'styled-components';

export const Container = styled.div`
    label {
        display: block;
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0.5rem;
    }

    input {
        @media (max-width: 550px) {
            font-size: 1.2rem;
        }
    }
`;
