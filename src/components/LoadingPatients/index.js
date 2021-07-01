import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { FiEdit } from 'react-icons/fi'
import { TiCancelOutline } from 'react-icons/ti'

import { PatientsContext } from '../../Context/PatientsContext'
import avatar from '../../assets/avataaars.svg'

import { Container, Card } from './styles'
moment.locale('pt')

export function LoadingPatients ({ editPatient, inactived }) {
  const { patients, getPatients } = useContext(PatientsContext)

  useEffect(() => {
    getPatients()
  }, [])
  return (
      <Container>
          {patients.map(patient => {
            return (
              <Card key={patient.id}>
                <header>
                  <img src={avatar} />
                  <h4>{patient.name}</h4>
                </header>

                <ul>
                  <li>
                    <small>Data de Nascimento: </small> {moment(patient.birthDate).utc('America/SP').format('DD/MM/YYYY')}
                  </li>
                  <li>
                    <small>CPF: </small>{patient.cpf}
                  </li>
                  <li>
                    <small>Sexo: </small>{patient.sex}
                  </li>
                  <li>
                    <small>Endereço: </small>{patient.address}
                  </li>
                  <li>
                    <small>Status: </small>{patient.status}
                  </li>
                </ul>
                <div>
                  <button
                    onClick={() => editPatient(patient)}
                  >
                    <FiEdit color='#558EFF' />
                  </button>
                  <button
                    onClick={() => inactived(patient)}
                  >
                    <TiCancelOutline size={25} color='red' />
                  </button>
                </div>
              </Card>
            )
          }) }
      </Container>
  )
}

LoadingPatients.propTypes = {
  editPatient: PropTypes.func.isRequired,
  inactived: PropTypes.func.isRequired
}
