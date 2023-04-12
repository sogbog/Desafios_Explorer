import styled from "styled-components";
import backgroundImg from "../../assets/Background.png"

export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-columns: 44vw 56vw;
    grid-template-areas: "A B";
`

export const LoginArea = styled.div`
    grid-area: A;
    /* padding: 0 13rem; */
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: fit-content;

    >button{
        margin: 1.6rem 0 2rem 0;

        display: flex;
        justify-content: center;
    }

    
`

export const FormHeader = styled.div`
    >h1{
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 4.8rem;
    }

    >p{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-weight: 400;
        font-size: 1.4rem;
    }

    margin-bottom: 4.8rem;
`

export const Form = styled.form`
   >h2{
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 4.8rem;
   }
   >div{
        margin-bottom: 8px;
   }
`

export const Background = styled.div`
    flex: 1;
    background: url(${ backgroundImg }) no-repeat center center;
    background-size: cover;
    opacity: 0.3;
`