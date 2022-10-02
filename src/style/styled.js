import styled from 'styled-components'

  export const DivCadastro = styled.div`
  width: 100%;
  min-height: 85vh;
  padding: 20px;
  background-color: #A4FFC9; 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  `
  
  export const DivPetCadastro = styled.div`
    background-color: #F3BDFF;
    border: solid 1px #F3BDFF;
    box-shadow: 5px 5px 5px #fff;
    padding: 5px;
    text-align: center;
    width: 300px;
    height: 360px;
    margin: 10px;
  h2,
  p {
    padding-bottom: 1px;
  }
  button{
      padding: 10px 50px;
      align-self: start;
      text-align: center;
      color: orange;
    }
`

export const DivFormPetCadastro = styled.div`
    background-color: #FFb264;
    border: solid 1px #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    width: 400px;
    height: 400px;
    margin: 1px;
    p {
      padding-bottom: 50px;
      margin-top: 5px;
    }
    label{
      color: black;
      text-align: left;
    }
    input{
      text-align: center;
    }
    input[type=text] {
      width: 50%;
      text-align: center;
      padding: 5px 5px;
      margin: 2px 0px;
    }
    input[type=observarcoes] {
      width: 5%;
      text-align: center;
      margin: 2px 0px;
    }
    button{
      padding: 10px 50px;
      align-self: start;
      text-align: center;
      color: black;
    }
`