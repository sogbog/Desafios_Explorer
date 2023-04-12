import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: "header" "content";

    > main{
        grid-area: content;
        overflow-y: scroll;
        padding: 4rem 12rem;
    }
`
export const Info = styled.div`
    margin-top: 2.4rem;
    
    > #movieTitle{
        display: flex;
        gap: 2rem;
        margin-bottom: 2.4rem;

        h1{
            font-size: 3.6rem;
            font-weight: 500;
        }
    }

    > #modTime{
        display: flex;
        align-items: center;

        gap: 5px;

        img{
            width: 1.8rem;
            height: 1.8rem;
            border-radius: 50%;

            border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }

        span{
            margin-right: 8px;
        }

        svg{
            color: ${({ theme }) => theme.COLORS.PINK};
        }

    }

    margin-bottom: 4rem;
`

export const Tags = styled.div`
    display: flex;
    gap: 1rem;

    >span{
        background-color: ${({ theme }) => theme.COLORS.TAG_BACKGROUND};

    }

    margin-bottom: 4rem;
`

export const Content = styled.div`
    font-weight: 400;
`