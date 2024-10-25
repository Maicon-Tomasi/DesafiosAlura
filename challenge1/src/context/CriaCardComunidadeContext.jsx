import { createContext, useContext, useEffect, useState } from "react";
import { TrocaCorContext } from "./TrocaCorContext";


export const CriarCardComunidadeContext = createContext();


export function CriarCardComunidadeProvider({children}){
     const {cor} = useContext(TrocaCorContext);
     const [titulo, setTitulo] = useState('');
     const [descricao, setDescricao] = useState('');
     const [linguagem, setLinguagem] = useState('');
     const [codigo, setCodigo] = useState('');

     const [allPosts, setAllPosts] = useState([
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
     
     const [posts, setPosts] = useState(allPosts);

     function postarCodigo(){

          const novosPosts =  {
                    tituloProjeto: titulo,
                    descricaoProjeto: descricao,
                    linguagemProjeto: linguagem,
                    corDeFundo: cor,
                    codigoProjeto: codigo
               }
          

               setAllPosts((prevAllPosts) => [...prevAllPosts, novosPosts]);
               setPosts((prevPosts) => [...prevPosts, novosPosts]);
     }

     function buscaPost(titulo) {
          // If search is empty, reset posts to allPosts
          if (titulo === '') {
               setPosts(allPosts);
          } else {
               setPosts(allPosts.filter((post) => post.tituloProjeto.includes(titulo)));
          }
     }

     useEffect(()=>{
          console.log("Postados", posts)
     },[posts])

     return (
          <CriarCardComunidadeContext.Provider value={{ posts, setTitulo, setDescricao, setLinguagem, setCodigo, postarCodigo, buscaPost }}>
            {children}
          </CriarCardComunidadeContext.Provider>
        );
     
}