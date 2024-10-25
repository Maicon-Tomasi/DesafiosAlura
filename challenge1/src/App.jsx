import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Editor from './pages/EditorDeCodigo'
import Cabecalho from './components/Cabecalho'
import EstilosGlobais from './components/EstilosGlobais'
import SideBar from './components/SideBar'
import styled from 'styled-components'
import Comunidade from './pages/Comunidade'
import { TrocaCorProvider } from './context/TrocaCorContext'
import { CriarCardComunidadeContext, CriarCardComunidadeProvider } from './context/CriaCardComunidadeContext'

const Layout = styled.div`
  display: flex;
`

const Content = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100%; 

`;

function App() {


  return (

    <BrowserRouter>
      <EstilosGlobais />
        <Cabecalho />
        <Layout>
          <SideBar />
            <Content>
              <TrocaCorProvider>
                <CriarCardComunidadeProvider>
                  <Routes>
                    <Route path='/' element={<Editor />}/>
                    <Route path='/comunidade' element={<Comunidade />}/>
                  </Routes>
                </CriarCardComunidadeProvider>
              </TrocaCorProvider>
            </Content>
        </Layout>
    </BrowserRouter>

  )
}

export default App
