import styles from './Banner.module.css';
const Banner = ({ imagem }) => {

  return (

    <div style={{ background: `url('/imagens/banner-${imagem}.png')` }} className={styles.capa}>
    </div>

  );
}

export default Banner;