import { createContext, useContext, useEffect, useState } from "react";
import { TrocaCorContext } from "./TrocaCorContext";


export const CriarCardComunidadeContext = createContext();


export function CriarCardComunidadeProvider({children}){
     const {cor} = useContext(TrocaCorContext);
     const [titulo, setTitulo] = useState('');
     const [descricao, setDescricao] = useState('');
     const [linguagem, setLinguagem] = useState('');
     const [codigo, setCodigo] = useState('');

     const [posts, setPosts] = useState([
          {
               tituloProjeto: "Projeto de teste 1",
               descricaoProjeto: "descricao",
               linguagemProjeto: "linguagem",
               corDeFundo: "#f4f4f4",
               codigoProjeto: "//escreva aqui seu código"
          },
          {
               tituloProjeto: "Projeto de teste 2",
               descricaoProjeto: "descricao",
               linguagemProjeto: "linguagem",
               corDeFundo: "#f4f4f4",
               codigoProjeto: "//escreva aqui seu código"
          }
     ]);
     
     function postarCodigo(){

          const novosPosts =  {
                    tituloProjeto: titulo,
                    descricaoProjeto: descricao,
                    linguagemProjeto: linguagem,
                    corDeFundo: cor,
                    codigoProjeto: codigo
               }
          

          setPosts((prevPosts) => [...prevPosts, novosPosts]);
     }

     useEffect(()=>{
          console.log("Postados", posts)
     },[posts])

     return (
          <CriarCardComunidadeContext.Provider value={{ posts, setTitulo, setDescricao, setLinguagem, setCodigo, postarCodigo }}>
            {children}
          </CriarCardComunidadeContext.Provider>
        );
     
}