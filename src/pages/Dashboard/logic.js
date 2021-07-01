import PropTypes from 'prop-types'

function calcValidateCpf (numbers, x) {
  const slice = numbers.slice(0, x)
  let sum = 0

  for (let i = x; i > 1; i--) {
    const n = slice[x - i]
    sum += n * i
  }

  const result = 11 - (sum % 11)

  return result > 9 ? 0 : result
}

function validate (data, patients) {
  if (data.value?.length === 0) {
    return { message: 'Campo obrigatório' }
  }
  if (data.field === 'cpf') {
    // Guarda um array com todos os dígitos do valor

    const checkIsDucplicate = patients.filter(patient => patient.cpf === data.value)
    if (checkIsDucplicate.length !== 0) {
      return { message: 'CPF já cadastrado.' }
    }

    const value = data.value.replace(/\D/g, '')
    const match = value.toString().match(/\d/g)
    const numbers = Array.isArray(match) ? match.map(Number) : []

    // Elimina inválidos com todos os dígitos iguais
    const items = [...new Set(numbers)]
    if (items.length === 1) return { message: 'CPF Inválido' }

    if (numbers.length === 11) {
      // Separa os 2 últimos dígitos de verificadores
      const digits = numbers.slice(9)

      // // Valida 1o. dígito verificador
      const digit0 = calcValidateCpf(numbers, 10)

      // // Valida 2o. dígito verificador
      const digit1 = calcValidateCpf(numbers, 11)
      if (digit0 !== digits[0] || digit1 !== digits[1]) return { message: 'CPF Inválido' }
    } else {
      return { message: 'CPF Inválido' }
    }
  }
  return { message: '' }
}

async function handleRegister (
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
) {
  const validations = []
  const erros = []
  Object.keys(body).forEach(element => {
    const checkValidate = validate({ field: element, value: body[element] }, patients)
    validations.push({ [element]: checkValidate.message })
    checkValidate.message !== '' && erros.push({ [element]: checkValidate.message })
  })
  setErrorMessage(validations.map(element => {
    return element
  }))

  if (erros.length === 0) {
    await handleAddPatient(body)
    setName('')
    setBirthDate('')
    setCpf('')
    setSex('')
    setAddress('')
    setStatus('')
    setShowModal(false)
    setShowToast(true)
  }
}

handleRegister.propTypes = {
  body: PropTypes.object.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setBirthDate: PropTypes.func.isRequired,
  setCpf: PropTypes.func.isRequired,
  setSex: PropTypes.func.isRequired,
  setAddress: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  handleAddPatient: PropTypes.func.isRequired,
  patients: PropTypes.array.isRequired,
  setShowModal: PropTypes.func.isRequired,
  setShowToast: PropTypes.func
}

export {
  handleRegister
}
