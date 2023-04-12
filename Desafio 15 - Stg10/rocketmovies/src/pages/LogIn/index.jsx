import { Container, LoginArea, FormHeader, Form, Background } from "./styles";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { TextButton } from "../../components/textButton";
import { FiMail, FiLock } from "react-icons/fi"
import { useAuth } from "../../hooks/auth";
import { useState } from "react";


export function LogIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signIn } = useAuth()

    function handleSignIn(){
        signIn({email, password})
    }

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
                        onChange = {e => setEmail(e.target.value)}
                    />

                    <Input 
                        placeholder = "Senha"
                        type = "password"
                        icon={ FiLock }
                        onChange = {e => setPassword(e.target.value)}
                    />
                </Form>

                <Button title = "Entrar" onClick={handleSignIn}/>

                <TextButton title = "Criar conta" route="/register"/>
            </LoginArea>
            <Background/>
        </Container>
    )
}