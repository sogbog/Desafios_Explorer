import { Container, Form, Avatar } from "./styles";
import { TextButton } from "../../components/textButton"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import {FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi"
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import defaultAvatar from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"


export function Profile(){
    const { user, updateProfile } = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : defaultAvatar

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [currentPassword, setCurrentPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    

    async function handleUpdate(){
        const updated = {
            name,
            email,
            current_password: currentPassword,
            password: newPassword
        }

        const updatedUser = Object.assign(user, updated)
        console.log()

        await updateProfile({ user: updatedUser, avatarFile })
    }

    function handleAvatarChange( event ){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }
    
    return(
        <Container>
            <header>
                <TextButton title = "Voltar" route="/" hasArrow/>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto de perfil"/>

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input id="avatar" type="file" onChange={handleAvatarChange}/>
                    </label>
                </Avatar>

                <Input placeholder="Nome" type="text" icon={FiUser} value={name} onChange={e => setName(e.target.value)}/>
                <Input placeholder="E-mail" type="text" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)}/>
                <Input placeholder="Senha atual" type="password"icon={FiLock} onChange={e => setCurrentPassword(e.target.value)}/>
                <Input placeholder="Nova senha" type="password" icon={FiLock} onChange={e => setNewPassword(e.target.value)}/>

                <Button title = "Salvar" onClick={handleUpdate}/>
            </Form>
        </Container>
    )
}