import { Container } from "./styles";
import { Rating } from "../rating";
import { Tag } from "../tag";

export function Movie({ data, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <Rating rating = {data.rating}/>
            <p>{data.description}</p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key = {tag.id} title = {tag.name}/>)
                    }
                </footer>
            }
        </Container>
    )
}