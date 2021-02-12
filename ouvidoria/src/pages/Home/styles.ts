import styled from 'styled-components';

export const Header = styled.header`
    padding: 2.4rem 0;
    background: #eee;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2);

    div {
        max-width: 1100px;
        width: 100%;
        padding: 0 4%;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 550px) {
            flex-direction: column;
            gap: 1.2rem;
        }

        img {
            width: 20rem;

            @media (max-width: 750px) {
                width: 15rem;
            }
        }

        p {
            font-size: 2.4rem;
            font-weight: 700;

            @media (max-width: 750px) {
                font-size: 1.8rem;
            }
        }
    }
`;

export const Container = styled.div`
    padding: 0 4%;
`;

export const Content = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    margin-top: 8rem;
    padding: 3.2rem;
    background: #eee;
    border-radius: 0.6rem;
    margin-bottom: 8rem;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2);

    h2 {
        text-align: center;
        font-size: 3rem;

        &::after {
            content: '';
            display: block;
            height: 0.4rem;
            width: 10rem;
            background: #d80700;
            margin-top: 0.5rem;
            margin: 0 auto;
            border-radius: 0.3rem;
        }
    }

    form {
        margin-top: 2.4rem;

        .form-content {
            max-width: 45rem;
            width: 100%;
            margin: 0 auto;

            p.error {
                color: red;
                margin-top: 1.6rem;
                text-align: center;
            }
        }

        button {
            padding: 1rem 0;
            width: 100%;
            background: #a80700;
            color: #fff;
            border: none;
            border-radius: 0.6rem;
            transition: 0.2s;
            right: 0;
            margin-top: 1.6rem;

            &:hover {
                background: #d80700;
            }
        }
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #a80700;
    padding: 1.2rem 0 0.8rem 0;
    gap: 3.2rem;

    @media (max-width: 550px) {
        flex-direction: column;
        gap: 1.2rem;
    }

    img {
        width: 10rem;
    }

    p {
        color: #fff;
    }
`;
