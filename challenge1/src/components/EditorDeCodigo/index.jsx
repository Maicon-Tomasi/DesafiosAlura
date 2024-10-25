import React, { useContext } from 'react';
import Editor from '@monaco-editor/react';
import styled from 'styled-components';
import { TrocaCorContext } from '../../context/TrocaCorContext';
import { CriarCardComunidadeContext } from '../../context/CriaCardComunidadeContext';

// Usando transient props ($comunidade) para evitar que sejam passadas para o DOM
const ContainerEditor = styled.div`
  display: flex;
  justify-content: center;
  width: ${(props) => (props.$comunidade ? '520px' : '800px')};  /* Usa booleano */
  height: ${(props) => (props.$comunidade ? '400px' : '366px')};  /* Usa booleano */
  background-color: ${(props) => (props.$comunidade ? props.$corDeFundo : props.cor)};
  padding: ${(props) => (props.$comunidade ? '20px 40px' : '20px 10px')};
  border-radius: 8px;

  @media screen and (max-width: 1500px){
    width: ${(props) => (props.$comunidade ? '520px' : '600px')};  /* Usa booleano */
  }

  @media screen and (max-width: 500px){
    width: ${(props) => (props.$comunidade ? '300px' : '343px')};  /* Usa booleano */
  }


`;

const DivEditor = styled.div`
  width: 100%;
  max-width: 730px;
  min-height: ${(props) => (props.$comunidade ? '200px' : '300px')};  /* Usa booleano */
  background-color: #1e1e1e;
  padding: 10px;
  border-radius: 10px;

  @media screen and (max-width: 1500px){
    max-width: 500px;
  }

  @media screen and (max-width: 500px){
    max-width: 279px;
  }

`;

const DivBullet = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const CodeEditor = ({corDeFundo, codigoComunidade, comunidade = false }) => {
  const { cor } = useContext(TrocaCorContext);
  const { setCodigo } = useContext(CriarCardComunidadeContext);

  const handleCodigoChange = (value) =>{
     setCodigo(value)
  }

  return (
    <ContainerEditor $comunidade={comunidade} cor={cor} $corDeFundo={corDeFundo}>  
      <DivEditor $comunidade={comunidade}>  
        <DivBullet>
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#FF5F56',
              marginRight: '5px',
            }}
          ></div>
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#FFBD2E',
              marginRight: '5px',
            }}
          ></div>
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#27C93F',
              marginRight: '5px',
            }}
          ></div>
        </DivBullet>
        <Editor
          defaultValue={comunidade ? codigoComunidade : '//Escreva aqui seu codigo'}
          theme="vs-dark"
          height="280px"
          onChange={(value) => handleCodigoChange(value)}
          options={{
            readOnly: comunidade,  // Editor em modo de leitura se comunidade for true
          }}
        />
      </DivEditor>
    </ContainerEditor>
  );
};

export default CodeEditor;
