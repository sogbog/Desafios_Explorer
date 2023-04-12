import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { Container } from "./styles"

export function Rating(rating){

    const stars = []

    function createRating( {rating} ){

        let Ri = 0

        const roundedRating = Math.floor(rating*2)/2
        
        if(roundedRating%1){
            const fullStars = roundedRating - 0.5
            const outlineStars = 4-fullStars

            for (let i=0; i<fullStars; i++){
                stars.push(<IoStar key={Ri}/>)
                Ri++
            }


            stars.push(<IoStarHalf key={Ri}/>)
            Ri++
        

            for (let i=0; i<outlineStars; i++){
                stars.push(<IoStarOutline key={Ri}/>)
                Ri++
            }
        }else{
            const fullStars = rating
            const outlineStars = 5-fullStars

            for (let i=0; i<fullStars; i++){
                stars.push(<IoStar key={Ri}/>)
                Ri++
            }

            for (let i=0; i<outlineStars; i++){
                stars.push(<IoStarOutline key={Ri}/>)
                Ri++
            }
        }
    }

    createRating(rating)

    return(
        <Container>
           {stars}
        </Container>
    )  
}