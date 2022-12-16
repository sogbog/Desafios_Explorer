import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, LoginArea, FormHeader, Form, Background } from "./styles";
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import { TextButton } from "../../components/textButton";
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { api } from "../../services/api"


export function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp(){
        if(!name || !email || !password){
            alert("PREENCHA TUDO MALANDRO!")
            return
        }

        api.post("/users", {name, email, password}).then(() => {alert("Usuario cadastrado!"); navigate("/")}).catch(
            error => {if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Num foi possivel meo, n sem sei pq")
            }}
        )
    }

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
                        onChange = {e => setName(e.target.value)}
                    />

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

                <Button title = "Cadastrar" onClick={handleSignUp}/>

                <TextButton title = "Voltar para o login" route={-1} hasArrow/>
            </LoginArea>
            <Background/>
        </Container>
    )
}