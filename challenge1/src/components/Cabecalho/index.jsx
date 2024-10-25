import styled from 'styled-components';
import Logo from './logoAlura.png';
import AvatarComponent from '../Avatar';
import { Link } from 'react-router-dom';
import { BarsOutlined } from '@ant-design/icons';
import { useContext, useEffect, useState } from 'react';
import { CriarCardComunidadeContext } from '../../context/CriaCardComunidadeContext';


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
  position: relative;
  z-index: 1;
`;

const DivMenuMobile = styled.div`
  width: 100%;
  position: absolute;
  left: -17px;
  top: 100px;
  background-color: #051D3B;
  z-index: 2;

  ul{
    text-align: center;
    list-style-type: none;
    margin-bottom: 10px;
  }
  li {
    margin-bottom: 15px; /* Espaçamento entre as opções */
  }

  a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 10px 0;
    border-bottom: 1px solid white;
    width: 100%;
  }

    `

const Cabecalho = () => {
  const [largura, setLargura] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false)
  const [busca, setBusca] = useState('')

  const {buscaPost} = useContext(CriarCardComunidadeContext)

  const abreFechaMenu = () => {
    setMenu(!menu);
  }

  const changeSearch = (e) =>{
    const valor = e.target.value;
    setBusca(valor);
    buscaPost(valor)
  }

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
        <SearchEstilizado value={busca} onChange={changeSearch} type='text' placeholder='Busque por algo' />
      </DivInputPesquisa>
      
      {largura <= 1300 ?  
        <IconeMenu onClick={abreFechaMenu}/> : 
        <AvatarComponent /> 
      }

      {menu ? 
        <DivMenuMobile>
            <nav>
              <ul>
                <li><Link to='/'>Editor De Código</Link></li>
                <li><Link to='/comunidade'>Comunidade</Link></li>
              </ul>
            </nav>
        </DivMenuMobile>
      : ''}
    </HeaderEstilizado>
  );
};

export default Cabecalho;
