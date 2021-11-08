import { requestInterToken } from 'api/axios';
import API_URL from 'api/url';
import Button from 'components/Button';
import ErrorMessage from 'components/Input/ErrorMessage';
import WithWrapper from 'components/Input/WithWrapper';
import Modal, { ICoreModal } from 'components/Modal';
import globalMessages from 'configs/global-message';
import { handleError } from 'helpers';
import { useForm } from 'react-hook-form';
import { FaKey } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router';
import { SCodeModal } from './styles';

interface Props extends ICoreModal {
  token: string;
}

export default function CodeModal({ isOpen, toggleModal, token }: Props) {
  const { register, errors, handleSubmit } = useForm();

  const intl = useIntl();
  const history = useHistory();

  const onSubmit = (data: any) => {
    requestInterToken({
      method: 'POST',
      url: API_URL.AUTH.VERIFY_FA,
      data: { ...data },
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => {
        if (res.data?.token) {
          localStorage.setItem('token', res.data?.token);
          history.push(`/`);
        }
      })
      .catch(err => {
        handleError(err);
      });
  };

  return (
    <Modal title="Nhập code" {...{ isOpen, toggleModal }} overwriteModalStyle={{
      maxWidth: "500px"
    }}>
      <SCodeModal as="form" onSubmit={handleSubmit(onSubmit)}>
        <WithWrapper.Text
          wrapperProps={{
            icon: <FaKey size={12} />,
            label: 'Nhập mã code',
          }}
          inputProps={{
            name: 'twoFaToken',
            autoFocus: true,
            autoComplete: "new-password"
          }}
          register={register({
            required: intl.formatMessage(
              { ...globalMessages.required },
              {
                field: 'Mã code',
              },
            ),
          })}
        />

        <ErrorMessage errors={errors} field="twoFaToken" />

        <div className="group-button">
          <Button
            type="button"
            width="152px"
            height="40px"
            background="white"
            color="#718098"
            onClick={() => toggleModal(false)}
          >
            Hủy bỏ
          </Button>
          <Button width="152px" height="40px" type="submit">
            Xác nhận
          </Button>
        </div>
      </SCodeModal>
    </Modal>
  );
}
