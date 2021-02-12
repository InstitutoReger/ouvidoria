import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Props {
    name: string;
    id: string;
    label: string;
}
type InputProps = JSX.IntrinsicElements['input'] & Props;

const ImageInput: React.FC<InputProps> = ({ id, name, label, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'files[0]',
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <input type="file" ref={inputRef} {...rest} id={id} />
        </Container>
    );
};
export default ImageInput;
