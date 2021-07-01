import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
// import api from '../services/api'
// import history from '../services/history'

function checkAuthenticated () {
  const userId = sessionStorage.getItem('userId')
  if (!userId) {
    return false
  }
  return userId
}

const LoginContext = createContext({})
function AuthProvider ({ children }) {
  const isAuthenticated = checkAuthenticated()

  const [authenticated, setAuthenticated] = useState(isAuthenticated)
  const [loading, setLoading] = useState(false)

  const handleLogout = () => {
    sessionStorage.removeItem('userId')
    setAuthenticated(false)
  }

  return (
    <LoginContext.Provider value={{ authenticated, setAuthenticated, handleLogout, loading, setLoading }}>
      {children}
    </LoginContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export { LoginContext, AuthProvider }
