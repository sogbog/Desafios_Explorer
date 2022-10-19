import { Container } from "./styles";
import { BsArrowLeft } from "react-icons/bs"
import { Link } from 'react-router-dom'

export function TextButton({ title, hasArrow, route, ...rest}){
    return(
        <Container {...rest}>
            {hasArrow && <BsArrowLeft/>}
            <Link to = {route}>{title}</Link>
        </Container>
    )
}