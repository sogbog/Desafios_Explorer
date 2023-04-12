import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"

const AuthContext = createContext({})

function AuthProvider({ children }){

    const [data, setData] = useState({})

    async function signIn({ email, password }){
        try {
            const response = await api.post("/session", {email, password})
            const {user, token} = response.data 

            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))
            localStorage.setItem("@rocketmovies:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({user, token})

        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Num rolou mannnn")
            }
        }        
    }

    function signOut(){
        localStorage.removeItem("@rocketmovies:user")
        localStorage.removeItem("@rocketmovies:token")

        setData({})
    }

    async function updateProfile({ user, avatarFile }){
        try{
            if(avatarFile){
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUploadForm)
                user.avatar = response.data.avatar
            }

            await api.put("/users", user)
            localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

            setData({ user, token: data.token })
            alert("Deu boa")

        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Num rolou mannnn")
            }
        }   
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketmovies:user")
        const token = localStorage.getItem("@rocketmovies:token")
        
        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    const [movieNotes, setMovieNotes] = useState([])

    return(
        <AuthContext.Provider value={{signIn, user: data.user, signOut, updateProfile, movieNotes, setMovieNotes}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }