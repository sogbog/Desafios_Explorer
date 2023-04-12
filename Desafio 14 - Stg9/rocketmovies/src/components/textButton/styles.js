import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    border: none;

    display: flex;
    gap: 0.8rem;
    align-items: center;

    >a{
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`