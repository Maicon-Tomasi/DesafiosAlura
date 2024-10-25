import styled from 'styled-components';
import Logo from './logoAlura.png';
import AvatarComponent from '../Avatar';
import { BarsOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const HeaderEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 20px;  
`;

const ImgEstilizada = styled.img`
  width: 100%;
  max-width: 200px;
`;

const DivInputPesquisa = styled.div`
  flex: 1;  /* Permite que a barra de pesquisa ocupe o espaço disponível */
  max-width: 800px;
  margin-right: 20px;  /* Espaçamento entre a barra de pesquisa e o ícone/avatar */

  @media screen and (max-width: 1300px) {
    max-width: 500px;
  }

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const SearchEstilizado = styled.input`
  width: 100%;
  background-color: #FFFFFF29;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 20px;
  outline: none;

  @media screen and (max-width: 768px) {
    padding: 15px;  /* Reduzir padding em telas menores */
  }
`;

const IconeMenu = styled(BarsOutlined)`
  font-size: 28px;
  color: white;
  margin-left: 20px;  /* Espaçamento para evitar colidir com a barra de pesquisa */

`;

const Cabecalho = () => {
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setLargura(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HeaderEstilizado>
      <ImgEstilizada src={Logo} />

      <DivInputPesquisa>
        <SearchEstilizado type='text' placeholder='Busque por algo' />
      </DivInputPesquisa>
      
      {largura <= 1300 ?  
        <IconeMenu /> : 
        <AvatarComponent /> 
      }
    </HeaderEstilizado>
  );
};

export default Cabecalho;
