import styled from 'styled-components'

export const Container = styled.div`
  margin: 40px;
`
export const Loader = styled.div`
    position: fixed;
    z-index: 999;
    bottom: 45vh;
    left: 50vw;
    border: 8px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #558EFF;
    height: 50px;
    width: 50px;
    animation: is-rotating 1s infinite;

    @keyframes is-rotating {
    to {
        transform: rotate(1turn);
    }
}
`
