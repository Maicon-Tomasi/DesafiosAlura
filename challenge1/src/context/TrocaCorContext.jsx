import { createContext, useState } from "react";

export const TrocaCorContext = createContext();

export function TrocaCorProvider({ children }){
     const [cor, setCor] = useState("#ffffff")

     const trocaCor = (novaCor) =>{
          setCor(novaCor)
     }

     return (
          <TrocaCorContext.Provider value={{ cor, trocaCor }}>
            {children}
          </TrocaCorContext.Provider>
        );
}

