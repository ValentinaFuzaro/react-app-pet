import React from 'react'
import { DivPetCadastro } from '../style/styled';

export default function Cadastro(props) {

    return (
        <DivPetCadastro>
            <h2>{props.cadastro.nome}</h2>
            <p>{props.cadastro.idade}</p>
            <p>{props.cadastro.raca}</p>
            <p>{props.cadastro.tamanho}</p>
            <p>{props.cadastro.nomeDono}</p>
            <p>{props.cadastro.telefoneDono}</p>
            <p>{props.cadastro.imagemPet}</p>
            <p>{props.cadastro.observacoes}</p>
            <button onClick={props.remover}>APAGAR</button>
        </DivPetCadastro>
    );
}