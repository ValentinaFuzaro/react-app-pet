import React from 'react'
import { DivFormPetCadastro } from '../style/styled'

export default function FormPetCadastro(props) {

  return (
      <DivFormPetCadastro>
          <form method="post" onSubmit={props.add}>
              <div>
                  <label>Nome </label>
                  <input type="text" name="nome" placeholder='Digite o nome do seu pet' value={props.cadastro.nome} onChange={props.onChange}/>
              </div>
              <div>
                  <label>Idade </label>
                  <input type="text" name="idade" placeholder='Digite a idade do seu pet' value={props.cadastro.idade} onChange={props.onChange}/>
              </div>
              <div>
                  <label>Raça </label>
                  <input type="text "name="raca" placeholder='Digite a raça do seu pet' value={props.cadastro.raca} onChange={props.onChange}/>
              </div>
              <div>
                  <label>Tamanho </label>
                  <input type="text "name="tamanho" placeholder='Coloque a altura seu pet' value={props.cadastro.tamanho} onChange={props.onChange}/>
              </div>
              <div>
                  <label>Nome do dono </label>
                  <input type="text "name="nomeDono" placeholder='Coloque o nome do dono' value={props.cadastro.nomeDono} onChange={props.onChange}/>
              </div>
             
              <div>
                  <label>Telefone do dono </label>
                  <input type="text "name="telefoneDono" placeholder='Digite o telefone do dono' value={props.cadastro.telefoneDono} onChange={props.onChange}/>
              </div>
              <div>
                  <label>Imagem do pet </label>
                  <input type="file"name="imagemPet" value={props.cadastro.imagemPet} onChange={props.onChange}/>
              </div> 
              <div>
                  <label>Observações </label>
                  <textarea name="observacoes" cols="30" rows="5" value={props.cadastro.observaçoes} onChange={props.onChange} />
              </div> 
              <div> 
                  <button type="submit">Cadastrar</button>
              </div>
          </form>
      </DivFormPetCadastro>
    )
  }
