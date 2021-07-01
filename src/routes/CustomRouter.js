import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { LoginContext } from '../Context/AuthContext'

import { LayoutAuth } from '../pages/Layout/auth'
import { LayoutDefault } from '../pages/Layout/default'

export function CustomRouter ({ component: Component, isPrivate, ...rest }) {
  const { authenticated } = useContext(LoginContext)

  if (!authenticated && isPrivate) {
    return (<Redirect to="/"/>)
  }

  if (authenticated && !isPrivate) {
    return (<Redirect to="/dashboard"/>)
  }

  const Layout = authenticated ? LayoutDefault : LayoutAuth

  return (
    <Route
        {...rest}
        render={ (props) =>
          (
            <Layout>
                <Component
                    {...props}
                />
            </Layout>
          )
        }
    />
  )
}

CustomRouter.defaultProps = {
  isPrivate: false
}

CustomRouter.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  isPrivate: PropTypes.bool
}
