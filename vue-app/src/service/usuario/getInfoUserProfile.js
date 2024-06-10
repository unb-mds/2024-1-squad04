import { getInfoUserProfile } from "@/repositories/usuario/obterInformacoesPerfilUsuario";
import axios from "axios";
import CryptoJS from "crypto-js";

export async function getInfoUserProfileService() {
	try {
		const responsekey = await axios.get("http://localhost:3000/chave");
		const key = responsekey.data;

		const encryptedMatricula = sessionStorage.getItem("matricula");
		if (!encryptedMatricula) {
			throw new Error("Matricula not found in sessionStorage");
		}

		const decryptedBytes = CryptoJS.AES.decrypt(encryptedMatricula, key);
		const matriculadec = decryptedBytes.toString(CryptoJS.enc.Utf8);
		const matricula_url = parseInt(matriculadec, 10);

		const userInformationProfile = await getInfoUserProfile(matricula_url);

		// Return the first element of the array directly
		return userInformationProfile[0];
	} catch (error) {
		console.error("Erro ao buscar minhas informações", error);
		throw error;
	}
}
