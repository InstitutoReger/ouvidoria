import { Router } from 'express';
import fs from 'fs';
import multer from 'multer';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

import uploadConfig from '../config/upoad';

import emailConfig from '../config/mail';

const routes = Router();

const upload = multer(uploadConfig);

routes.get('/', (request, response) => {
    response.send('<h1>XupXup Geladinhos Gourmet</h1>');
});

routes.post('/send', upload.single('upload'), async (request, response) => {
    const {
        type,
        identification,
        name,
        email,
        subject,
        message,
    } = request.body;

    const { file } = request;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        ignoreTLS: false,
        secure: false,
        auth: {
            user: emailConfig.access.email,
            pass: emailConfig.access.pass,
        },
    } as SMTPTransport.Options);

    try {
        if (file) {
            await transporter.sendMail({
                from: emailConfig.access.email,
                to: 'ouvidoria@institutoreger.org.br',
                subject: `[Ouvidoria - ${type}] ${subject}`,
                text: `
                Novo Cadastro.
                Tipo: ${type}
                Identificação: ${identification}
                Nome: ${name}
                E-mail: ${email},
                Mensagem: ${message}
                `,
                attachments: [
                    {
                        filename: file.filename,
                        path: file.path,
                    },
                ],
            });
            await fs.promises.unlink(file.path);
        } else {
            await transporter.sendMail({
                from: emailConfig.access.email,
                to: 'ouvidoria@institutoreger.org.br',
                subject: `[Ouvidoria - ${type}] ${subject}`,
                text: `
                Novo Cadastro.
                Tipo: ${type}
                Identificação: ${identification}
                Nome: ${name}
                E-mail: ${email},
                Mensagem: ${message}
                `,
            });
        }

        return response.status(200).json({ message: 'OK' });
    } catch (err) {
        console.log(err);
        return response.status(501).json({ message: 'Error' });
    }
});
export default routes;
