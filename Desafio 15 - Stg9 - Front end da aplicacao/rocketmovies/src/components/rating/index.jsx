import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { Container } from "./styles"

export function Rating(){
    return(
        <Container>
            <IoStar/>

            <IoStar/>

            <IoStar/>

            <IoStar/>

            <IoStarOutline/>
        </Container>
    )  
}