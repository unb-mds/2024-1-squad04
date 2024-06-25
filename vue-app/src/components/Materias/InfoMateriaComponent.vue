<template>
	<div class="container-frame">
		<div class="container">
			<div class="container-avaliacao">
				<div class="titulo-notas-gerais">
					<h3>Notas Gerais</h3>
					<div v-if="materia.medias" class="five-estrelas">
						<img id="estrela-media-materia"
							v-for="(starClass, index) in getStarClassMateria(materia.medias.media_nota_total)"
							:key="index"
							src="../../assets/icons/avaliacao/icone-estrela-azul-pagina-individual-professores.svg"
							alt="" class="estrela" :class="starClass" />
					</div>

					<p>Experiência</p>
					<div v-if="materia.medias" class="five-estrelas estrelas-metricas">
						<img id="ajuste-estrelas-metricas"
							v-for="(starClass, index) in getStarClassMateria(materia.medias.media_nota_experiencia)"
							:key="index"
							src="../../assets/icons/avaliacao/icone-estrela-azul-pagina-individual-professores.svg"
							alt="" class="estrela" :class="starClass" />
					</div>

					<p>Dificuldade</p>
					<div v-if="materia.medias" class="five-estrelas estrelas-metricas">
						<img id="ajuste-estrelas-metricas"
							v-for="(starClass, index) in getStarClassMateria(materia.medias.media_nota_dificuldade)"
							:key="index"
							src="../../assets/icons/avaliacao/icone-estrela-azul-pagina-individual-professores.svg"
							alt="" class="estrela" :class="starClass" />
					</div>
				</div>

				<!-- Insira aqui as notas gerais dessa disciplina -->
				<div class="container-notas-gerais-disciplina"></div>
			</div>

			<div class="container-notas-gerais">
				<div class="section" id="general-reviews">
					<div class="avaliacoes-gerais-container">
						<div class="titulo-avaliacoes-gerais">
							<h3>Avaliações Gerais</h3>
						</div>
						<!-- Coloque os cards das avaliações dos alunos aqui -->
						<div class="container-avaliacoes-alunos-cards">
							<div v-if="materia.avaliacoes && materia.avaliacoes.length > 0">
								<div v-for="avaliacao in materia.avaliacoes" :key="avaliacao.id" class="avaliacao">
									<div id="foto-de-usuario-container">
										<div id="card-user-container">
											<div id="avaliacao-nome">
												<p>{{ avaliacao.usuario.nome_usuario }}</p>
											</div>
										</div>
										<div id="foto-de-usuario">
											<img src="../../assets/provisorio/foto-perfil-navbar-provisoria.svg"
												alt="" />
										</div>
									</div>
									<div class="five-estrelas">
										<img v-for="n in 5" :key="n"
											src="../../assets/icons/avaliacao/icone-estrela-azul-pagina-individual-professores.svg"
											alt="" class="estrela" :class="getStarClass(n, avaliacao.nota_total)" />
									</div>
									<div id="avaliacao-comentario">
										<p>{{ avaliacao.comentario }}</p>
									</div>
									<div id="avaliacao-icons">
										<div id="like-container">
											<div id="avaliacao-likes">
												<p>{{ avaliacao.num_likes }}</p>
											</div>
											<div id="like-icon">
												<svg width="17" height="17" viewBox="0 0 17 17" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M5.94287 13.0973V5.90059C5.94287 5.61726 6.02787 5.34101 6.1837 5.10726L8.11745 2.23143C8.42204 1.77101 9.17995 1.44518 9.82454 1.68601C10.5187 1.91976 10.9791 2.69893 10.8304 3.39309L10.462 5.70934C10.4337 5.92184 10.4904 6.11309 10.6108 6.26184C10.7312 6.39643 10.9083 6.48143 11.0995 6.48143H14.0108C14.5704 6.48143 15.052 6.70809 15.3354 7.10476C15.6045 7.48726 15.6541 7.98309 15.477 8.48601L13.7345 13.7914C13.515 14.6698 12.5587 15.3852 11.6095 15.3852H8.84704C8.37245 15.3852 7.70662 15.2223 7.40204 14.9177L6.49537 14.2164C6.14829 13.9543 5.94287 13.5364 5.94287 13.0973Z"
														fill="#171717" fill-opacity="0.5" />
													<path
														d="M3.6905 4.51953H2.96091C1.863 4.51953 1.41675 4.94453 1.41675 5.99286V13.1187C1.41675 14.167 1.863 14.592 2.96091 14.592H3.6905C4.78841 14.592 5.23466 14.167 5.23466 13.1187V5.99286C5.23466 4.94453 4.78841 4.51953 3.6905 4.51953Z"
														fill="#171717" fill-opacity="0.5" />
												</svg>
											</div>
										</div>
										<div id="dislike-container">
											<div id="avaliacao-deslikes">
												<p>{{ avaliacao.num_dislikes }}</p>
											</div>
											<div id="dislike-icon">
												<svg width="17" height="17" viewBox="0 0 17 17" fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<g transform="scale(-1,1) translate(-17,0)">
														<path
															d="M5.94287 13.0973V5.90059C5.94287 5.61726 6.02787 5.34101 6.1837 5.10726L8.11745 2.23143C8.42204 1.77101 9.17995 1.44518 9.82454 1.68601C10.5187 1.91976 10.9791 2.69893 10.8304 3.39309L10.462 5.70934C10.4337 5.92184 10.4904 6.11309 10.6108 6.26184C10.7312 6.39643 10.9083 6.48143 11.0995 6.48143H14.0108C14.5704 6.48143 15.052 6.70809 15.3354 7.10476C15.6045 7.48726 15.6541 7.98309 15.477 8.48601L13.7345 13.7914C13.515 14.6698 12.5587 15.3852 11.6095 15.3852H8.84704C8.37245 15.3852 7.70662 15.2223 7.40204 14.9177L6.49537 14.2164C6.14829 13.9543 5.94287 13.5364 5.94287 13.0973Z"
															fill="#171717" fill-opacity="0.5" />
														<path
															d="M3.6905 4.51953H2.96091C1.863 4.51953 1.41675 4.94453 1.41675 5.99286V13.1187C1.41675 14.167 1.863 14.592 2.96091 14.592H3.6905C4.78841 14.592 5.23466 14.167 5.23466 13.1187V5.99286C5.23466 4.94453 4.78841 4.51953 3.6905 4.51953Z"
															fill="#171717" fill-opacity="0.5" />
													</g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div v-else>
								<p>Não há avaliações ainda.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="container-professores">
				<div class="section" id="teacher-review">
					<h3>Professores</h3>

					<!-- Coloque aqui os cards dos professores que ofertam essa disciplina -->
					<div class="container-card-professores"></div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import { obterMateriaByID } from "@/service/materia/ManipularDadosMateriaIndividual";

