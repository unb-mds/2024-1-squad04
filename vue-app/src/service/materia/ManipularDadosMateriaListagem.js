import { getMateriasListagem } from "@/repositories/materias/obterMaterias";

export async function obterMaterias(){ //chama o repositories e obtem as informações da api
    try{
        const materias = await getMateriasListagem();
        return materias;

    } catch (error){
        console.error('Erro ao obter materias', error);
    }
}


