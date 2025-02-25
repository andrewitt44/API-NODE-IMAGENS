const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

AWS.config.update({
    region: 'us-east-1',
    accessKeyId: 'AKIA5RRHCKYZZ7ADAU6V',
    secretAccessKey: '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'
});

const s3 = new AWS.S3();

class AWSRepository {
    async buscarImagem(referencia) {
        try {
            const params = {
                Bucket: 'bucketmi74',
                Key: referencia
            };

            const url = s3.getSignedUrl('getObject', params);
            return { url };
        } catch (error) {
            throw new Error("Erro ao buscar imagem no S3: " + error.message);
        }
    }

    async enviarImagemParaS3(file) {
        try {
            const params = {
                Bucket: 'bucketmi74',
                Key: file.originalname,  
                Body: file.buffer,
                ContentType: file.mimetype,  
                ACL: 'public-read'
            };

            // Fazendo o upload
            const data = await s3.upload(params).promise();
            return { message: 'Imagem enviada com sucesso', data };
        } catch (error) {
            throw new Error("Erro ao enviar imagem para o S3: " + error.message);
        }
    }
}

module.exports = new AWSRepository();
