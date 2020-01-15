import React, { type Node } from 'react'
import styled from 'styled-components'
import ClickOutside from '../OutsideClick'

const Modal = styled(ClickOutside)`
  overflow: hidden;
  border-radius: ${props => props.theme.modalRadius};
  box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
  z-index: 99;
  background-color: #ffffff;
  width: 95%;
  @media screen and (min-width: 650px) {
    width: auto;
  }
`

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`

const ModalHeader = styled.div`
  padding: 16px 16px 12.5px 16px;
  border-bottom: 1px solid ${props => props.theme.inputBorder};
`

const ModalFooter = styled.div`
  border-top: 1px solid ${props => props.theme.inputBorder};
  padding: 15px 16px 16px;
`

const ModalBody = styled.div`
  padding: 19.5px 24px 22px;
`

const ModalBg = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
`

type ModalProps = {
  title?: string,
  footer?: Node,
  children?: Node,
  onClose: () => void,
}

export default (props: ModalProps) => {
  const { title, footer, children, onClose } = props
  return (
    <ModalWrapper>
      <ModalBg />
      <Modal onClickOutisde={onClose}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footer()}</ModalFooter>
      </Modal>
    </ModalWrapper>
  )
}
