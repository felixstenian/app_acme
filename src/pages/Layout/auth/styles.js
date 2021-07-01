import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr auto;

    grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
`

export const Content = styled.main`
    grid-area: content;
    background: #A9C1FD;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
