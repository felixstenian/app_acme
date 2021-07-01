import React from 'react'
import PropTypes from 'prop-types'

import { HeaderComponent } from '../../../components/HeaderComponent'
// import { FooterComponent } from '../../../components/FooterComponent'

import { Container, Content } from './styles'

export function LayoutDefault ({ children }) {
  return (
      <Container>
        <HeaderComponent />
        <Content>
          {children}
        </Content>
        {/* <FooterComponent /> */}
      </Container>
  )
}

LayoutDefault.propTypes = {
  children: PropTypes.object.isRequired
}
