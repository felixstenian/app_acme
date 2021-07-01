import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 15px 10px rgb(0 0 0 / 10%);
    background: #fff;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    margin: 10px;

    h1 {
        font-weight: 300;
        margin-left: 50px;
        color: #3a3a3a;
    }

    form {
        color: #3a3a3a;

        p {
            width: 160px;
            display: flex;
            padding: 5px;
        }
    }
`

export const Background = styled.div`
    width: 40vw;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #558EFF;
`

export const LoginError = styled.p`
    text-align: center;
    padding: 5px;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    background-color: red;
`
