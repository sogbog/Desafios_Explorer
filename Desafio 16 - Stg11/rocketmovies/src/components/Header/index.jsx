import { Container, Profile } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import defaultAvatar from "../../assets/avatar_placeholder.svg"

export function Header(){
    const { signOut, user, setMovieNotes } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    function handleGoBack(){
        navigate("/")
    }

    function handleLogOut(){
        signOut()
        setTimeout(() => navigate("/"), 10)
    }

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/movieNotes?title=${search}`)
            setMovieNotes(response.data)
        }

        fetchNotes()
    }, [search])

    return(
        <Container>

            <button onClick={handleGoBack}>RocketMovies</button>

            <input type="text" placeholder="Pesquisar pelo título" onChange={e => setSearch(e.target.value)}/>

            <Profile to="/profile">
                <div>
                    <strong>{user.name}</strong>
                    <span onClick={handleLogOut}>sair</span>
                </div>

                <img src={avatarUrl} alt="Foto de perfil"/>
            </Profile>
        </Container>
    )
}