export default {
	name: "infoMateria",
	data() {
		return {
			materia: {},
		};
	},
	methods: {
		getStarClassMateria(nota_total) {
			const notaPorEstrela = 1;
			let notaAtual = nota_total / notaPorEstrela;

			notaAtual = Math.round(notaAtual * 2) / 2;

			let estrelaClasses = [];

			for (let i = 1; i <= 5; i++) {  // Aqui, diretamente usar o número 5 em vez de totalEstrelas
				if (notaAtual >= i) {
					estrelaClasses.push("full-star");
				} else if (notaAtual > i - 1 && notaAtual < i) {
					estrelaClasses.push("partial-star");
				} else {
					estrelaClasses.push("empty-star");
				}
			}

			return estrelaClasses;
		},
		getStarClass(index, nota_total) {
			const notaPorEstrela = 1;
			let notaAtual = nota_total / notaPorEstrela;

			notaAtual = Math.round(notaAtual * 2) / 2;

			if (notaAtual >= index) {
				return "full-star";
			} else if (notaAtual > index - 1 && notaAtual < index) {
				return "partial-star";
			} else {
				return "empty-star";
			}
		}
	},

	mounted() {
		const cod_materia = this.$route.params.cod;
		console.log(cod_materia);
		obterMateriaByID(cod_materia)
			.then((materia) => {
				this.materia = materia;
				console.log(this.materia);
			})
			.catch((erro) => {
				console.error("Erro ao obter matéria:", erro);
			});
	},
};
</script>


