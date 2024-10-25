import styled from "styled-components"

const ButtonEstilizado = styled.button`
     width: 100%;
     margin-top: 20px;
     height: 56px;
     border: none;
     border-radius: 8px;
     background-color: #5081FB14;
     color: white;
     cursor: pointer;
`

const BtnHighlight = () => {
     return(
          <ButtonEstilizado>Visualizar com o highlight</ButtonEstilizado>
     )


}

export default BtnHighlight