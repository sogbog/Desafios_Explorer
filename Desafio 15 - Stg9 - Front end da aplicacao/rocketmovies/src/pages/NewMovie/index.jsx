import { Header } from "../../components/Header"
import { Container, Form, TagsArea } from "./styles"
import { TextButton } from "../../components/textButton"
import { Input } from "../../components/input"
import { TagItem } from "../../components/tagIten"
import { Button } from "../../components/button"


export function NewMovie(){
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
                        <Input placeholder = "Título"/>
                        <Input placeholder = "Sua nota de 0 a 5"/>
                    </div>
                    
                    <textarea placeholder="Observações"/>

                    <h2>Marcadores</h2>

                    <TagsArea>
                        <TagItem value="Jooj"/>
                        <TagItem isNew/>
                    </TagsArea>

                    <div id="buttons_area">
                        <button>Excluir filme</button>
                        <Button title = "Salvar alterações"/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}