import styled from "styled-components"
import BtnHighlight from "../../components/BtnHighlight"
import CodeEditor from "../../components/EditorDeCodigo"
import FormProjeto from "../../components/FormProjeto"

const SectionEstilazada = styled.section`
     display: flex;
     justify-content: center;
     margin-top: 30px;
     flex-wrap: wrap;
`

const Editor = () => {

     return(
          <SectionEstilazada>
               
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                         <CodeEditor  />
                         <BtnHighlight />
                    </div>
                    <div>
                         <FormProjeto />  
                    </div>

          </SectionEstilazada>
     )
}

export default Editor