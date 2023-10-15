import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import CabecalhoLink from 'componentes/CabecalhoLink';
import logo from './logo.png';
const Cabecalho = () => {

  return (
    <header className={styles.cabecalho}>
      <Link to="/" className={styles.cabecalho}>
        <img src={logo} alt="Logo do cinetag"></img>
      </Link>

      <nav>
        <CabecalhoLink to="./">
          Home
        </CabecalhoLink>
        <CabecalhoLink to="/favoritos">
          Favoritos
        </CabecalhoLink>
      </nav>
    </header >

  );
}

export default Cabecalho;