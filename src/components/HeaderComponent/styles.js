import styled from 'styled-components'

export const Container = styled.div`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #3a3a3a;
    padding: 10px 20px;

    
    input {
        width: 30vw;
    }

    > button {
        background: #39aae2;
        padding: 10px;
        border-radius: 50px;

        &:hover {
            filter: brightness(0.9);

        }
    }

    button:last-child {
        background: #dc4343;
        padding: 7px;
        border-radius: 7px;
        margin-left: 10px;
        color: #fff;

        &:hover {
            filter: brightness(0.9);

        }
    }

    div {
        display: flex;
        align-items: center;
    }
`
