import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconEditor from './icon_code.svg';
import IconComunidade from './Vector.svg';
import { useEffect, useState } from 'react';

const AsideEstilizado = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin-top: 30px;
  margin-left: 10px;
  color: white;
`;

const OpcaoMenuContainer = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  opacity: ${(props) => (props.$isActive ? '1' : '0.7')};  /* Transient prop $isActive */
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin-right: 15px;
  padding: 5px;
  border-radius: 16px;
  background-color: ${(props) => (props.$isActive ? '#5081FB' : '#5081FB29')};  /* Transient prop $isActive */
`;

const SideBar = () => {
  const [activeOption, setActiveOption] = useState('/');
  const [largura, setLargura] = useState(window.innerWidth);

  const handleClick = (option) => {
    setActiveOption(option);  // Atualiza a opção ativa
  };

  useEffect(() => {
    const handleResize = () => {
      setLargura(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if(largura <= 1300){
    return null;
  }

  return (
    <AsideEstilizado>
        <h3 style={{ fontWeight: 400 }}>MENU</h3>

        <OpcaoMenuContainer
          to="/"
          $isActive={activeOption === '/'}  /* Passando como transient prop */
          onClick={() => handleClick('/')}
        >
          <IconDiv $isActive={activeOption === '/'}>
            <img src={IconEditor} alt="icone menu" />
          </IconDiv>
          <p>Editor de código</p>
        </OpcaoMenuContainer>

        <OpcaoMenuContainer
          to="/comunidade"
          $isActive={activeOption === '/comunidade'}  
          onClick={() => handleClick('/comunidade')}
        >
          <IconDiv $isActive={activeOption === '/comunidade'}>
            <img src={IconComunidade} alt="icone menu" />
          </IconDiv>
          <p>Comunidade</p>
        </OpcaoMenuContainer>
    </AsideEstilizado> 
  );
};

export default SideBar;
