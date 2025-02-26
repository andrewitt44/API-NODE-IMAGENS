const ImagemRepository = require('../Repository/ImagemRepository');
const Imagem = require('../Entity/Imagem');

class ImagemService {
    async criarNovaImagem(imagem) {
        const novaImagem = new Imagem(imagem.referencia);  // Remover título e data de criação

        novaImagem.usuario_id = imagem.usuario_id; 

        return await ImagemRepository.criarImagem(novaImagem);  
    }

    async listarImagem() {
        return await ImagemRepository.listarImagem();
    }

    async buscarImagem(id) {
        return await ImagemRepository.buscarImagem(id);
    }

    async atualizarImagem(id, referencia) {
        const dadosAtualizados = { referencia };  // Remover título e data de criação
        return await ImagemRepository.atualizarImagem(id, dadosAtualizados);
    }
}

module.exports = new ImagemService();
