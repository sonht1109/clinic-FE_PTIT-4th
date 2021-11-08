import React from 'react';
import { SDenyModal } from '../style';
import Modal, { ICoreModal } from 'components/Modal';
import WithWrapper from 'components/Input/WithWrapper';
import { useForm } from 'react-hook-form';
import { FaEdit } from 'react-icons/fa';
import Button from 'components/Button';
import { useIntl } from 'react-intl';
import globalMessages from 'configs/global-message';
import ErrorMessage from 'components/Input/ErrorMessage';

interface Props extends ICoreModal {
  id: string;
  handleDeny: (note: string) => void;
}

export default function DenyModal({ isOpen, toggleModal, id, handleDeny }: Props) {
  const { register, handleSubmit, errors } = useForm();
  const intl = useIntl();

  const onSubmit = (data: any) => {
    handleDeny(data.note)
  };

  return (
    <Modal
      {...{ isOpen, toggleModal }}
      title="Từ chối"
      subtitle="Nhập lý do từ chối để hệ thống phản hồi cho khách hàng"
      overwriteModalStyle={{
        maxWidth: "560px"
      }}
    >
      <SDenyModal>
        <WithWrapper.Textarea
          wrapperProps={{
            label: 'Nhập lí do',
            icon: <FaEdit size={12} />,
          }}
          textareaProps={{
            name: 'note',
          }}
          register={register({
            required: intl.formatMessage({ ...globalMessages.required }, {
              field: "Lí do"
            }),
          })}
        />
        <ErrorMessage errors={errors} field="note" />
        <div className="group-button">
          <Button
            width="152px"
            height="40px"
            background="white"
            color="#718098"
            onClick={() => toggleModal(false)}
          >
            Hủy bỏ
          </Button>
          <Button width="152px" height="40px" onClick={handleSubmit(onSubmit)}>
            Xác nhận
          </Button>
        </div>
      </SDenyModal>
    </Modal>
  );
}
