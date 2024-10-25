import { useContext } from "react"
import CardComunidade from "../../components/CardComunidade"
import { CriarCardComunidadeContext } from "../../context/CriaCardComunidadeContext"

const Comunidade = () => {
     const {posts} = useContext(CriarCardComunidadeContext)
     return(
          <section style={{display: 'flex', justifyContent: 'center' ,flexWrap: 'wrap', gap: '50px 120px', marginTop: '30px'}}>
               {posts.map((post, index) => (
                    <CardComunidade key={index} 
                       titulo={post.tituloProjeto}
                       descricao={post.descricaoProjeto}
                       cor={post.corDeFundo}
                       codigo={post.codigoProjeto} 
                    />
               ))}
               
          </section>
          
     )

}

export default Comunidade