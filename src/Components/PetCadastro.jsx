import React from 'react'

export default function PetCadastro(props) {
    
    return (
        <div>
            <h2>{props.cadastro.nome}</h2>
            <p>{props.cadastro.idade}</p>
            <p>{props.cadastro.raca}</p>
            <p>{props.cadastro.tamanho}</p>
            <p>{props.cadastro.nomeDono}</p>
            <p>{props.cadastro.telefoneDono}</p>
            <p>{props.cadastro.imagemPet}</p>
            <p>{props.cadastro.observacoes}</p>
            <button onClick={props.remover}><h1>APAGAR</h1></button>
        </div>
    );
}
