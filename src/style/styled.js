import styled from 'styled-components'
 
  export const DivCadastro = styled.div`
  width: 100%;
  min-height: 85vh;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  `
  
  export const DivPetCadastro = styled.div`
  background-color : #ffb;
  border: solid 1px #333;
  box-shadow: 5px 5px 5px #333;
  padding: 20px;
  text-align: center;
  width: 350px;
  height: 200px;
  margin: 10px;
  h2,
  p {
    padding-bottom: 10px;
  }
`

export const DivFormPetCadastro = styled.div`
    //padding: 10px;
    //text-align: center;
    //width: 350px;
    //height: 200px;
    //margin: 80px;
    h2,
    p {
      padding-bottom: 5px;
      margin-top: 5px;
    },
    input[type=text] {
      width: 47%;
      padding: 10px 10px;
      margin: 2px 0px;
  }
`