import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.header`
    grid-area: header;

    height: 10.5rem;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12.3rem;

    >a{
        color: ${({ theme }) => theme.COLORS.PINK};

        font-size: 2.4rem;
        font-weight: 700;
    }

    >input{
        font-size: 1.4rem;
        width: 60rem;

        padding: 1.9rem 2.4rem 1.9rem 2.4rem;

        border-radius: 1rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        border: none;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;

      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        line-height: 1.9rem;
        margin-right: 9px;
        font-size: 1.4rem;

        a{
            color: ${({theme}) => theme.COLORS.GRAY_300};
            border: none;
            background: none;
        }

    }
`