import React, { useContext, useEffect, useState } from 'react'

import { BsPersonPlus, BsSearch } from 'react-icons/bs'

import { InputComponent } from '../InputComponent'

import { PatientsContext } from '../../Context/PatientsContext'

import { Container } from './styles'

export function HeaderComponent () {
  const [search, setSeach] = useState('')
  const { setShowModal, filter } = useContext(PatientsContext)

  useEffect(() => {
    filter(search)
  }, [search])

  return (
      <Container>
          <div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.492 9.70796H30.524C30.14 9.70796 29.824 9.39596 29.824 9.00796V3.16396C29.824 2.77596 29.508 2.45996 29.12 2.45996H10.876C10.488 2.45996 10.176 2.77596 10.176 3.16396V9.00796C10.176 9.39596 9.86 9.70796 9.472 9.70796H3.508C1.572 9.70796 0 11.284 0 13.22V33.104C0 35.04 1.568 36.612 3.508 36.612H5.2V36.792C5.2 37.196 5.824 37.528 6.6 37.528H12.272C13.048 37.528 13.672 37.196 13.672 36.792V36.612H26.888V36.792C26.888 37.196 27.52 37.528 28.292 37.528H33.964C34.736 37.528 35.368 37.196 35.368 36.792V36.612H36.492C38.428 36.612 40 35.044 40 33.104V13.216C40 11.284 38.428 9.70796 36.492 9.70796ZM16.14 6.55596C16.14 6.16796 16.456 5.85196 16.84 5.85196H23.156C23.548 5.85196 23.86 6.16796 23.86 6.55596V9.00796C23.86 9.39596 23.548 9.70796 23.156 9.70796H21.688V9.68796C21.688 9.30396 21.372 8.98796 20.988 8.98796H18.996C18.608 8.98796 18.296 9.30396 18.296 9.68796V9.70796H16.84C16.456 9.70796 16.14 9.39596 16.14 9.00796V6.55596ZM25.348 24.784C25.348 24.972 25.196 25.124 25.004 25.124H22.16C21.968 25.124 21.816 25.276 21.816 25.464V28.316C21.816 28.504 21.664 28.656 21.476 28.656H19.092C18.9 28.656 18.748 28.504 18.748 28.316V25.464C18.748 25.276 18.596 25.124 18.408 25.124H15.556C15.368 25.124 15.22 24.972 15.22 24.784V22.396C15.22 22.212 15.372 22.056 15.556 22.056H18.408C18.596 22.056 18.748 21.908 18.748 21.716V18.868C18.748 18.68 18.9 18.528 19.092 18.528H21.476C21.664 18.528 21.816 18.68 21.816 18.868V21.716C21.816 21.908 21.968 22.056 22.16 22.056H25.004C25.196 22.056 25.348 22.212 25.348 22.396V24.784Z" fill="#558EFF"/>
            </svg>
            <h3>ACME</h3>
          </div>

          <div>
            <BsSearch />
            <InputComponent
              type='text'
              placeholder='Buscar nome'
              onChange={e => setSeach(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowModal(true)}
          >
              <BsPersonPlus color='#fff' size={20} />
          </button>
          <div>
            <button>
              Logout
            </button>
          </div>
      </Container>
  )
}
