import React, { Children, useState, useEffect } from 'react';
import WithWrapper from 'components/Input/WithWrapper';
import Modal from 'components/Modal';
import {
  FaBriefcase,
  FaFileAlt,
  FaGlobeAsia,
  FaIdBadge,
  FaMap,
  FaToggleOn,
  FaUser,
} from 'react-icons/fa';
import { SKycDetailModal } from '../style';
import { uploadImgs } from '../data';
import KycImgUpload from './KycImgUpload';
import Button from 'components/Button';
import { KycStatusEnum } from 'enum/kyc.enum';
import { requestToken } from 'api/axios';
import API_URL from 'api/url';
import { handleError } from 'helpers';
import { IKyc } from '../store/types';
import { useDispatch } from 'react-redux';
import usePermission from 'hooks/usePermission';
import useModal from 'hooks/useModal';
import { handleVerify } from '../store/actions';
import { KycActionEnum } from 'enum';
import { Alert } from 'components/Alert';
import loadable from 'components/LazyLoad';
import { useIntl } from 'react-intl';
import adminKycMessages from '../store/message-trans';

const DenyModal = loadable(() => import('./DenyModal'));

interface Props {
  isOpen: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  kycId: string | null;
  code: string;
}

interface IButtonProps {
  id: string;
  handleCloseParent: () => void;
}

export default function DetailModal({
  isOpen,
  toggleModal,
  kycId,
  code,
}: Props) {
  const intl = useIntl();
  const [kyc, setKyc] = useState<IKyc | null>(null);

  useEffect(() => {
    if (kycId && isOpen) {
      requestToken({method: "GET", url: API_URL.KYC.GET_ONE(kycId)})
      .then(res => {
        console.log(res);
        if(res.data) {
          setKyc({...res.data})
        }
      })
      .catch(err => {
        handleError(err);
      })
    }
  }, [kycId, isOpen]);

  const permissionOptions = usePermission(code);

  const handleCloseThis = () => {
    toggleModal(false);
  };

  return (
    <Modal title="Thông tin KYC" {...{ isOpen, toggleModal }}>
      <SKycDetailModal>
        <div className="body__input">
          {/* name */}
          <WithWrapper.Text
            wrapperProps={{
              className: 'input-item',
              label: 'Họ và tên',
              icon: <FaUser size={12} />,
            }}
            inputProps={{
              disabled: true,
              value: kyc?.name,
            }}
          />

          {/* country */}
          <WithWrapper.Text
            wrapperProps={{
              className: 'input-item',
              label: 'Quốc gia',
              icon: <FaGlobeAsia size={12} />,
            }}
            inputProps={{
              name: 'kyc.country',
              disabled: true,
              value: kyc?.country,
            }}
          />

          {/* address */}
          <WithWrapper.Text
            wrapperProps={{
              label: 'Địa chỉ',
              className: 'input-item',
              icon: <FaMap size={12} />,
            }}
            inputProps={{
              name: 'kyc.address',
              disabled: true,
              value: kyc?.address,
            }}
          />

          {/* job */}
          <WithWrapper.Text
            wrapperProps={{
              className: 'input-item',
              label: 'Nghề nghiệp',
              icon: <FaBriefcase size={12} />,
            }}
            inputProps={{
              name: 'kyc.job',
              disabled: true,
              value: kyc?.job,
            }}
          />

          {/* id type */}
          <WithWrapper.Text
            wrapperProps={{
              className: 'input-item',
              label: 'Loại giấy tờ',
              icon: <FaFileAlt size={12} />,
            }}
            inputProps={{
              name: 'kyc.idType',
              disabled: true,
              value: kyc?.idType,
            }}
          />

          {/* id number */}
          <WithWrapper.Text
            wrapperProps={{
              className: 'input-item',
              label: 'Số ID',
              icon: <FaIdBadge size={12} />,
            }}
            inputProps={{
              name: 'kyc.idNumber',
              disabled: true,
              value: kyc?.idNumber,
            }}
          />

          {/* status */}
          <WithWrapper.Text
            wrapperProps={{
              className: 'input-item',
              label: 'Trạng thái',
              icon: <FaToggleOn size={12} />,
            }}
            inputProps={{
              name: 'kyc.status',
              disabled: true,
              value:
                kyc?.status &&
                intl.formatMessage({ ...adminKycMessages[kyc.status] }),
            }}
          />
        </div>

        <div className="body__img">
          {Children.toArray(
            uploadImgs.map(i => (
              <>
                <KycImgUpload
                  title={i.title}
                  value={kyc ? (kyc as any)[i.name] : ''}
                />
              </>
            )),
          )}
        </div>

        {permissionOptions?.update && (
          <div className="body__button">
            {kyc?.status !== KycStatusEnum['DENIED'] && (
              <DenyButton
                handleCloseParent={handleCloseThis}
                id={kyc?.id || ''}
              />
            )}

            {kyc?.status !== KycStatusEnum['ACCEPTED'] && (
              <AcceptButton
                handleCloseParent={handleCloseThis}
                id={kyc?.id || ''}
              />
            )}
          </div>
        )}
      </SKycDetailModal>
    </Modal>
  );
}

// accept button
const AcceptButton = ({ id, handleCloseParent }: IButtonProps) => {
  const dispatch = useDispatch();

  const handleAccept = () => {
    dispatch(
      handleVerify({
        id,
        actionType: KycActionEnum['VERIFY'],
        handleSuccess: () => {
          Alert({ name: 'Thực hiện xét duyệt thành công', icon: 'success' });
          handleCloseParent();
        },
      }),
    );
  };

  return (
    <Button width="152px" height="40px" onClick={handleAccept}>
      Đồng ý
    </Button>
  );
};

// deny button
const DenyButton = ({ id, handleCloseParent }: IButtonProps) => {
  const { isOpen, toggleModal } = useModal();
  const dispatch = useDispatch();

  const handleDeny = (note: string) => {
    dispatch(
      handleVerify({
        id,
        actionType: KycActionEnum['DENIED'],
        note,
        handleSuccess: () => {
          Alert({ name: 'Thực hiện từ chối thành công', icon: 'success' });
          toggleModal(false);
          handleCloseParent();
        },
      }),
    );
  };

  return (
    <>
      <Button
        color="white"
        border="none"
        width="152px"
        height="40px"
        background="#FF6C6C"
        onClick={() => toggleModal(true)}
      >
        Từ chối
      </Button>
      <DenyModal
        {...{ isOpen, toggleModal, id }}
        handleDeny={(note: string) => handleDeny(note)}
      />
    </>
  );
};
