import React, { useCallback, useRef, useState, ChangeEvent } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

import logo from '../../assets/logo.png';
import footer from '../../assets/footer.png';

import Input from '../../components/Input';

import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import InputFile from '../../components/InputFile';
import Message from '../../components/Message';

import { Container, Content, Header, Footer } from './styles';

interface IData {
    type: string;
    identification: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    upload: File;
}

const Home: React.FC = () => {
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorEmail, setErrorEmail] = useState('');
    const [animate, setAnimate] = useState('');

    const formRef = useRef<FormHandles>(null);

    const handleOnChangeType = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            const { value } = event.currentTarget;

            if (value === 'Anônimo') {
                setDisabled(true);
                formRef.current?.setFieldError('name', '');
                formRef.current?.setFieldError('email', '');
                formRef.current?.setFieldValue('name', '');
                formRef.current?.setFieldValue('email', '');
            } else {
                setDisabled(false);
            }
        },
        [],
    );

    const handleSubmit = useCallback(async (data: IData) => {
        try {
            setLoading(true);
            setErrorEmail('');

            if (data.identification !== 'Anônimo') {
                const schema = Yup.object().shape({
                    type: Yup.string().required('Campo obrigatório'),
                    identification: Yup.string().required(
                        'Campo é obrigatório',
                    ),
                    name: Yup.string().required('Campo obrigatório'),
                    email: Yup.string()
                        .email('Informe um e-mail válido')
                        .required('Campo obrigatório'),
                    subject: Yup.string().required('Campo obrigatório'),
                    message: Yup.string().required('Campo obrigatório'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });
            } else {
                formRef.current?.setFieldError('name', '');

                const schema = Yup.object().shape({
                    type: Yup.string().required('Campo obrigatório'),
                    identification: Yup.string().required(
                        'Campo é obrigatório',
                    ),
                    subject: Yup.string().required('Campo obrigatório'),
                    message: Yup.string().required('Campo obrigatório'),
                });

                await schema.validate(data, {
                    abortEarly: false,
                });
            }

            const formData = new FormData();

            formData.append('type', data.type);
            formData.append('identification', data.identification);
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('subject', data.subject);
            formData.append('message', data.message);
            formData.append('upload', data.upload);

            await api.post('/send', formData);

            formRef.current?.clearField('type');
            formRef.current?.clearField('identification');
            formRef.current?.clearField('name');
            formRef.current?.clearField('email');
            formRef.current?.clearField('subject');
            formRef.current?.clearField('message');

            setAnimate('animate');

            setTimeout(() => {
                window.location.reload();
                setAnimate('');
            }, 3000);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);
            } else {
                setErrorEmail('Erro ao enviar Mensagem, tente novamente!');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <>
            <Header>
                <div>
                    <img src={logo} alt="Logo Instituto Reger" />
                    <p>Instituto Reger - Ouvidoria</p>
                </div>
            </Header>

            <Container>
                <Content>
                    <h2>Ouvidoria</h2>

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-content">
                            <Select label="Tipo" id="type" name="type">
                                <option value="">Selecione...</option>
                                <option value="Denúncias">Denúncias</option>
                                <option value="Sugestões / Elogios">
                                    Sugestões / Elogios
                                </option>
                                <option value="Reclamações">Reclamações</option>
                            </Select>
                            <Select
                                label="Identificação"
                                id="identification"
                                name="identification"
                                onChange={event => handleOnChangeType(event)}
                            >
                                <option value="">Selecione...</option>
                                <option value="Anônimo">Anônimo</option>
                                <option value="Identificado - Sem divulgação do nome">
                                    Identificado - Sem divulgação do nome
                                </option>
                                <option value="Identificado - Com divulgação do nome">
                                    Identificado - Com divulgação do nome
                                </option>
                            </Select>
                            <Input
                                label="Nome"
                                id="name"
                                name="name"
                                disabled={disabled}
                            />
                            <Input
                                label="E-mail"
                                id="email"
                                name="email"
                                disabled={disabled}
                                type="email"
                            />

                            <Input
                                label="Assunto"
                                id="subject"
                                name="subject"
                            />
                            <TextArea
                                label="Mensagem"
                                id="message"
                                name="message"
                            />
                            <InputFile
                                label="Anexo"
                                id="upload"
                                name="upload"
                            />
                            {loading ? (
                                <button type="button" disabled>
                                    Enviando...
                                </button>
                            ) : (
                                <button type="submit">Enviar</button>
                            )}
                            {errorEmail && (
                                <p className="error">{errorEmail}</p>
                            )}
                        </div>
                    </Form>
                </Content>
            </Container>

            <Message animate={animate} />

            <Footer>
                <img src={footer} alt="Logo Instituto Reger" />
                <p>Ouvidoria: (62) 3637-8041</p>
            </Footer>
        </>
    );
};

export default Home;
