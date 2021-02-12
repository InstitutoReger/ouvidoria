import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    label {
        display: block;
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0.5rem;

        span {
            cursor: pointer;
        }

        span:hover svg {
            color: #a80700;
        }
    }

    select {
        width: 100%;
        padding: 0.8rem;
        border-radius: 0.6rem;
        border: 1px solid #999;
        margin-bottom: 1.2rem;
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

export const Message = styled.div`
    position: relative;

    span {
        background: #fff;
        border: 2px solid #a80700;
        padding: 1.2rem;
        border-radius: 0.6rem;
        font-size: 1.4rem;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        position: absolute;
        width: 400px;
        bottom: calc(100% + 0.8rem);
        left: 50%;
        transform: translateX(-50%);
        color: #333;
        opacity: 0;
        transition: opacity 0.4s;
        visibility: hidden;
        display: none;

        p {
            line-height: 2rem;

            & + p {
                margin-top: 1.2rem;
            }
        }

        &::before {
            content: '';
            border-style: solid;
            border-color: #a80700 transparent;
            border-width: 6px 6px 0 6px;
            bottom: 20px;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
        display: initial;
    }
`;
