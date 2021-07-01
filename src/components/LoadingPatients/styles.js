import styled from 'styled-components'

export const Container = styled.div`
    width: 78vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

export const Card = styled.div`
    border: 1px solid rgb(0 0 0 / 10%);
    border-radius: 5px;
    width: 25vw;
    margin: 10px 5px;
    padding: 10px 15px;
    box-shadow: 1px 1px 12px 3px rgb(0 0 0 / 10%);
    

    header {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding-bottom: 5px;
        border-bottom: 1px solid rgb(0 0 0 / 50%);

        img {
            width: 4vw;
        }

        h4 {
            margin: 0 8px;
        }
    }

    ul {
        list-style: none;
        display: flex;
        flex-flow: column wrap;

        li {
            small {
                padding-right: 2px;
            }
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px;
            border-bottom: 1px solid rgb(0 0 0 / 10%);
            text-align: right;
        }
    }

    div {
        display: flex;
        justify-content: space-evenly;

        button {
            margin-top: 10px;
            svg {
                &:hover {
                    filter: brightness(0.7);
                }
            }

        }

    }

    @media (max-width: 600px) {
      width: 95vw;
    }
  
`
