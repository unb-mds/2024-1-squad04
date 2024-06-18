import { getMateriasByID } from "@/repositories/materias/obterMaterias";

export async function obterMateriasByID(cod_materia){ //chama o repositories e obtem as informações da api
    try{
        const materia = await getMateriasByID(cod_materia);
        return materia;

    } catch (error){
        console.error('Erro ao obter materia', error);
    }
}

