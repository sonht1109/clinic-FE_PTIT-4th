import { SLogin } from './styles';
import bannerSrc from 'assets/images/login/banner.png';
import logoSrc from 'assets/images/layout/logo-green.png';
import { FaLock, FaPhone } from 'react-icons/fa';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import ErrorMessage from 'components/Input/ErrorMessage';
import REGEX from 'helpers/regex';
import { useIntl } from 'react-intl';
import globalMessages from 'configs/global-message';
import { requestInter } from 'api/axios';
import { handleError } from 'helpers';
import API_URL from 'api/url';
import { useHistory } from 'react-router';
import WithWrapper from 'components/Input/WithWrapper';
import useModal from 'hooks/useModal';
import { useState } from 'react';
import loadable from 'components/Loading/Loadable';

const CodeModal = loadable(() => import('./CodeModal'));

export default function Login() {
  const intl = useIntl();
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const [token, setToken] = useState<string>('');

  const { isOpen, toggleModal } = useModal();

  const onSubmit = (data: any) => {
    requestInter({ method: 'POST', url: API_URL.AUTH.LOGIN, data })
      .then(res => {
        if (res.data?.token) {
          if (res.data?.twoFaAuthenticate) {
            toggleModal(true);
            setToken(res.data?.token);
          } else {
            localStorage.setItem('token', res.data?.token);
            history.push(`/`);
          }
        }
      })
      .catch(err => handleError(err));
  };

  return (
    <>
      <SLogin>
        <div className="login__container">
          <div className="login__col login__col-left">
            <img src={bannerSrc} alt="" />
          </div>
          <div className="login__col login__col-right">
            <div className="col-right__container">
              <img
                className="col-right__logo"
                src={logoSrc}
                alt="logo"
                width={94}
                height={30}
              />
              <h2 className="col-right__header">Đăng nhập</h2>
              <form
                action=""
                className="col-right__form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <WithWrapper.Text
                  inputProps={{
                    type: 'tel',
                    name: 'phone',
                    autoComplete: 'new-password',
                  }}
                  wrapperProps={{
                    label: 'Số điện thoại',
                    icon: <FaPhone size={12} />,
                    className: 'form-item',
                  }}
                  register={register({
                    required: intl.formatMessage(
                      { ...globalMessages.required },
                      { field: globalMessages.phone.defaultMessage },
                    ),
                    pattern: {
                      value: REGEX.PHONE,
                      message: intl.formatMessage(
                        { ...globalMessages.wrongPattern },
                        { field: globalMessages.phone.defaultMessage },
                      ),
                    },
                  })}
                />
                <ErrorMessage errors={errors} field="phone" />

                <WithWrapper.Password
                  inputProps={{
                    name: 'password',
                    autoComplete: 'new-password',
                  }}
                  wrapperProps={{
                    label: 'Mật khẩu',
                    className: 'form-item',
                    icon: <FaLock size={12} />,
                  }}
                  register={register({
                    required: intl.formatMessage(
                      { ...globalMessages.required },
                      { field: globalMessages.password.defaultMessage },
                    ),
                    pattern: {
                      value: REGEX.PASSWORD,
                      message: intl.formatMessage({
                        ...globalMessages.passwordPattern,
                      }),
                    },
                  })}
                />
                <ErrorMessage errors={errors} field="password" />

                <Button type="submit">Đăng nhập</Button>
              </form>
            </div>
          </div>
        </div>
      </SLogin>

      {token !== '' && <CodeModal {...{ isOpen, toggleModal, token }} />}
    </>
  );
}
