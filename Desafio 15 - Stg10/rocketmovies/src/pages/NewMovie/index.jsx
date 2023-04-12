import { Header } from "../../components/Header"
import { Container, Form, TagsArea } from "./styles"
import { TextButton } from "../../components/textButton"
import { Input } from "../../components/input"
import { TagItem } from "../../components/tagIten"
import { Button } from "../../components/button"
import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export function NewMovie(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [score, setScore] = useState("")
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deletedTag){
        setTags(prevState => prevState.filter(tag => tag !== deletedTag))
    }

    async function handleNewNote(){
        const rating = Number(score)
        if(isNaN(rating)){
            alert("A NOTA PRECISA SER UM NUMERO VALIDO CARAI")
            return
        }

        if(rating > 5 || rating < 0){
            alert("DE 0 A 5 MANO, nao viu escrito ali nao????????????????????????")
            return
        }

        if(newTag){
            return alert("Uma tag nao foi adicionada, ou apaga tudo,ou adiciona esse bagui")
        }

        await api.post("/movieNotes",{title, description, rating, tags})

        alert("Nota criada meo")

        navigate("/")
    }

    return(
        <Container>
            <Header/>

            <main>
                <TextButton title="Voltar" route="/" hasArrow/>
                <Form>
                    <header>
                        <h1>Novo filme</h1>
                    </header>
                    
                    <div id="input_line">
                        <Input placeholder = "Título" onChange={e => setTitle(e.target.value)}/>
                        <Input placeholder = "Sua nota de 0 a 5" onChange={e => setScore(e.target.value)}/>
                    </div>
                    
                    <textarea placeholder="Observações" onChange={e => setDescription(e.target.value)}/>

                    <h2>Marcadores</h2>


                    <TagsArea>
                        {
                             tags.map((tag, index) => (
                                <TagItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
                            ))
                        }

                        <TagItem isNew value={newTag} onChange={e => setNewTag(e.target.value)} onClick={handleAddTag}/>
                    </TagsArea>

                    <div id="buttons_area">
                        <Button title = "Salvar alterações" onClick={handleNewNote}/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}