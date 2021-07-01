import React from 'react'
import PropTypes from 'prop-types'

import { Container, Content } from './styles'

export function LayoutAuth ({ children }) {
  return (
      <Container>
        <Content>
          {children}
        </Content>
      </Container>
  )
}

LayoutAuth.propTypes = {
  children: PropTypes.object.isRequired
}
