import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    
    >svg{
        color: ${({ theme }) => theme.COLORS.PINK};

        font-size: 2rem;
    }
`