import React, { useState, useContext } from 'react'

import { LoginContext } from '../../Context/AuthContext'
import { FormComponent } from '../../components/FormComponent'
import { InputComponent } from '../../components/InputComponent'

import * as logic from './logic'

import { Container, Content, Background, LoginError } from './styles'

export function SignIn () {
  const {
    setAuthenticated
    // loading,
    // setLoading
  } = useContext(LoginContext)

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [haveError, setHaveError] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    logic.handleLogin(email, password, setAuthenticated, setHaveError)
  }

  return (
      <Container>
          <Content>
            <h1>Login</h1>

              <FormComponent>
                <p>Para acessar a plataforma realize o login.</p>
                <InputComponent type='text' label='Email' placeholder='Seu email de acesso' required onChange={e => setEmail(e.target.value)} />
                <InputComponent type='password' label='Passord' placeholder='Sua senha de acesso' required onChange={e => setPassword(e.target.value)} />
                <InputComponent type='submit' onClick={handleLogin} />
              </FormComponent>

              {
                haveError
                  ? <LoginError>
                  Credenciais Invalidas
                </LoginError>
                  : ''
              }
          </Content>
        <Background>
          <svg width="80" height="84" viewBox="0 0 80 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9803 34.1076C24.4968 23.9154 53.3015 3.69511 63.4938 11.2116C73.686 18.7282 61.4061 51.1351 53.8896 61.3274L45.5143 72.684C37.9977 82.8763 23.6419 85.0453 13.4497 77.5288C3.2575 70.0123 1.08843 55.6565 8.60496 45.4643L16.9803 34.1076Z" fill="url(#paint0_linear)"/>
            <g filter="url(#filter0_b)">
            <path d="M65.7954 6.54949C55.6031 -0.967041 41.2474 1.20202 33.7308 11.3942L20.121 29.8489L57.0302 57.0687L70.6401 38.614C78.1567 28.4218 75.9876 14.066 65.7954 6.54949Z" fill="white" fillOpacity="0.2"/>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M36.7925 17.0835C42.0943 6.49039 52.4799 5.38547 57.3646 7.37756C58.7812 7.95526 59.4612 9.57194 58.8835 10.9885C58.3058 12.4051 56.6891 13.0851 55.2726 12.5074C52.8532 11.5207 45.6514 11.7612 41.7467 19.563C41.062 20.9311 39.3979 21.4851 38.0299 20.8004C36.6618 20.1157 36.1078 18.4516 36.7925 17.0835Z" fill="white"/>
            <defs>
            <filter id="filter0_b" x="-6.81073" y="-24.6096" width="109.328" height="109.328" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImage" stdDeviation="12.5"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear" x1="3.09698" y1="46.4674" x2="67.3912" y2="41.8191" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AA80FF"/>
            <stop offset="1" stopColor="#A071FF" stopOpacity="0.65"/>
            </linearGradient>
            </defs>
          </svg>
        </Background>
      </Container>
  )
}
