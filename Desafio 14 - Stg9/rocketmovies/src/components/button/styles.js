import styled from "styled-components";

export const Container = styled.button`
    display: flex;

    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    height: 5.6rem;
    border: 0;
    padding: 0 3rem;
    border-radius: 1rem;
    font-weight: 500;
    line-height: 1.6rem;

    gap: 8px;
    justify-content: center;
    align-items: center;
    
    &:disabled{
        opacity: 0.5;
    };
`;