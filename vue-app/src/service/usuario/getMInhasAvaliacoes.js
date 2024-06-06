import { getMinhasAvaliacoesDeProfessor } from "@/repositories/usuario/obterAvaliacoesUsuario";
import axios from "axios";
import CryptoJS from "crypto-js";

export async function obterMinhasAvaliacoesProfessores() {
    try {
        const responsekey = await axios.get('http://localhost:3000/chave');
        const key = responsekey.data;

        const encryptedMatricula = sessionStorage.getItem('matricula');
        if (!encryptedMatricula) {
            throw new Error('Matricula not found in sessionStorage');
        }

        const decryptedBytes = CryptoJS.AES.decrypt(encryptedMatricula, key);
        const matriculadec = decryptedBytes.toString(CryptoJS.enc.Utf8);
        const matricula_url = parseInt(matriculadec, 10)


        const minhas_avaliacoes_professores = await getMinhasAvaliacoesDeProfessor(matricula_url);

        const avaliacoesProfessores = minhas_avaliacoes_professores.avaliacoesProfessores || [];
        const qtd_avaliacoes = avaliacoesProfessores.length;

        const avaliacoes_professor = avaliacoesProfessores.map(avaliacao => ({
            nome_professor: avaliacao.nome_professor,
            foto_professor: avaliacao.foto_professor,
            cod_materia: avaliacao.cod_materia,
            nota_total: (avaliacao.nota_total / 2),
            comentario: avaliacao.comentario,
            num_likes: avaliacao.num_likes,
            num_dislikes: avaliacao.num_dislikes,
        }));

        return {
            qtd_avaliacoes,
            avaliacoes_professor,
        };
    } catch (error) {
        console.error('Erro ao buscar minhas avaliações de professores', error);
        throw error;
    }
}
