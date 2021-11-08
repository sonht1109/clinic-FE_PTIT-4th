import Modal  from 'components/Modal'
import React, { SetStateAction } from 'react'
import { IGroupPermission } from '../store/types'
import ModalBody from './ModalBody'

interface Props {
  isOpen: boolean;
  toggleModal: React.Dispatch<SetStateAction<boolean>>;
  selectedRow: IGroupPermission | null;
}

export default function ModifyModal({isOpen, toggleModal, selectedRow}: Props) {
  
  return (
    <Modal title="Chỉnh sửa nhóm quyền" {...{ toggleModal, isOpen }}>
      <ModalBody selectedRow={selectedRow} handleClose={() => toggleModal(false)} />
    </Modal>
  )
}
