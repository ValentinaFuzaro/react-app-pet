import React from 'react'
import { DivFormPetCadastro } from '../style/styled'

export default function FormPetCadastro(props) {

  return (
      <DivFormPetCadastro>
            <h3>--------------- Cadastre seu PET aqui! ---------------</h3>
            <form method="post" onSubmit={props.addCadastro}>
              <div>
                  <label>Nome: </label>
                  <input type="text" name="nome" 
                  placeholder='Como o pet se chama?' 
                  value={props.cadastro.nome} 
                  onChange={props.onChange}/>
              </div>
              <div>
                  <label>Idade: </label>
                  <input type="text" name="idade" 
                  placeholder='Digite a idade do bichinho' 
                  value={props.cadastro.idade} 
                  onChange={props.onChange}/>
              </div>
              <div>
                  <label>Raça: </label>
                  <input type="text" name="raca" 
                  placeholder='Qual a raça do seu pet?' 
                  value={props.cadastro.raca} 
                  onChange={props.onChange}/>
              </div>
              <div>
                  <label>Tamanho: </label>
                  <input type="text" name="tamanho" 
                  placeholder='Qual é a altura do pet?' 
                  value={props.cadastro.tamanho} 
                  onChange={props.onChange}/>
              </div>
              <div>
                  <label>Nome do dono: </label>
                  <input type="text" name="nomeDono" 
                  placeholder='O pet manda em quem?' 
                  value={props.cadastro.nomeDono} 
                  onChange={props.onChange}/>
              </div>
             
              <div>
                  <label>Seu telefone: </label>
                  <input type="text" name="telefoneDono" 
                  placeholder='Digite o telefone do dono' 
                  value={props.cadastro.telefoneDono} 
                  onChange={props.onChange}/>
              </div>
              <div>
                  <label>Imagem do pet: </label>
                  <input type="file" name="imagemPet"
                  value={props.cadastro.imagemPet} 
                  onChange={props.onChange} />
              </div> 
              <div>
                  <label>Observações </label>
                  <textarea name="observacoes" cols="15" rows="5" 
                  value={props.cadastro.observaçoes} onChange={props.onChange} />
              </div> 
              <div> 
                  <button type="submit">Cadastrar</button>
              </div>
            </form>
      </DivFormPetCadastro>
    )
  }
