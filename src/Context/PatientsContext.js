import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { api } from '../services/api'

const PatientsContext = createContext({})
function PatientsProvider ({ children }) {
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)

  async function getPatients () {
    setLoading(true)
    const { data } = await api.getAllPatients()
    setPatients(data)
    setLoading(false)
  }

  async function handleAddPatient (data) {
    try {
      await api.addPatient(data)
      getPatients()
    } catch (error) {
      console.log(error)
    }
  }

  function filter (search) {
    if (search.length > 0) {
      const item = patients
        .filter(item => item.name > search)
      setPatients(item)
    } else {
      getPatients()
    }
  }

  return (
        <PatientsContext.Provider value={{ patients, loading, getPatients, handleAddPatient, showModal, setShowModal, showToast, setShowToast, filter }} >
            {children}
        </PatientsContext.Provider>
  )
}

PatientsProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export { PatientsContext, PatientsProvider }
