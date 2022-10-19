import { Container, Profile } from "./styles";
import { Link } from "react-router-dom";

export function Header(){
    return(
        <Container>

            <Link to="/">RocketMovies</Link>

            <input type="text" placeholder="Pesquisar pelo título"/>

            <Profile to="/profile">
                <div>
                    <strong>André Luiz</strong>
                    <Link>sair</Link>
                </div>

                <img src="https://github.com/sogbog.png" alt="Foto de perfil"/>
            </Profile>
        </Container>
    )
}