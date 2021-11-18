import { SLogin } from './styles';
import bannerSrc from 'assets/images/login/banner.png';
import logoSrc from 'assets/images/layout/logo-2.png';
import { FaLock, FaPhone, FaUserAlt } from 'react-icons/fa';
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

export default function Login() {
  const intl = useIntl();
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory()

  // son
  // 123456

  const onSubmit = (data: any) => {
    requestInter({ method: 'POST', url: API_URL.AUTH.LOGIN, data })
      .then(res => {
        if (res.data) {
          console.log(res.data)
          localStorage.setItem('token', res.data.split("N04LTW ")[1]);
          history.push(`/`);
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
                width={100}
                height={'auto'}
              />
              <h2 className="col-right__header">Đăng nhập</h2>
              <form
                action=""
                className="col-right__form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <WithWrapper.Text
                  inputProps={{
                    name: 'username',
                    autoComplete: 'new-password',
                  }}
                  wrapperProps={{
                    label: 'Username',
                    icon: <FaUserAlt size={12} />,
                    className: 'form-item',
                  }}
                  register={register({
                    required: intl.formatMessage(
                      { ...globalMessages.required },
                      { field: globalMessages.phone.defaultMessage },
                    ),
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
                      value: REGEX.PASSWORD_ANY,
                      message: intl.formatMessage({
                        ...globalMessages.passwordAnyPattern,
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
    </>
  );
}
