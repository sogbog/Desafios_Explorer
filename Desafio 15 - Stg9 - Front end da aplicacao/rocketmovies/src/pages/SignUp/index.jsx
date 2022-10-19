import { Container, LoginArea, FormHeader, Form, Background } from "./styles";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { TextButton } from "../../components/textButton";
import { FiUser, FiMail, FiLock } from "react-icons/fi"


export function SignUp(){
    return(
        <Container>
            <LoginArea>
                <FormHeader>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir</p>
                </FormHeader>
                    
                <Form>
                    <h2>Crie sua conta</h2>

                    <Input 
                        placeholder = "Nome"
                        type = "text"
                        icon={ FiUser }
                    />

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

                <Button title = "Cadastrar"/>

                <TextButton title = "Voltar para o login" route = "/"hasArrow/>
            </LoginArea>
            <Background/>
        </Container>
    )
}