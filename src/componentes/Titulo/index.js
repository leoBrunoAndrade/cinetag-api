import styles from './Titulo.module.css';
const Titulo = ({ titulo }) => {

  return (

    <div className={styles.titulo}>
        <h1>{titulo}</h1>
    </div>

  );
}

export default Titulo;