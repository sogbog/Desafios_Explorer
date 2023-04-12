import styled from "styled-components";


export const Container = styled.div`
    width: 100%;

    >header{
        height: 14.4rem;
        background-color: ${({ theme }) => theme.COLORS.FADED_PINK};

        display: flex;
        align-items: center;

        padding: 0 14.4rem;
    }
`

export const Form = styled.form`
    max-width: 34rem;
    margin: auto;

    >div{
        margin-bottom: 8px;
    }

    >div:first-child{
        margin: -8.8rem auto 6.4rem auto;
    }
    
    >div:nth-child(3), div:nth-child(5){
        margin-bottom: 2.4rem;
    }
`

export const Avatar = styled.div`
    width: 18.6rem;
    height: 18.6rem;
    position: relative;
    margin: -8.8rem auto 6.4rem auto;

    >img{
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
    }

    >label{
        background-color: ${({ theme }) => theme.COLORS.PINK};
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;

        position: absolute;
        bottom: 4px;
        right: 1rem;

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        svg{
            font-size: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800}; //FALTA ARRUMAR OS ESPAÇOS!
        }
    }

    input{
        display: none;
    }
`