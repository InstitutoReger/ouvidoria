import React from 'react';

import { Container } from './styles';

interface IMessage {
    animate: string;
}

const Message: React.FC<IMessage> = ({ animate }) => {
    return (
        <Container className={animate}>Mensagem Enviada Com Sucesso!</Container>
    );
};

export default Message;
