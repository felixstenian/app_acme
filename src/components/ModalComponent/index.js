import React from 'react'
import PropTypes from 'prop-types'

import { InputComponent } from '../InputComponent'

import { ModalContainer, ModalContent, ModalHeader, Actions } from './styles'

export function ModalComponent ({ children, title, showModal, setShowModal, actionConfirm, textAction }) {
  if (showModal) {
    return (
            <ModalContainer>
                <ModalHeader>
                    <h3>{title}</h3>
                    <a onClick={() => setShowModal(false)}>X</a>
                </ModalHeader>
                <ModalContent>
                  {children}
                </ModalContent>
                <Actions>
                  <div>
                    <InputComponent
                      type="submit"
                      value={textAction}
                      onClick={actionConfirm}
                      colorText='#fff'
                      size='150px'
                    />
                    <InputComponent
                      type="submit"
                      value="Cancelar"
                      onClick={() => setShowModal(false)}
                      color='#FF0000'
                      size='150px'
                    />
                  </div>
                </Actions>
            </ModalContainer>
    )
  } else {
    return (
          <></>
    )
  }
}

ModalComponent.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  actionConfirm: PropTypes.func,
  textAction: PropTypes.string
}
