import PropTypes from 'prop-types'

import { api } from '../../services/api'
import history from '../../services/history'

async function handleLogin (email, password, setAuthenticated, setHaveError) {
  const { data } = await api.getUser(email, password)
  if (data[0]) {
    sessionStorage.setItem('userId', data[0].id)
    setAuthenticated(true)
    history.push('/dashboard')
  } else {
    setHaveError(true)
  }
}

handleLogin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setAuthenticated: PropTypes.func.isRequired
}

export { handleLogin }
