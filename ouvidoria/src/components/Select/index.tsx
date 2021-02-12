import React, {
    SelectHTMLAttributes,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { FiInfo } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Message } from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
}

const Input: React.FC<ISelectProps> = ({
    name,
    label,
    id,
    children,
    ...rest
}) => {
    const [isFilled, setIsFilled] = useState(false);

    const selectRef = useRef<HTMLSelectElement>(null);

    const { fieldName, defaultValue, error, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    const handleOnBlur = useCallback(() => {
        if (selectRef.current?.value === '') {
            setIsFilled(false);
        } else {
            setIsFilled(true);
        }
    }, []);

    const handleOnChange = useCallback(() => {
        if (selectRef.current?.value === '') {
            setIsFilled(false);
        } else {
            setIsFilled(true);
        }
    }, []);

    return (
        <Container>
            {label === 'Identificação' ? (
                <label
                    htmlFor={`${id}`}
                    style={{
                        marginLeft: '5px',
                        color: '#333',
                        display: 'flex',
                        gap: '5px',
                    }}
                >
                    {label}
                    <span
                        style={{
                            marginTop: '2px',
                        }}
                    >
                        <Message>
                            <span>
                                <p>
                                    <b>Anônimo:</b> opção sem nenhum tipo de
                                    identificação e sem possibilidade de
                                    resposta e/ou acompanhamento.
                                </p>
                                <p>
                                    <b>
                                        Identificado - Sem divulgação do nome:
                                    </b>{' '}
                                    o Instituto tem acesso aos seus dados, está
                                    obrigado a responder sua solicitação no
                                    prazo de até 30 dias, mas não pode divulgar
                                    sua identificação em nenhuma hipótese.
                                </p>
                                <p>
                                    <b>
                                        Identificado - Com divulgação do nome:
                                    </b>{' '}
                                    o Instituto tem acesso aos seus dados, está
                                    obrigado a responder sua solicitação no
                                    prazo de até 30 dias, estando autorizada a
                                    divulgar sua identificação.
                                </p>
                            </span>
                            <FiInfo size={18} />
                        </Message>
                    </span>
                </label>
            ) : (
                <label htmlFor={`${id}`}>{label}</label>
            )}

            <select
                id={id}
                ref={selectRef}
                defaultValue={defaultValue}
                onBlur={handleOnBlur}
                onChange={handleOnChange}
                {...rest}
            >
                {children}
            </select>
            {!isFilled && error && <p>{error}</p>}
        </Container>
    );
};

export default Input;
