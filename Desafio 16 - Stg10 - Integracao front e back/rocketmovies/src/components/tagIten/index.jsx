import { FiPlus, FiX } from "react-icons/fi"
import { Container } from "./styles"

export function TagItem({isNew, value, onClick, ...rest}){
    return(
        <Container isNew={ isNew }>
            <input type="text" value={value} readOnly={!isNew} placeholder={isNew ? "Novo marcador" : ""} {...rest}/>

            <button onClick={ onClick } type = "button">
                { isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}