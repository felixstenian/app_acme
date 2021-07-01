import React from 'react'
import { Router } from 'react-router-dom'

import { Routes } from './routes'
import history from './services/history'

import { AuthProvider } from './Context/AuthContext'
import { PatientsProvider } from './Context/PatientsContext'

import GlobalStyles from './styles/global'

export function App () {
  return (
    <PatientsProvider>
      <AuthProvider>
        <Router history={history}>
          <Routes />
          <GlobalStyles/>
        </Router>
      </AuthProvider>
    </PatientsProvider>
  )
}
