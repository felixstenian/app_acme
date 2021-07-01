import React, { useContext, useState } from 'react'
import { api } from '../../services/api'

import { ModalComponent } from '../../components/ModalComponent'
import { FormComponent } from '../../components/FormComponent'
import { InputComponent } from '../../components/InputComponent'
import { ToastAlertComponent } from '../../components/ToastAlertComponent'

import { LoadingPatients } from '../../components/LoadingPatients'
import { PatientsContext } from '../../Context/PatientsContext'

import { v4 as uuidv4 } from 'uuid'

import * as logic from './logic'

import { Container, Loader } from './styles'

export function Dashboard () {
  const {
    loading,
    showModal,
    setShowModal,
    handleAddPatient,
    patients,
    setShowToast,
    showToast,
    getPatients
  } = useContext(PatientsContext)

  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [cpf, setCpf] = useState('')
  const [sex, setSex] = useState('')
  const [address, setAddress] = useState('')
  const [status, setStatus] = useState('')

  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalInactivePatient, setShowModalInactivePatient] = useState(false)

  const [patientEditId, setPatientEditId] = useState('')
  const [nameUp, setNameUp] = useState('')
  const [birthDateUp, setBirthDateUp] = useState('')
  const [cpfUp, setCpfUp] = useState('')
  const [sexUp, setSexUp] = useState('')
  const [addressUp, setAddressUp] = useState('')
  const [statusUp, setStatusUp] = useState('')

  const [statusNew, setStatusNew] = useState('')

  const [errorMessage, setErrorMessage] = useState({})

  const addPatient = () => {
    const body = {
      id: uuidv4(),
      name,
      birthDate,
      cpf: cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4'),
      sex,
      address,
      status
    }

    logic.handleRegister(
      body,
      setErrorMessage,
      setName,
      setBirthDate,
      setCpf,
      setSex,
      setAddress,
      setStatus,
      handleAddPatient,
      patients,
      setShowModal,
      setShowToast
    )
  }

  const editPatient = (data) => {
    setPatientEditId(data.id)
    setNameUp(data.name)
    setBirthDateUp(data.birthDate)
    console.log(cpfUp === data.cpf)
    if (cpfUp.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4') === data.cpf) {
      setCpfUp('')
    } else {
      setCpfUp(data.cpf)
    }
    setSexUp(data.sex)
    setAddressUp(data.address)
    setStatusUp(data.status)
    setShowModalEdit(true)
  }

  const handleEditPatient = async () => {
    const body = {
      name: nameUp,
      birthDate: birthDateUp,
      cpf: cpfUp.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4'),
      sex: sexUp,
      address: addressUp,
      status: statusUp
    }

    await api.updatePatient(patientEditId, body)
    await getPatients()
    setShowModalEdit(false)
  }

  const handleInactivePatient = (data) => {
    setPatientEditId(data.id)
    setStatusNew(data.status)
    setShowModalInactivePatient(true)
  }

  const confirmInactivedPatient = async () => {
    const body = {
      status: statusNew
    }
    await api.inactivedPatient(patientEditId, body)
    await getPatients()
    setShowModalInactivePatient(false)
  }

  return (
      <Container>
        <ToastAlertComponent
          message='Paciente cadastrado com sucesso'
          action='sucess'
          setShowToast={setShowToast}
          showToast={showToast}
        />
        <ModalComponent
              title="Cadastro de Paciente"
              textAction='Cadastrar'
              showModal={showModal}
              setShowModal={setShowModal}
              actionConfirm={addPatient}
          >
            <FormComponent>
              <InputComponent
                type='text'
                name='name'
                label='Nome'
                required
                onChange={e => setName(e.target.value)}
                errorMessage={errorMessage[1]?.name}
              />
              <InputComponent
                type='date'
                name='birthDate'
                label='Data de Nascimento'
                required
                onChange={e => setBirthDate(e.target.value)}
                errorMessage={errorMessage[2]?.birthDate}
              />
              <InputComponent
                type='text'
                name='cpf'
                label='CPF'
                required
                onChange={e => setCpf(e.target.value)}
                errorMessage={errorMessage[3]?.cpf}
              />
              <InputComponent
                type='select'
                name='sex'
                label='Sexo'
                options={['', 'Feminino', 'Masculino']}
                required
                onChange={e => setSex(e.target.value)}
                errorMessage={errorMessage[4]?.sex}
              />
              <InputComponent
                type='text'
                name='address'
                label='endereço'
                onChange={e => setAddress(e.target.value)}
              />
              <InputComponent
                type='select'
                name='status'
                label='Status'
                options={['Ativo', 'Inativo']}
                required
                onChange={e => setStatus(e.target.value)}
              />
            </FormComponent>
          </ModalComponent>

          <ModalComponent
              title="Editar Paciente"
              textAction='Salvar'
              showModal={showModalEdit}
              setShowModal={setShowModalEdit}
              actionConfirm={handleEditPatient}
          >
            <FormComponent>
              <InputComponent
                type='text'
                name='name'
                label='Nome'
                value={nameUp}
                required
                onChange={e => setNameUp(e.target.value)}
              />
              <InputComponent
                type='date'
                name='birthDate'
                label='Data de Nascimento'
                value={birthDateUp}
                required
                onChange={e => setBirthDateUp(e.target.value)}
              />
              <InputComponent
                type='text'
                name='cpf'
                label='CPF'
                value={cpfUp}
                required
                onChange={e => setCpfUp(e.target.value)}
              />
              <InputComponent
                type='select'
                name='sex'
                label='Sexo'
                value={sexUp}
                options={['', 'Feminino', 'Masculino']}
                required
                onChange={e => setSexUp(e.target.value)}
              />
              <InputComponent
                type='text'
                name='address'
                label='endereço'
                value={addressUp}
                onChange={e => setAddressUp(e.target.value)}
              />
              <InputComponent
                type='select'
                name='status'
                label='Status'
                options={['Ativo', 'Inativo']}
                value={statusUp}
                required
                onChange={e => setStatusUp(e.target.value)}
              />
            </FormComponent>
          </ModalComponent>

          <ModalComponent
              title="Editar Paciente"
              textAction='Salvar'
              showModal={showModalInactivePatient}
              setShowModal={setShowModalInactivePatient}
              actionConfirm={confirmInactivedPatient}
          >
            <FormComponent>
              <InputComponent
                type='select'
                name='status'
                label='Status'
                options={['Ativo', 'Inativo']}
                value={statusNew}
                required
                onChange={e => setStatusNew(e.target.value)}
              />
            </FormComponent>
          </ModalComponent>
          <h2>Pacientes</h2>
          { loading && <Loader /> }
          <LoadingPatients editPatient={editPatient} inactived={handleInactivePatient} />
      </Container>
  )
}
