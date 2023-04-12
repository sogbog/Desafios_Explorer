import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
    color: ${({theme, isNew}) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.TAG_WHITE};

    border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}`: "none"};
    border-radius: 1rem;

    padding: 1.6rem;

    >button{
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    >input{
        background: transparent;
        border: none;
        margin-right: 1.6rem;

        color: ${({ theme }) => theme.COLORS.TAG_WHITE};

        width: auto;
    }
`