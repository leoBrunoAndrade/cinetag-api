import Cabecalho from "componentes/Cabecalho";
import Container from "componentes/Container";
import Rodape from "componentes/Rodape";
import { FavoritosProvider } from "contextos/Favoritos";

import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
      // O OutLet representa todas as rotas filhas dentro da rota com element PaginaBase
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;