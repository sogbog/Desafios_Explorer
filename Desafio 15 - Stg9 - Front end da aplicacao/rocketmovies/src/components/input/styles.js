import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border-radius: 1rem;

    >input {
        padding: 1.5rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: none;
        border: none;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        width: 100%;
    }

    > svg {
            margin-left: 1.2rem;
        }
`