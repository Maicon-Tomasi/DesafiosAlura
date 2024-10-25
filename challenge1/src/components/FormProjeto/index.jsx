import { useContext } from "react"
import styled from "styled-components"
import { TrocaCorContext } from "../../context/TrocaCorContext"
import { CriarCardComunidadeContext } from "../../context/CriaCardComunidadeContext"

const ContainerFormulario = styled.div`
     width: 100%;
     max-width: 600px;
     padding: 0 40px;
     color: white;
     font-weight: 400;

     @media screen and (max-width: 1300px){
         min-width: 600px;
     }

     @media screen and (max-width: 500px){
          min-width: 300px;
         padding: 0 1%;
     }
`

const FormEstilziado = styled.form`
     width: 100%;
     display: flex;
     flex-direction: column;

     @media screen and (max-width: 500px){
         align-items: flex-start;
         
     }

`

const InputEstilizado = styled.input`
     width: 100%;
     max-width: 300px;
     height: 56px;
     padding: 0 5px;
     background-color: #FFFFFF29;
     color: white;
     border-radius: 8px;
     border: none;
     margin-bottom: 15px;
     outline: none;

     @media screen and (max-width: 1300px) {
          max-width: 600px; /* Aumenta o tamanho do input */
     }

     
`

const TextareaEstilizado = styled.textarea`
     resize: vertical;
     width: 100%;
     max-width: 300px;
     height: 56px;
     padding: 10px 5px;
     background-color: #FFFFFF29;
     color: white;
     border-radius: 8px;
     border: none;
     outline: none;

     @media screen and (max-width: 1300px) {
          max-width: 600px; /* Aumenta o tamanho do textarea */
     }
`

const SelectEstilizado = styled.select`
     width: 100%;
     max-width: 300px;
     height: 56px;
     padding: 0 5px;
     color: #ffffff;
     background-color: #FFFFFF29;
     border-radius: 8px;
     border: none;
     margin-bottom: 15px;
     outline: none;

     option {
          color: black;
     }

     @media screen and (max-width: 1300px) {
          max-width: 600px; /* Aumenta o tamanho do select */
     }
`

const InputColorEstilizado = styled.input`
     width: 100%;
     max-width: 300px;
     height: 56px;
     background: none;
     border: 1px solid white;
     border-radius: 8px;

     @media screen and (max-width: 1300px) {
          max-width: 600px; /* Aumenta o tamanho do input de cor */
     }
`

const BotaoEstilizado = styled.button`
     width: 100%;
     max-width: 300px;
     height: 56px;
     margin-top: 10px;
     border-radius: 8px;
     border: none;
     background-color: #5081FB;
     color: white;
     cursor: pointer;
     transition: background-color 0.2s ease, transform 0.2s ease;

     &:active {
          background-color: #406ace; /* Cor mais escura ao clicar */
          transform: scale(0.98); /* Efeito de compressão do botão */
     }

     @media screen and (max-width: 1300px) {
          max-width: 600px; /* Aumenta o tamanho do botão */
     }
`


const FormProjeto = () => {

     const {cor, trocaCor} = useContext(TrocaCorContext);
     const {setTitulo, setDescricao, setLinguagem, postarCodigo} = useContext(CriarCardComunidadeContext);

     const handleColorChange = (e) => {
          trocaCor(e.target.value); 
        };

     const handleTituloChange = (e) => {
          setTitulo(e.target.value);
     };
      
     const handleDescricaoChange = (e) => {
          setDescricao(e.target.value);
     };

     const handleLinguagemChange = (e) => {
          setLinguagem(e.target.value);
     };
     
     const EnviaCodigo = (e)=> {
          e.preventDefault()
          postarCodigo()
     }

     return(
          <ContainerFormulario>
               <p>Seu projeto</p>

               <FormEstilziado>
                    <InputEstilizado onChange={handleTituloChange} type="text" placeholder="Nome do seu projeto" />
                    <TextareaEstilizado onChange={handleDescricaoChange} placeholder="Decrição do seu projeto"></TextareaEstilizado>

                    <p>Linguagem / Personalização</p>

                    <SelectEstilizado onChange={handleLinguagemChange}  defaultValue="">
                         <option value="" disabled hidden>
                              Selecione uma linguagem
                         </option>
                         <option value="JavaScript">javaScript</option>
                         <option value="C#">C#</option>
                         <option value="Java">Java</option> 
                         <option value="Php">PHP</option>
                    </SelectEstilizado>
                    <InputColorEstilizado value={cor} type="color" onChange={handleColorChange}/>

                    <BotaoEstilizado type="submit" onClick={EnviaCodigo}>Salvar Projeto</BotaoEstilizado>
               </FormEstilziado>

          </ContainerFormulario>
     )

}
export default FormProjeto