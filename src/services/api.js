import axios from 'axios'

const baseUrl = 'http://localhost:3001'

export const api = {
  getUser: (email, password) => {
    return axios.get(`${baseUrl}/usuarios?email=${email}&password=${password}`)
  },
  login: (body) => {
    return axios.post(`${baseUrl}/login`, body)
  },
  getAllPatients: () => {
    return axios.get(`${baseUrl}/patients`)
  },
  addPatient: (body) => {
    return axios.post(`${baseUrl}/patients`, body)
  },
  updatePatient: (id, body) => {
    return axios.put(`${baseUrl}/patients/${id}`, body)
  },
  inactivedPatient: (id, body) => {
    console.log({ id })
    return axios.patch(`${baseUrl}/patients/${id}`, body)
  }
}
