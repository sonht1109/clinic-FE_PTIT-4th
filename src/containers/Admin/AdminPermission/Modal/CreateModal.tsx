import Modal from 'components/Modal';
import React, { SetStateAction } from 'react';
import ModalBody from './ModalBody';


interface Props {
  isOpen: boolean;
  toggleModal: React.Dispatch<SetStateAction<boolean>>;
}

export default function CreateModal(props: Props) {
  const { toggleModal, isOpen } = props;

  return (
    <Modal title="Thêm mới nhóm quyền" {...{ toggleModal, isOpen }}>
      
      <ModalBody handleClose={() => toggleModal(false)} />
      
    </Modal>
  );
}
