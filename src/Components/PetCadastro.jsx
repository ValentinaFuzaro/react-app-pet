import React,{ useState } from 'react'

export default function PetCadastro() {

    const [cadastro, setCadastro] = useState([
        {
          "nome" : "Tobby",
          "idade" : "2 anos",
          "raca":"Lulu da Pomerania",
          "tamanho":"40cm",
          "nomeDono":"Joseffe",
          "telefoneDono":"11 99999-9999",
          "imagemPet":"imgPet",
          "observacoes":"Muito Bagunceiro"
        }
      ])

      const [nCadastro, setNCadastro] = useState({"nome":"","idade":"","raca":"","tamanho":"","nomeDono":"","telefoneDono":"","imagemPet":"","observacoes":""})

      const addCadastro = (e)=>{
        e.preventDefault()
        setNCadastro({"titulo":"","setor":"","descricao":""})
        setCadastro([...cadastro, nCadastro])
      }


    const captura = (e)=>{
      e.preventDefault()

      const{ name , value } = e.target

      if(name === "nome"){
        setNCadastro({"nome":value,"idade":nCadastro.idade,"raca":nCadastro.raca,"tamanho":nCadastro.tamanho,"nomeDono":nCadastro.nomeDono,"telefoneDono":nCadastro.telefoneDono,"imagemPet":nCadastro.imagemPet,"observacoes":nCadastro.observacoes})
      }else if(name === "idade"){
        setNCadastro({"nome":nCadastro.nome,"idade":value,"raca":nCadastro.raca,"tamanho":nCadastro.tamanho,"nomeDono":nCadastro.nomeDono,"telefoneDono":nCadastro.telefoneDono,"imagemPet":nCadastro.imagemPet,"observacoes":nCadastro.observacoes})
      }else if(name === "raca"){
        setNCadastro({"nome":nCadastro.nome,"idade":nCadastro.idade,"raca":value,"tamanho":nCadastro.tamanho,"nomeDono":nCadastro.nomeDono,"telefoneDono":nCadastro.telefoneDono,"imagemPet":nCadastro.imagemPet,"observacoes":nCadastro.observacoes})
      }else if(name === "tamanho"){
        setNCadastro({"nome":nCadastro.nome,"idade":nCadastro.idade,"raca":nCadastro.raca,"tamanho":value,"nomeDono":nCadastro.nomeDono,"telefoneDono":nCadastro.telefoneDono,"imagemPet":nCadastro.imagemPet,"observacoes":nCadastro.observacoes})
      }else if(name === "nomeDono"){
        setNCadastro({"nome":nCadastro.nome,"idade":nCadastro.idade,"raca":nCadastro.raca,"tamanho":nCadastro.tamanho,"nomeDono":value,"telefoneDono":nCadastro.telefoneDono,"imagemPet":nCadastro.imagemPet,"observacoes":nCadastro.observacoes})
      }else if(name === "telefoneDono"){
        setNCadastro({"nome":nCadastro.nome,"idade":nCadastro.idade,"raca":nCadastro.raca,"tamanho":nCadastro.tamanho,"nomeDono":nCadastro.nomeDono,"telefoneDono":value,"imagemPet":nCadastro.imagemPet,"observacoes":nCadastro.observacoes})
      }else if(name === "imagemPet"){
        setNCadastro({"nome":nCadastro.nome,"idade":nCadastro.idade,"raca":nCadastro.raca,"tamanho":nCadastro.tamanho,"nomeDono":nCadastro.nomeDono,"telefoneDono":nCadastro.telefoneDono,"imagemPet":value,"observacoes":nCadastro.observacoes})
      }else if(name === "observacoes"){
        setNCadastro({"nome":nCadastro.nome,"idade":nCadastro.idade,"raca":nCadastro.raca,"tamanho":nCadastro.tamanho,"nomeDono":nCadastro.nomeDono,"telefoneDono":nCadastro.telefoneDono,"imagemPet":nCadastro.imagemPet,"observacoes":value})
      }

    }

    const removerCadastro = (tar)=>{

        let lista = cadastro
  
        lista = lista.filter((t)=> t !== tar) 
        setCadastro(lista)
      }


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
