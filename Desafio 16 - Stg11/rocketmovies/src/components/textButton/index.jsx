import { Container } from "./styles";
import { BsArrowLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom";



export function TextButton({ title, hasArrow, route, ...rest}){

    const navigate = useNavigate()

    function handleNavigation(){
        navigate(route)
    }

    return(
        <Container {...rest}>
            {hasArrow && <BsArrowLeft/>}
            <button onClick={handleNavigation}>{title}</button>
        </Container>
    )
}