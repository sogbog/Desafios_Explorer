import styled from "styled-components";

export const Container = styled.span`
    font-size: 1.2rem;
    line-height: 1.4rem;
    color: ${({ theme }) => theme.COLORS.TAG_WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding: 0.5rem 1.6rem 0.5rem 1.6rem;
    border-radius: 0.8rem;

    max-width: fit-content;
    max-height: fit-content;
`