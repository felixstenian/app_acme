import styled, { css } from 'styled-components'

export const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: 5px;
    gap: 5px;
`
export const Label = styled.label`
    font-size: 1.3rem;
    color: #3a3a3a;
    ${props => props.required && css`
        &::after {
            content: '*';
            color: #FF0000;
        }
    `}; 
    ${props => props.smallFont && css`
        font-size: 1rem;
    `}; 
   
`

export const InputStyle = styled.input`
    border-bottom: 1px solid #558EFF;
    font-size: 1.2rem;
    /* align-self:  flex-start; */

    &:focus {
       outline: none;
       border-bottom: 3px solid #558EFF;
    }

   &[type=text] {
       height: 30px;
       padding-left: 10px;
   }

   &[type=password] {
       height: 30px;
       padding-left: 10px;
   }

   &[type=number] {
       align-self: flex-start;
       height: 30px;
       padding-left: 10px;
   }

   &[type=submit] {
        min-width: 15vw;
        background: #558EFF;
        font-size: 1.4rem;
        font-weight: bold;
        border-radius: 30px;
        color:#FFF;
        cursor:pointer;
        align-self: flex-start;
        padding: 10px 25px;

        &:hover {
            filter: brightness(0.9);
        }
        &:disabled {
            background-color: #AAA;
            cursor: not-allowed;
        }

        background: ${props => props.color};
        color: ${props => props.colorText};
        width: ${props => props.size};
   }
`

export const SelectStyle = styled.select`
    /* align-self:  flex-start; */
    background-color: #FFF;
    border: 0;
    border-bottom: 1px solid #558EFF;
    height: 30px;
    min-width: 20vw;
    padding: 0 5px;
`
export const ErrorMessage = styled.p`
    padding-left: 5px;
    color: #FF0000;
`
