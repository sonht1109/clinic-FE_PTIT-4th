import Button from 'components/Button';
import React from 'react';
import styled from 'styled-components';
import Modal, { SModalContent } from './index';
import deleteModalSrc from 'assets/images/layout/delete-modal.png';

interface IDeleteModal {
  title: string;
  isOpen: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  subtitle?: string;
  onCancel?: () => void;
  onSubmit: () => void;
  content?: string;
}

export default function DeleteModal({
  title,
  onCancel,
  onSubmit,
  isOpen,
  toggleModal,
  content = ""
}: IDeleteModal) {
  return (
    <Modal title={title} {...{ isOpen, toggleModal }}>
      <SDeleteModal>
        <img src={deleteModalSrc} alt="delete" width={200} height={200} />
        <p>{content}</p>
        <div className="group-button">
          <Button
            color="#718098"
            border="1px solid #00CB82"
            onClick={() => {
              onCancel && onCancel();
              toggleModal(false)}}
            background="white"
            width="152px"
            height="40px"
          >
            Huỷ
          </Button>

          <Button
            color="white"
            border="none"
            onClick={() => {
              onSubmit();
              toggleModal(false);
            }}
            background="#FF6C6C"
            width="152px"
            height="40px"
          >
            Xoá
          </Button>
        </div>
      </SDeleteModal>
    </Modal>
  );
}

export const SDeleteModal = styled(SModalContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    color: #333b6a;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-top: 44px;
    margin-bottom: 32px;
  }

  .group-button {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px -8px;
    ${Button} {
      margin: 0 8px 8px;
      flex-grow: 1;
    }
  }
`;
