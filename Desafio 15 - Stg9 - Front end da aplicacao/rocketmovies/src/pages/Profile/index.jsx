import { Container, Form, Avatar } from "./styles";
import { TextButton } from "../../components/textButton"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import {FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"


export function Profile(){
    return(
        <Container>
            <header>
                <TextButton title = "Voltar" route="/" hasArrow/>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/sogbog.png" alt="Foto de perfil"/>

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input id="avatar" type="file"/>
                    </label>
                </Avatar>

                <Input placeholder = "Nome" type = "text" icon = {FiUser}/>
                <Input placeholder = "E-mail" type = "text" icon = {FiMail}/>
                <Input placeholder = "Senha atual" type = "password" icon = {FiLock}/>
                <Input placeholder = "Nova senha" type = "password" icon = {FiLock}/>

                <Button title = "Salvar"/>
            </Form>
        </Container>
    )
}