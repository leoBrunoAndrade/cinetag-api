import { Link } from 'react-router-dom';
import styles from './CabecalhoLink.module.css';
const CabecalhoLink = ({to, children}) => {

  return (
   
    <Link to={to} className={styles.link}>
      {children}
    </Link>



  );
}

export default CabecalhoLink;