/*
Para dar dislike um comentário:
 - descriptografar o sessionStorage e ver o array likesDislikesProfessores 
 - verificar se existe um relacionamento entre o usuario e esse comentário] 
 - se não existir:
  - atualizar a quantidade de dislikes na tabela comentário 
  - adicionar o relacionamento na tabela de relacionamento 
  - adicionar o relacionamento no sessionStorage 
 - se existir:
  - verificar se o relacionamento é de like ou de deslike 
  -se for de dislike:
    - atualizar a quantidade de dislikes na tabela comentario, diminuindo um dislike -ok
    - apagar o relacionamento na tabela de relacionamento 
    - apagar o relacionamento no sessionStorage 
  - se for de like:
    - atualizar a quantidade de like e deslike na tabela comentário, somar um no dislike e subtrair um no like
    - editar a tabela de relacionamento entre usuario e comentario, trocando like para false e dislike para true
    - atualizando o sessionstorage também
*/

import { descriptarDados } from "@/generals/descriptografarDados";
import { encriptarDados } from "@/generals/encripitarDados";
import {
	curtirDescurtirComentarioProfessor,
	relacionamentoUsuarioCurtidaProfessor,
} from "@/repositories/comentario/enviarLikeDislikeProfessor";
import { deletarRelacionamentoUsuarioComentarioProfessor } from "@/repositories/comentario/deletarLikeDislikeProfessor";
import { editarRelacionamentoUsuarioComentarioProfessor } from "@/repositories/comentario/editarRelacionamentoUsuarioComentario";

async function dislikeComentario(cod_comentario, comentariosCurtidos) {
	const matriculaDescriptografada = await descriptarDados(
		sessionStorage.getItem("matricula")
	);
	await curtirDescurtirComentarioProfessor(
		parseInt(0),
		parseInt(1),
		parseInt(cod_comentario)
	);
	await relacionamentoUsuarioCurtidaProfessor(
		parseInt(cod_comentario),
		parseInt(matriculaDescriptografada),
		parseInt(0),
		parseInt(1)
	);
	const novaCurtida = {
		cod_comentario: cod_comentario,
		like: 0,
		dislike: 1,
	};

	const curtidasAtualizadas = [...comentariosCurtidos, novaCurtida];

	const comentariosAtualizadosEncriptados = await encriptarDados(
		curtidasAtualizadas
	);

	sessionStorage.setItem(
		"likes_dislikes_professores",
		comentariosAtualizadosEncriptados
	);
}

async function dislikeComentarioComLike(cod_comentario, comentariosCurtidos) {
	const matriculaDescriptografada = await descriptarDados(
		sessionStorage.getItem("matricula")
	);
	await curtirDescurtirComentarioProfessor(
		parseInt(-1),
		parseInt(1),
		parseInt(cod_comentario)
	);
	await editarRelacionamentoUsuarioComentarioProfessor(
		parseInt(cod_comentario),
		parseInt(matriculaDescriptografada),
		parseInt(0),
		parseInt(1)
	);
	const novaCurtida = {
		cod_comentario: cod_comentario,
		like: 0,
		dislike: 1,
	};

	const comentariosAtualizados = comentariosCurtidos.filter(
		(comentario) => comentario.cod_comentario != cod_comentario
	);

	const curtidasAtualizadas = [...comentariosAtualizados, novaCurtida];

	const comentariosAtualizadosEncriptados = await encriptarDados(
		curtidasAtualizadas
	);

	sessionStorage.setItem(
		"likes_dislikes_professores",
		comentariosAtualizadosEncriptados
	);
}

async function tirarDislikeComentario(cod_comentario, comentariosCurtidos) {
	const matriculaDescriptografada = await descriptarDados(
		sessionStorage.getItem("matricula")
	);
	await curtirDescurtirComentarioProfessor(
		parseInt(0),
		parseInt(-1),
		parseInt(cod_comentario)
	);
	await deletarRelacionamentoUsuarioComentarioProfessor(
		parseInt(cod_comentario),
		parseInt(matriculaDescriptografada)
	);
	const comentariosAtualizados = comentariosCurtidos.filter(
		(comentario) => comentario.cod_comentario != cod_comentario
	);
	const comentariosAtualizadosEncriptados = await encriptarDados(
		comentariosAtualizados
	);
	sessionStorage.setItem(
		"likes_dislikes_professores",
		comentariosAtualizadosEncriptados
	);
}

export async function verificacaoDislike(comentariosCurtidos, cod_comentario) {
	const comentarioProcurado = comentariosCurtidos.find(
		(comentario) => comentario.cod_comentario == cod_comentario
	);
	if (!comentarioProcurado) {
		await dislikeComentario(cod_comentario, comentariosCurtidos);
		return;
	} else {
		if (comentarioProcurado.dislike == 1) {
			await tirarDislikeComentario(cod_comentario, comentariosCurtidos);
		} else {
			await dislikeComentarioComLike(cod_comentario, comentariosCurtidos);
		}
	}
}
