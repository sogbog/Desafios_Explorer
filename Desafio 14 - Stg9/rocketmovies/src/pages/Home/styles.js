import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: "header" "content";
`

export const MovieDisplayHeader = styled.div`
    margin-bottom: 4.5rem;
    padding: 5rem 11rem 0 11rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    >button{
        width: fit-content;
    }
`

export const Content = styled.div`
    overflow-y: auto;
    padding: 0 11rem 6rem 11rem;
    max-height: 60rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`