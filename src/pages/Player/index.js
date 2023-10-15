import Titulo from 'componentes/Titulo';
import Banner from 'componentes/Banner';
import { useParams } from 'react-router-dom';
import styles from './Player.module.css';
import videos from 'json/db.json';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player() {
    const [video, setVideo] = useState();
    const parametros = useParams();


    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/leoBrunoAndrade/cinetag-api/videos?id${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
      }, []);

    console.log(video);

    if (!video) {
        return <NaoEncontrada />
    }
    return (
        <>
            <Banner imagem="player" />
            <Titulo titulo="Player" />
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>
        </>
    )
}

export default Player;