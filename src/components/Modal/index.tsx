/**
 *
 * Modal
 * make by phamthainb
 */
import styled, { keyframes } from 'styled-components';

import { ReactChild, ReactChildren, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import Button from 'components/Button';

export interface ICoreModal {
  isOpen: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IModal extends ICoreModal {
  title: string;
  subtitle?: string;
  hideCloseIcon?: boolean;
  children: ReactChild | ReactChildren | ReactChild[];
  overwriteModalStyle?: any;
  callbackWhenUnmounted?: () => void;
}

const Modal = ({
  title,
  subtitle,
  isOpen,
  toggleModal,
  children,
  overwriteModalStyle,
  hideCloseIcon = false,
  callbackWhenUnmounted,
}: IModal) => {
  // useLockBodyScroll();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        callbackWhenUnmounted && callbackWhenUnmounted();
        toggleModal(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.addEventListener('keydown', handleKeyDown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, toggleModal]);

  return isOpen
    ? ReactDOM.createPortal(
        <SModal>
          <div className="modal" style={overwriteModalStyle}>
            <div className="modal-title">
              <h3 className="title">{title}</h3>
              {subtitle && <span className="subtitle">{subtitle}</span>}

              {!hideCloseIcon && (
                <FaTimes
                  className="close-modal"
                  size={24}
                  color="red"
                  onClick={() => {
                    toggleModal(false);
                    callbackWhenUnmounted && callbackWhenUnmounted();
                  }}
                />
              )}
            </div>
            <div className="modal-content">{children}</div>
          </div>
        </SModal>,
        document.body,
      )
    : null;
};

export default Modal;

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 40px;
  overflow: auto;
  z-index: 999;
  .modal {
    margin: 0 auto;
    animation: ${modalAnimation} 0.2s forwards ease-out;
    min-width: 310px;
    max-width: 1200px;
    background: #ffffff;
    border-radius: 12px;
    padding: 44px 0;
    .modal-title {
      width: 100%;
      /* padding: 0 72px; */
      padding: 0 56px;
      position: relative;
      .title {
        font-weight: bold;
        font-size: 20px;
        line-height: 30px;
        text-transform: uppercase;
        color: #333b6a;
        margin: 0;
      }
      .subtitle {
        font-size: 14px;
        line-height: 16px;
        color: #718098;
      }
      .close-modal {
        cursor: pointer;
        position: absolute;
        right: 56px;
        top: 0;
      }
    }
  }
  @media (max-width: 1199px) {
    padding: 40px;
    .modal {
      padding: 40px 0;
      .modal-title {
        padding: 0 40px;
        .close-modal {
          right: 40px;
        }
      }
    }
  }
  @media (max-width: 991px) {
    padding: 20px;
    .modal {
      padding: 20px 0;
      .modal-title {
        padding: 0 20px;
        .close-modal {
          right: 20px;
        }
        .title {
          flex-direction: column;
          align-items: flex-start;
          span {
            font-size: 18px;
            line-height: 26px;
          }
          .seperate {
            display: none;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    padding: 5px;
    .modal {
      padding: 15px 0;
      .modal-title {
        padding: 0 15px;
        .close-modal {
          right: 15px;
        }
      }
    }
  }
`;

export const SModalContent = styled.div<{ backGroundColor?: string }>`
  padding: 0 56px;
  background-color: ${props => props.backGroundColor || 'white'};

  margin-top: 44px;

  @media (max-width: 1199px) {
    padding: 0 40px;
  }
  @media (max-width: 991px) {
    padding: 0 20px;
    margin-top: 20px;
  }
  @media (max-width: 767px) {
    padding: 0 15px;
  }

  .group-button {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin: 0 -8px -8px;
    margin-left: auto;
    width: fit-content;
    margin-top: 56px;
    @media (max-width: 991px) {
      margin-top: 20px;
    }
    & > ${Button} {
      margin: 0 8px 8px;
      flex-grow: 1;
    }
  }
`;