<style scoped>
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
	overflow: hidden;
}

.container-frame {
	height: 100%;
	background-color: #f5f5f5;
	overflow: hidden;
}

.container {
	height: calc(100% - 60px);
	width: calc(100% - 60px);
	display: grid;
	grid-template-columns: 0.7fr 1fr 0.7fr;
	gap: 40px;
	padding: 40px;
	background: -webkit-linear-gradient(90deg, hsla(209, 63%, 17%, 1) 0%, hsla(183, 71%, 16%, 1) 100%);
}

.container-avaliacao {
	background-color: #f5f5f5;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	overflow: auto;
	padding-bottom: 0px;
	margin-bottom: 20px;
}

.five-estrelas {
	display: flex;
	align-items: center;
	gap: 5px;
}

.five-estrelas img.estrela {
	width: 30px;
	/* Ajuste para estrelas maiores */
	height: 30px;
}

.five-estrelas.estrelas-metricas img.estrela {
	width: 20px;
	/* Ajuste para estrelas menores */
	height: 20px;
}


.metricas-ajustes {
	display: flex;
	flex-direction: column;
}



.container-notas-gerais,
.container-professores {
	display: flex;
	flex-direction: column;
	gap: 40px;
	overflow: auto;
	margin-bottom: 20px;
}

.section {
	background-color: white;
	padding: 20px;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#given-subjects {
	display: flex;
	justify-content: center;
	padding-bottom: 0px;
}

#given-subjects {
	background-color: #f5f5f5;
	height: 100%;
}

#general-reviews h3 {
	font-size: 2.17em;
}

#general-reviews {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.avaliacoes-gerais-container {
	display: flex;
	flex-direction: column;
	justify-items: center;
	height: 100%;
}

#teacher-review {
	height: 100%;
	background-color: #f5f5f5;
	margin-right: 20px;
}

#teacher-review h3 {
	font-size: 2.17em;
	text-align: center;
}

.titulo-notas-gerais {
	height: 100%;
	background-color: #f5f5f5;
	padding-top: 20px;
	margin-right: 20px;
}

.titulo-notas-gerais h3 {
	font-size: 2.17em;
	text-align: center;
}

#avaliacoes {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.container-avaliacao {
	padding-top: 10px;
}

h3,
h2 {
	color: #4d4d4d;
	font-family: "Open Sans", sans-serif;
}

li,
p {
	font-family: Inter, sans-serif;
	font-size: 15px;
	color: #4d4d4d;

}

.full-star {
	filter: brightness(1);
	/* Estrela totalmente brilhante */
}

.partial-star {
	filter: brightness(0.5);
	/* Estrela meio brilhante */
}

.empty-star {
	filter: brightness(1) grayscale(1);
	/* Estrela apagada em cinza claro */
	opacity: 0.3;
}

/* CSS para o card de comentário */

/* CSS para o card de comentário */

.avaliacao {
	background-color: #f5f5f5;
	border-radius: 8px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	padding: 15px;
	margin-bottom: 20px;
}

#foto-de-usuario {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	height: fit-content;
}

#foto-de-usuario img {
	width: 40px;
	/* Tamanho da foto de perfil */
	height: 40px;
	/* Tamanho da foto de perfil */
	border-radius: 50%;
	/* Para tornar a imagem redonda */
	object-fit: cover;
}

#avaliacao-nome {
	font-size: 0.9rem;
	font-weight: bold;
	margin-bottom: 5px;
}

#avaliacao-codigo {
	font-size: 0.8rem;
	color: #666;
	margin-bottom: 10px;
}

#avaliacao-comentario {
	font-size: 0.9rem;
	color: #4d4d4d;
	margin-bottom: 10px;
}

#avaliacao-icons {
	display: flex;
	justify-content: space-between;
}

#like-container,
#dislike-container {
	display: flex;
	align-items: center;
	width: fit-content;
	/* Ajuste para o tamanho do conteúdo */
}

#like-icon,
#dislike-icon {
	width: 18px;
	/* Tamanho dos ícones de like e dislike */
	height: 18px;
	/* Tamanho dos ícones de like e dislike */
}
</style>
