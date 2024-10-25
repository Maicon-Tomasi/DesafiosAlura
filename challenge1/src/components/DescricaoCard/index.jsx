import Curtida from './iconeCurtida.svg'
import Comentario from './iconeComentario.svg'
import styled from 'styled-components'
import AvatarComponent from '../Avatar'

const DivDescricaoCard = styled.div`
     width: 100%;
     max-width: 520px;
     padding: 5px 39px;
     border-radius: 8px;
     background-color: #00000029;
     color: white;
     font-weight: 400;

     h2{
          max-width: 500px;
          white-space: normal;
          overflow-wrap: break-word;
     }

     p{
          max-width: 300px;
          white-space: normal;
          overflow-wrap: break-word;
     }

     @media screen and (max-width: 500px){
          max-width: 300px;
     }

`

const DescricaoCard = ({titulo, descricao}) => {

     return(
          <DivDescricaoCard>
               <h2>{titulo}</h2>
               <p>{descricao}</p>

               <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
                         <img src={Curtida} alt="icone curtida" />
                         <span>8</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
                         <img src={Comentario} alt="icone comentario" />
                         <span>8</span>
                    </div>

                    <div style={{ marginLeft: 'auto'}}>
                         <AvatarComponent />
                    </div>
               </div>
          </DivDescricaoCard>
     )

}

export default DescricaoCard