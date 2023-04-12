import {Container, Info, Tags, Content} from "./style.js"
import { Header } from "../../components/Header/index.jsx"
import { Tag } from "../../components/tag/index.jsx"
import { TextButton } from "../../components/textButton/index.jsx"
import { Rating } from "../../components/rating/index.jsx"
import { BiTime } from "react-icons/bi"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../services/api.js"
import defaultAvatar from "../../assets/avatar_placeholder.svg"

export function MoviePreview(){

  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() =>{
    async function fetchNote(){
      const response = await api.get(`/movieNotes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  async function handleRemove(){
    const confirm = window.confirm("Certeza mannnn?")

    if(confirm){
      await api.delete(`/movieNotes/${params.id}`)
      navigate("/")
    }
  }

  return(
    <Container>
      <Header/>
      {
        data && <main>
          <TextButton title = "Voltar" route={-1} hasArrow/>

          <Info>
            <div id="movieTitle">
              <h1>{data.title}</h1>
              <Rating rating={data.rating}/>
            </div>
            
            <div id="modTime">
              <img src={data.authorAvatar ? `${api.defaults.baseURL}/files/${data.authorAvatar}` : defaultAvatar} alt="Foto de perfil"/>
              <span>Por {data.authorName}</span>
              <BiTime/>
              <time>{data.created_at}</time>
            </div>
          </Info>

          <Tags>
            {
              data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
            }
          </Tags>

          <Content>
            {
              data.description && 
              <section>
                {data.description}
              </section>
            }
              
          </Content>

          <div id="buttons_area">
            <button onClick={handleRemove}>Excluir filme</button>
          </div>
        </main>
      }
      
    </Container>
  )
}