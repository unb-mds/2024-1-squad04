<template>
	<div class="profile-wraper">
		<div class="card-profile">
			<div class="profile-picture-and-profile-name">
				<div class="profile-picture-wraper">
					<img
						src="../assets/provisorio/foto-perfil-navbar-provisoria.svg"
						alt=""
						class="profile-picture"
					/>
				</div>
				<div class="profile-name-and-profile-course">
					<h2 class="profile-name">{{ userInfo.nome }}</h2>
					<p class="profile-course">{{ userInfo.curso }}</p>
				</div>
			</div>
			<div class="quantity-avaliations">
				<div class="professor-avaliations">
					<h2 class="quantity-professor">
						{{ userInfo.quantidade_professores_avaliados }}
					</h2>
					<p>Professores avaliados</p>
				</div>
				<div class="course-avaliations">
					<h2 class="quantity-course">
						{{ userInfo.quantidade_materias_avaliadas }}
					</h2>
					<p>Matérias avaliadas</p>
				</div>
			</div>
			<div class="infos">
				<h2>Meus dados</h2>
				<div class="data">
					<p><span>Email:</span> {{ userInfo.email }}</p>
					<p><span>Matrícula:</span> {{ userInfo.matricula }}</p>
					<p><span>Universidade:</span> UNB Faculdade do Gama</p>
				</div>
			</div>
			<div class="log-out-and-edit">
				<button class="edit">Editar</button>
				<button class="log-out" @click="handleLogOut">
					<img src="../assets/icons/perfil/log-out-icon.svg" alt="" />Log-out
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { getInfoUserProfileService } from "@/service/usuario/getInfoUserProfile";
export default {
	name: "ProfilePage",
	data() {
		return {
			userInfo: {},
		};
	},

	methods: {
		handleLogOut() {
			sessionStorage.setItem("matricula", "");
			window.location.reload();
		},
	},
	mounted() {
		getInfoUserProfileService()
			.then((userInfo) => {
				this.userInfo = userInfo;
				console.log(this.userInfo);
			})
			.catch((erro) => {
				console.error("Erro ao obter meus dados", erro);
			});
	},
};
</script>

<style scoped>
.profile-wraper {
	background: hsla(209, 63%, 17%, 1);
	background: linear-gradient(
		90deg,
		hsla(209, 63%, 17%, 1) 0%,
		hsla(183, 71%, 16%, 1) 100%
	);
	background: -moz-linear-gradient(
		90deg,
		hsla(209, 63%, 17%, 1) 0%,
		hsla(183, 71%, 16%, 1) 100%
	);
	background: -webkit-linear-gradient(
		90deg,
		hsla(209, 63%, 17%, 1) 0%,
		hsla(183, 71%, 16%, 1) 100%
	);
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-decoration: white;
	height: 100vh;
	min-height: fit-content;
}

.card-profile {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 80%;
	max-width: 700px;
	height: fit-content;
	background-color: rgb(245, 245, 245);
	border-radius: 40px;
	box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.055);
	gap: 5vh;
}

.profile-picture-and-profile-name {
	width: 80%;
	margin-top: 5vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 25px;
}

.profile-picture-wraper {
	padding: 2.4px;
	width: 16rem;
	height: 16rem;
	border-radius: 50%;
	background: rgb(8, 54, 80);
	background: linear-gradient(150deg, #1b5994 40%, #0a745b 60%);
	display: flex;
	align-items: center;
	justify-content: center;
}

.profile-picture {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
}

.profile-name-and-profile-course {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
}

.profile-name {
	font-family: "Open Sans", sans-serif;
	font-size: 3.4rem;
	font-weight: 700;
	color: #0a745b;
	margin: 0;
}

.profile-course {
	font-family: "Open Sans", sans-serif;
	font-size: 1.6rem;
	font-weight: 500;
	color: #474747;
	margin: 5px;
}

.quantity-avaliations {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
}

.professor-avaliations {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 40%;
	border-right: solid 1px #47474760;
}

.course-avaliations {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 40%;
}

.quantity-professor,
.quantity-course {
	font-family: "Open Sans", sans-serif;
	font-size: 2.4rem;
	font-weight: 600;
	color: #0a745b;
	margin: 0;
}

.quantity-avaliations p {
	font-family: "Open Sans", sans-serif;
	font-size: 1.4rem;
	font-weight: 500;
	color: #474747;
	margin: 5px;
}

.infos {
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 3vh;
}

.data {
	display: flex;
	flex-direction: column;
}

.infos h2 {
	font-family: "Open Sans", sans-serif;
	font-size: 3rem;
	font-weight: 700;
	color: #525252;
	margin: 0;
}

.infos span {
	font-family: "Open Sans", sans-serif;
	font-size: 1.8rem;
	font-weight: 600;
	color: #8a8a8a;
	margin-top: 5px;
}

.infos p {
	font-family: "Open Sans", sans-serif;
	font-size: 1.8rem;
	font-weight: 500;
	color: #646464;
	margin-top: 5px;
}

.log-out-and-edit {
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 50px;
}

.log-out {
	border: none;
	width: 48%;
	display: flex;
	padding: 14px 0px 14px 0;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	color: #0a745b;
	gap: 10px;
	font-size: 1.8rem;
	font-family: "Open Sans", sans-serif;
	background: none;
	border: solid 1px #0a745b;
	cursor: pointer;
}

.log-out img {
	width: 2rem;
}

.edit {
	border: none;
	width: 48%;
	display: flex;
	padding: 14px 0px 14px 0;
	border-radius: 10px;
	background-color: #0a745b;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 1.8rem;
	font-family: "Open Sans", sans-serif;
}
</style>
