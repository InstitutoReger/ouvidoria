import React, {
    TextareaHTMLAttributes,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, label, id, ...rest }) => {
    const [isFilled, setIsFilled] = useState(false);

    const inputRef = useRef<HTMLTextAreaElement>(null);

    const { fieldName, defaultValue, error, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    const handleOnBlur = useCallback(() => {
        if (inputRef.current?.value === '') {
            setIsFilled(false);
        } else {
            setIsFilled(true);
        }
    }, []);

    const handleOnChange = useCallback(() => {
        if (inputRef.current?.value === '') {
            setIsFilled(false);
        } else {
            setIsFilled(true);
        }
    }, []);

    return (
        <Container>
            <label htmlFor={`${id}`}>{label}</label>

            <textarea
                id={id}
                ref={inputRef}
                defaultValue={defaultValue}
                onBlur={handleOnBlur}
                onChange={handleOnChange}
                {...rest}
            />
            {!isFilled && error && <p>{error}</p>}
        </Container>
    );
};

export default TextArea;
