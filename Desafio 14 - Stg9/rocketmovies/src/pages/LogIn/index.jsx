import { Container, LoginArea, FormHeader, Form, Background } from "./styles";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { TextButton } from "../../components/textButton";
import { FiMail, FiLock } from "react-icons/fi"


export function LogIn(){
    return(
        <Container>
            <LoginArea>
                <FormHeader>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>
                </FormHeader>
                    
                <Form>
                    <h2>Faça seu login</h2>

                    <Input 
                        placeholder = "E-mail"
                        type = "text"
                        icon={ FiMail }
                    />

                    <Input 
                        placeholder = "Senha"
                        type = "password"
                        icon={ FiLock }
                    />
                </Form>

                <Button title = "Entrar"/>

                <TextButton title = "Criar conta" route = "/register"/>
            </LoginArea>
            <Background/>
        </Container>
    )
}