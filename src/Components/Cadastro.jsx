import React,{ useState } from 'react'
//import PetCadastro from './PetCadastro'
import { DivCadastro } from '../style/styled'
import FormPetCadastro from '../Components/FormPetCadastro'


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

    const [nCadastro, setNCadastro] = useState({
      "nome":"",
      "idade":"",
      "raca":"",
      "tamanho":"",
      "nomeDono":"",
      "telefoneDono":"",
      "imagemPet":"",
      "observacoes":""
    })

    const addCadastro = (e)=>{
      e.preventDefault()
      setNCadastro({
        "titulo":"",
        "setor":"",
        "descricao":""
      })
      setCadastro([...cadastro, nCadastro])
    }

    const setChanges = (e)=>{
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
        const file = {
            fileContent: e.target.files[0],
            picture: URL.createObjectURL(e.target.files[0])
        }
        setNCadastro({"nome":nCadastro.nome,"idade":nCadastro.idade,"raca":nCadastro.raca,"tamanho":nCadastro.tamanho,"nomeDono":nCadastro.nomeDono,"telefoneDono":nCadastro.telefoneDono,"imagemPet":file.picture,"observacoes":nCadastro.observacoes})
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
        <DivCadastro>
            <FormPetCadastro 
                add={addCadastro}
                cadastro={cadastro}
                onChange={setChanges}
            />

            {cadastro.map((cad,i)=>
                <div key={i}>
                <h2>{cad.nome}</h2>
                <p>{cad.idade}</p>
                <p>{cad.raca}</p>
                <p>{cad.tamanho}</p>
                <p>{cad.nomeDono}</p>
                <p>{cad.telefoneDono}</p>
                <img alt='imagePet' src={cad.imagemPet}></img>
                <p>{cad.observacoes}</p>
                <button onClick={removerCadastro.bind(this,cad)}><h1>APAGAR</h1></button>
                </div>
            )}
        </DivCadastro>
    )
  }