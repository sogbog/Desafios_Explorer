import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: "header"
    "content";

    >main{
        button:first-child{
            margin: 4rem 0 2.4rem 12rem;
        }

        grid-area: content;
        overflow-y: auto;
    }
`

export const Form = styled.form`
    padding: 0 12rem 8rem 12rem;

    #input_line{
        display: flex;
        gap: 4rem;

        margin: 4rem 0;
    }

    >textarea{
        width: 100%;
        height: 27.5rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        resize: none;
        border: none;
        border-radius: 1rem;
        padding: 2rem 1.6rem;
    }

    >h2{
        margin: 4rem 0 2.4rem 0;
        font-size: 2rem;
        font-weight: 400;

        color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

    #buttons_area{
        margin-top: 4rem;

        display: flex;
        gap: 4rem;

        button{
            width: 50%;
            height: 5.6rem;
            margin: auto;

            border: none;
            border-radius: 1rem;

            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`

export const TagsArea = styled.div`
    padding: 1.6rem;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};

    display: flex;
    gap: 2.4rem;

    flex-wrap: wrap;
`