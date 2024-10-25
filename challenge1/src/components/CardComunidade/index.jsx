import DescricaoCard from "../DescricaoCard"
import CodeEditor from "../EditorDeCodigo"


const CardComunidade = ({titulo, descricao, codigo, cor}) =>{

     return(
          <div style={{ marginBottom: '20px'}}>
               <CodeEditor corDeFundo={cor} codigoComunidade={codigo} comunidade={true}/>
               <DescricaoCard titulo={titulo} descricao={descricao} />
          </div>

     )

}

export default CardComunidade