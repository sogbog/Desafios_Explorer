import { Container } from "./styles";

export function Button(props){
    return(
        <Container type = "button">
            {props.icon && <props.icon/>}
            {props.title}
        </Container>
    )   
}