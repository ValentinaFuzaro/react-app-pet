import React from 'react'

export default function PetCadastro() {
  return (
      <div>
          <form method="post">
              <div>
                  <label>Nome </label>
                  <input type="text" name="titulo"/>
              </div>
              <div>
                  <label>Idade </label>
                  <input type="text" name="setor"/>
              </div>
              <div>
                  <label>Raça </label>
                  <input type="text "name="descricao"></input>
              </div>
              <div>
                  <label>Tamanho </label>
                  <input type="text "name="descricao"></input>
              </div>
              <div>
                  <label>Nome do dono </label>
                  <input type="text "name="descricao"></input>
              </div>
             
              <div>
                  <label>Telefone do dono </label>
                  <input type="text "name="descricao"></input>
              </div>
              <div>
                  <label>Imagem do pet </label>
                  <input type="text "name="descricao"></input>
              </div> 
              <div>
                  <label>Observações </label>
                  <textarea name="observacoes" cols="30" rows="5"></textarea>
              </div> 
              <div> 
                  <button type="submit">Adicionar</button>
              </div>
          </form>
      </div>
    )
  }
