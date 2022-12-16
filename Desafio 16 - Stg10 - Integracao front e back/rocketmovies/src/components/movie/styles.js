import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.FADED_PINK};

    border: none;
    border-radius: 1rem;
    padding: 2.2rem;
    margin-bottom: 1.6rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    >h1{
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2.4rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    >div{

        svg{
            font-size: 1.4rem;
        }

        gap: 5px;
        margin-bottom: 1rem;
    }

    >p{
        color: ${({ theme }) => theme.COLORS.GRAY_400};
        max-height: 5.5rem;
        text-align: justify;

        overflow-y: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 2;

        margin-bottom: 2rem;
    }

    >footer{
        display: flex;
        gap: 8px;
    }
`