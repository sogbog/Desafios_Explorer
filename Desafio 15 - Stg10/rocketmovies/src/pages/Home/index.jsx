import { Container, Content, MovieDisplayHeader} from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/button"
import { HiPlus } from "react-icons/hi"
import { Movie } from "../../components/movie"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/auth"


export function Home(){

    const { movieNotes } = useAuth()

    return(
        <Container>
            <Header/>
            <MovieDisplayHeader>
                <h1>Meus filmes</h1>
                <Link to="/new_movie">
                    <Button title = "Adicionar filme" icon = {HiPlus}/>
                </Link>
            </MovieDisplayHeader>
            <Content>
                {
                    movieNotes.map(note => (
                        <Link to={`/movie_preview/${note.id}`}>
                            <Movie key={String(note.id)} data={note}/>
                        </Link>
                    ))
                } 
            </Content>
        </Container>
    )
}