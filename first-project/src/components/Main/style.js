import {styled} from "styled-components";

export const Main = styled.main`
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    padding-block: 2rem;
    /* height: 100vh; */

    img{
        width: 40rem;
    }

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        width: 100%;
        gap: 8rem;

        img{
        width: 100%;
    }
    }
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    h1{
        font-size: 3em;
        line-height: 1em;
    }

    p{
        font-weight: 300;
        font-size: 1.5rem;
    }

    @media only screen and (max-width: 1024px) {
        width: 80%;
        gap: 5rem;

        h1{
            font-size: 3em;
        };

        p{
            line-height: 2em;
            width: 90%;
        }

    }

`;