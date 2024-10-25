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
`

const DescricaoCard = ({titulo, descricao}) => {

     return(
          <DivDescricaoCard>
               <h2 style={{maxWidth: '500px', whiteSpace: 'normal', overflowWrap: 'break-word'}}>{titulo}</h2>
               <p style={{maxWidth: '300px', whiteSpace: 'normal', overflowWrap: 'break-word'}}>{descricao}</p>

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