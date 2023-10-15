import styles from './Card.module.css';
import iconeFavoritado from './favoritado.png'
import iconeDesFavoritado from './desfavoritado.png'
import { useFavoritoContext } from 'contextos/Favoritos';
import { Link } from 'react-router-dom';

const Card = ({ capa, titulo, id }) => {

    const {favorito, adicionarFavorito} = useFavoritoContext();
    const ehFavorito = favorito.some((video) => video.id === id);
    const icone = ehFavorito ? iconeFavoritado : iconeDesFavoritado;

   
    return (
        
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <Link className={styles.link} to={`/${id}`}>
            <h2>{titulo}</h2>
            <img src={icone} alt="Favoritar" 
            className={styles.favoritar}
            onClick={() => adicionarFavorito({id, titulo, capa})} />
            </Link>

        </div>
    )
}

export default Card;