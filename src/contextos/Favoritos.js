import { createContext, useState, useContext } from "react";


export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

//childer - O(s) componentes que irão prover parâmetros, estados
export const FavoritosProvider = ({ children }) => {
  const [favorito, setFavorito] = useState([]);

  return (

    //childer - Os valores que irão ser compartilhados
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>

  );





}

export const useFavoritoContext = () => {

  const { favorito, setFavorito } = useContext(FavoritosContext);


  function adicionarFavorito(novoFavorito) {
    // Caso exista algum favorito com o mesmo id na lista
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);

    }

    // Caso exista algum favorito com o mesmo id na lista. Cria outra lista, sem aquele determinado id
    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(novaLista);
  }

  //Aqui são os objetos e funções que serão expostas pelo hook useFavoritoContext
  return {
    favorito,
    adicionarFavorito
  }


}