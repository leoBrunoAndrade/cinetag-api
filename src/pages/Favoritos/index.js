import Titulo from 'componentes/Titulo';
import Banner from 'componentes/Banner';
import { useFavoritoContext } from 'contextos/Favoritos';
import Card from 'componentes/Card';
import styles from "./Favoritos.module.css";

const Favoritos = () => {

  const {favorito} = useFavoritoContext();
    return (
      <>
      <Banner imagem="favoritos" />
      <Titulo titulo="Meus Favoritos" />
      <section className={styles.container}>
        {favorito.map(fav => <Card {...fav} key={fav.id}/>)}
      </section>
    </>
    )
}

export default Favoritos;