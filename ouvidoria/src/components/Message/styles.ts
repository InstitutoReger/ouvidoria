import styled from 'styled-components';

export const Container = styled.div`
    width: 32rem;
    background: #29b844;
    color: #fff;
    padding: 3.2rem;
    border-radius: 0.6rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    opacity: 0;
    visibility: hidden;

    &.animate {
        transform: translateX(-100%);
        animation: animeLeft 0.5s forwards;
    }

    @keyframes animeLeft {
        to {
            opacity: 1;
            transform: translateX(-50%);
            visibility: visible;
        }
    }
`;
