import styles from "./Inicio.module.css";
import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import Card from "componentes/Card";
import { useEffect, useState } from "react";



const Inicio = () => {

  const [videos, setVideos] = useState([]);

  //Realiza ações após a redenrização da página, por isso o useEffect
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/leoBrunoAndrade/cinetag-api/videos")
    .then(resposta => resposta.json())
    .then(dados => {
      setVideos(dados)
    })
  }, []);
  
  return (
    <>
      <Banner imagem="home" />
      <Titulo titulo="Um lugar para guardar seus vídeos e filmes!" />
      <section className={styles.container}>
        {videos.map((video) =>
          //Aqui com  o {...video}, já desestrutura o objeto e passa como param
          <Card {...video} key={video.id}  />
        )}

      </section>
    </>
  );
}

export default Inicio;