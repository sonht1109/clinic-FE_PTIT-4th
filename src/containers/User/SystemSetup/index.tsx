/*
 *
 * SystemSetup
 * make by phamthainb
 */

import React, { memo, useCallback, useEffect, useState } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersSystemSetup from './store/reducers';
import WrapSystemSetup, { SModalOff, SModalOn } from './style';
import systemIcon from 'assets/images/system-authen.png';
import apple from 'assets/images/apple.png';
import android from 'assets/images/android.png';
import Button from 'components/Button';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import { ILink } from 'components/Breadcum';
import Input from 'components/Input';
import { useForm } from 'react-hook-form';
import { MdGTranslate } from 'react-icons/md';
import { FaLock, FaPhoneAlt } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { requestInterToken, requestToken } from 'api/axios';
import API_URL from 'api/url';
import { Alert } from 'components/Alert';
import { getInformations } from './store/actions';
import ErrorMessage from 'components/Input/ErrorMessage';
import WithWrapper from 'components/Input/WithWrapper';
import { useIntl } from 'react-intl';
import globalMessages from 'configs/global-message';
import REGEX from 'helpers/regex';
import { selectAppStore } from 'containers/App/store/selecters';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal';
import copy from 'assets/images/Copy.png';

interface Props {}

const breadcumLinks: ILink[] = [
  {
    name: 'Trang chủ',
  },
  {
    name: 'Thiết lập hệ thống',
  },
  {
    name: 'Cài đặt',
  },
];

// eslint-disable-next-line
function SystemSetup({}: Props) {
  useInjectReducer('SystemSetup', reducersSystemSetup);
  return (
    <ErrorBound>
      <ColRightWrapper header="Thông tin cá nhân" links={breadcumLinks}>
        <WrapSystemSetup>
          <div className="setup-container">
            <Authen2Step />
            <InfoToRestore />
            <ChangePassword />
            <ChangeLanguage />
          </div>
        </WrapSystemSetup>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(SystemSetup);

// -----------------------
//----------------------
//----------------------

const Authen2Step = () => {
  const { isOpen, toggleModal } = useModal();
  // const intl = useIntl();
  const { info } = useSelector(selectAppStore);
  // useEffect(() => {
  //   console.log(info);
  // })
  return (
    <div className="setup-item">
      <div className="title">Xác minh 2 bước</div>
      <div className="content authen">
        <div className="authen-item google-authen">
          <img src={systemIcon} alt="" />
          <div className="desc">Google authenticator</div>
        </div>
        <div className="authen-item apple-authen">
          <div className="left">
            <img src={apple} alt="" />
          </div>
          <div className="right">
            <div className="bold">Available on the</div>
            <div>App Store</div>
          </div>
        </div>
        <div className="authen-item android-authen">
          <div className="left">
            <img src={android} alt="" />
          </div>
          <div className="right">
            <div className="bold">Available on the</div>
            <div>Google Play</div>
          </div>
        </div>
        <div className="warning">
          Bật Chức năng này giúp bảo mật tài khoản của bạn hơn mỗi khi tiến hành
          đăng nhập
        </div>
        <div className="button-group">
          <Button onClick={() => toggleModal(true)}>
            {info?.isTwoFa ? 'Tắt' : 'Bật'}
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        toggleModal={toggleModal}
        title="Thông báo"
        overwriteModalStyle={{ maxWidth: 560 }}
      >
        {info?.isTwoFa ? (
          <ModalOff toggleModal={toggleModal} />
        ) : (
          <ModalOn toggleModal={toggleModal} />
        )}
      </Modal>
    </div>
  );
};

const ModalOn = ({ toggleModal }: { toggleModal: any }) => {
  const { register, handleSubmit, errors } = useForm();
  const intl = useIntl();
  const dispatch = useDispatch();
  const [secret, setSecret] = useState('');
  const [qr, setQr] = useState('');

  useEffect(() => {
    requestToken({
      method: 'GET',
      url: API_URL.SECURITY.GET_QR,
      data: null,
    })
      .then(res => {
        dispatch(getInformations());
        setQr(res.data.payload);
        setSecret(res.data.secret);
        Alert({ name: 'Lấy dữ liệu thành công', icon: 'success' });
      })
      .catch(err => {
        Alert({
          name: err.message,
          icon: 'error',
        });
      });
  }, [dispatch]);
  const onSubmit = (value: any) => {
    const { token, secret } = value;
    requestToken({
      method: 'POST',
      url: API_URL.SECURITY.POST_TWO_FA,
      data: {
        type: 'on',
        token,
        secret,
      },
    })
      .then(() => {
        dispatch(getInformations());
        toggleModal(false);
        Alert({ name: 'Mở xác minh 2 bước thành công', icon: 'success' });
      })
      .catch(err => {
        Alert({
          name: err.message,
          icon: 'error',
        });
      });
  };
  return (
    <SModalOn>
      <div className="qr">
        <div className="qr-img">{qr && <img src={qr} alt="" />}</div>
        <div className="copy">
          <input
            type="text"
            className="input-qr"
            value={secret}
            readOnly
            name="secret"
            id="myInput"
            ref={register}
          />
          <Button
            width="72px"
            height="32px"
            fontWeight={500}
            fontSize="14px"
            id="buttonCopy"
            onClick={() => {
              var copyText: any = document.getElementById('myInput');
              copyText.select();
              copyText.setSelectionRange(0, 99999);
              document.execCommand('copy');
              let buttonCopy: any = document.getElementById('buttonCopy');
              buttonCopy.innerHTML = 'Copied';
            }}
          >
            <img src={copy} alt="" />
            Copy
          </Button>
        </div>
      </div>

      <div className="note">
        <span>Chú ý: </span> It is a long established fact that a reader will be
        distracted by the readable content of a page when
      </div>
      <div className="handle-item">
        <WithWrapper.Text
          inputProps={{
            type: 'tel',
            name: 'token',
          }}
          wrapperProps={{
            label: 'Nhập mã',
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.9 2H4.6C4.8 2.6 5.35 3 6 3C6.65 3 7.2 2.6 7.4 2H9.1C9.3 2.6 9.85 3 10.5 3C11.35 3 12 2.35 12 1.5C12 0.65 11.35 0 10.5 0C9.85 0 9.3 0.4 9.1 1H7.4C7.2 0.4 6.65 0 6 0C5.35 0 4.8 0.4 4.6 1H2.9C2.7 0.4 2.15 0 1.5 0C0.65 0 0 0.65 0 1.5C0 2.15 0.4 2.7 1 2.9V4.6C0.4 4.8 0 5.35 0 6C0 6.85 0.65 7.5 1.5 7.5C2.15 7.5 2.7 7.1 2.9 6.5H4.6C4.8 7.1 5.35 7.5 6 7.5C6.65 7.5 7.2 7.1 7.4 6.5H9.1C9.25 6.9 9.6 7.25 10 7.4V9.1C9.6 9.25 9.25 9.6 9.1 10H7.4C7.2 9.4 6.65 9 6 9C5.35 9 4.8 9.4 4.6 10H2.9C2.7 9.4 2.15 9 1.5 9C0.65 9 0 9.65 0 10.5C0 11.35 0.65 12 1.5 12C2.15 12 2.7 11.6 2.9 11H4.6C4.8 11.6 5.35 12 6 12C6.65 12 7.2 11.6 7.4 11H9.1C9.3 11.6 9.85 12 10.5 12C11.35 12 12 11.35 12 10.5C12 9.85 11.6 9.3 11 9.1V7.4C11.6 7.2 12 6.65 12 6C12 5.15 11.35 4.5 10.5 4.5C9.85 4.5 9.3 4.9 9.1 5.5H7.4C7.2 4.9 6.65 4.5 6 4.5C5.35 4.5 4.8 4.9 4.6 5.5H2.9C2.75 5.1 2.4 4.75 2 4.6V2.9C2.4 2.75 2.75 2.4 2.9 2Z"
                  fill="#00CB82"
                />
              </svg>
            ),
            className: 'form-item',
          }}
          register={register({
            required: intl.formatMessage(
              { ...globalMessages.required },
              { field: globalMessages.token.defaultMessage },
            ),
          })}
        />
        <ErrorMessage errors={errors} field="token" />
      </div>
      <div className="button-group">
        <Button
          background="white"
          color="#718098"
          onClick={() => {
            toggleModal(false);
          }}
        >
          Hủy bỏ
        </Button>
        <Button onClick={handleSubmit(onSubmit)}>Bật</Button>
      </div>
    </SModalOn>
  );
};

const ModalOff = ({ toggleModal }: { toggleModal: any }) => {
  const { register, handleSubmit, errors } = useForm();
  const intl = useIntl();
  const { info } = useSelector(selectAppStore);
  const [secret, setSecret] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (info) {
      setSecret(info.secret);
    }
  }, [info]);

  const onSubmit = (value: any) => {
    const { token } = value;
    requestToken({
      method: 'POST',
      url: API_URL.SECURITY.POST_TWO_FA,
      data: {
        type: 'off',
        token,
        secret,
      },
    })
      .then(() => {
        dispatch(getInformations());
        toggleModal(false);
        Alert({ name: 'Tắt xác minh 2 bước thành công', icon: 'success' });
      })
      .catch(err => {
        Alert({
          name: err.message,
          icon: 'error',
        });
      });
  };

  return (
    <SModalOff>
      <div className="handle-item">
        <WithWrapper.Text
          inputProps={{
            type: 'tel',
            name: 'token',
          }}
          wrapperProps={{
            label: 'Nhập mã để tắt',
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.9 2H4.6C4.8 2.6 5.35 3 6 3C6.65 3 7.2 2.6 7.4 2H9.1C9.3 2.6 9.85 3 10.5 3C11.35 3 12 2.35 12 1.5C12 0.65 11.35 0 10.5 0C9.85 0 9.3 0.4 9.1 1H7.4C7.2 0.4 6.65 0 6 0C5.35 0 4.8 0.4 4.6 1H2.9C2.7 0.4 2.15 0 1.5 0C0.65 0 0 0.65 0 1.5C0 2.15 0.4 2.7 1 2.9V4.6C0.4 4.8 0 5.35 0 6C0 6.85 0.65 7.5 1.5 7.5C2.15 7.5 2.7 7.1 2.9 6.5H4.6C4.8 7.1 5.35 7.5 6 7.5C6.65 7.5 7.2 7.1 7.4 6.5H9.1C9.25 6.9 9.6 7.25 10 7.4V9.1C9.6 9.25 9.25 9.6 9.1 10H7.4C7.2 9.4 6.65 9 6 9C5.35 9 4.8 9.4 4.6 10H2.9C2.7 9.4 2.15 9 1.5 9C0.65 9 0 9.65 0 10.5C0 11.35 0.65 12 1.5 12C2.15 12 2.7 11.6 2.9 11H4.6C4.8 11.6 5.35 12 6 12C6.65 12 7.2 11.6 7.4 11H9.1C9.3 11.6 9.85 12 10.5 12C11.35 12 12 11.35 12 10.5C12 9.85 11.6 9.3 11 9.1V7.4C11.6 7.2 12 6.65 12 6C12 5.15 11.35 4.5 10.5 4.5C9.85 4.5 9.3 4.9 9.1 5.5H7.4C7.2 4.9 6.65 4.5 6 4.5C5.35 4.5 4.8 4.9 4.6 5.5H2.9C2.75 5.1 2.4 4.75 2 4.6V2.9C2.4 2.75 2.75 2.4 2.9 2Z"
                  fill="#00CB82"
                />
              </svg>
            ),
            className: 'form-item',
          }}
          register={register({
            required: intl.formatMessage(
              { ...globalMessages.required },
              { field: globalMessages.token.defaultMessage },
            ),
          })}
        />
        <ErrorMessage errors={errors} field="token" />
      </div>
      <div className="button-group">
        <Button
          background="white"
          color="#718098"
          onClick={() => {
            toggleModal(false);
          }}
        >
          Hủy bỏ
        </Button>
        <Button onClick={handleSubmit(onSubmit)}>Xác nhận</Button>
      </div>
    </SModalOff>
  );
};

//-------------------
//-------------------
//--------------------
const InfoToRestore = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const { info } = useSelector(selectAppStore);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (value: any) => {
    const { emailRestore, phoneRestore, currentPassword } = value;
    console.log(value);
    requestToken({
      method: 'PUT',
      url: API_URL.SECURITY.RESTORE_INFO,
      data: {
        emailRestore,
        phoneRestore,
        currentPassword,
      },
    })
      .then(res => {
        localStorage.setItem(
          'infor',
          JSON.stringify({
            ...info,
            emailRestore,
            phoneRestore,
          }),
        );
        dispatch(getInformations());
        Alert({ name: 'Update thông tin thành công', icon: 'success' });
      })
      .catch(err => {
        Alert({
          name: err.message,
          icon: 'error',
        });
      });
  };

  useEffect(() => {
    dispatch(getInformations());
  }, [dispatch]);
  return (
    <div className="setup-item">
      <div className="title">
        THÔNG TIN XÁC MINH KHI CẦN KHÔI PHỤC TÀI KHOẢN GỐC
      </div>
      <div className="content">
        <div className="handle-item">
          <WithWrapper.Text
            inputProps={{
              type: 'tel',
              name: 'phoneRestore',
              autoComplete: 'off',
            }}
            wrapperProps={{
              label: 'Số điện thoại khôi phục',
              icon: <FaPhoneAlt size={16} />,
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
          <ErrorMessage errors={errors} field="phoneRestore" />
        </div>
        <div className="handle-item">
          <WithWrapper.Text
            inputProps={{
              type: 'email',
              name: 'emailRestore',
              autoComplete: 'off',
            }}
            wrapperProps={{
              label: 'Email khôi phục',
              icon: <AiFillMail size={16} />,
              className: 'form-item',
            }}
            register={register({
              required: intl.formatMessage(
                { ...globalMessages.required },
                { field: globalMessages.email.defaultMessage },
              ),
              pattern: {
                value: REGEX.EMAIL,
                message: intl.formatMessage(
                  { ...globalMessages.wrongPattern },
                  { field: globalMessages.email.defaultMessage },
                ),
              },
            })}
          />
          <ErrorMessage errors={errors} field="emailRestore" />
        </div>
        <div className="handle-item"> 
          <WithWrapper.Password
            inputProps={{
              name: 'currentPassword',
              autoComplete: 'new-password',
            }}
            wrapperProps={{
              label: 'Mật khẩu hiện tại',
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
          <ErrorMessage errors={errors} field="currentPassword" />
        </div>
      </div>
      <div className="button-group">
        {/* <Button background="white" color="#718098">
          Hủy bỏ
        </Button> */}
        <Button onClick={handleSubmit(onSubmit)}>Lưu lại</Button>
      </div>
    </div>
  );
};

//--------------------
//--------------------
//--------------------
const ChangePassword = () => {
  const intl = useIntl();
  const { register, handleSubmit, errors, setValue } = useForm();
  // const watchValue = watch(['newPass', 'confirmNewPass']);
  const onSubmit = (value: any) => {
    const { oldPass, newPass, confirmNewPass } = value;
    if (newPass !== confirmNewPass) {
      Alert({
        name: 'Mật khẩu không khớp',
        icon: 'error',
      });
    } else if (!REGEX.PASSWORD.test(newPass)) {
      Alert({
        name: 'Mật khẩu phải chứa 8 ký tự, bao gồm chữ hoa, chữ thường và ký tự đặc biệt',
        icon: 'error',
      });
    } else {
      requestToken({
        method: 'PUT',
        url: API_URL.SECURITY.CHANGFGE_PASSWORD,
        data: {
          oldPass,
          newPass,
          confirmNewPass,
        },
      })
        .then(res => {
          Alert({ name: 'Đổi mật khẩu thành công', icon: 'success' });
        })
        .catch(err => {
          Alert({
            name: err.message,
            icon: 'error',
          });
        });
    }
  };
  return (
    <div className="setup-item">
      <div className="title">Thay đổi mật khẩu</div>
      <div className="content">
        <div className="handle-item">
          <WithWrapper.Password
            inputProps={{
              name: 'oldPass',
              autoComplete: 'new-password',
            }}
            wrapperProps={{
              label: 'Mật khẩu cũ',
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
          <ErrorMessage errors={errors} field="oldPass" />
        </div>
        <div className="handle-item">
          <WithWrapper.Password
            inputProps={{
              name: 'newPass',
              autoComplete: 'new-password',
            }}
            wrapperProps={{
              label: 'Mật khẩu mới',
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
          <ErrorMessage errors={errors} field="newPass" />
        </div>
        <div className="handle-item">
          <WithWrapper.Password
            inputProps={{
              name: 'confirmNewPass',
              autoComplete: 'new-password',
            }}
            wrapperProps={{
              label: 'Nhập lại mật khẩu',
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
          <ErrorMessage errors={errors} field="confirmNewPass" />
        </div>
      </div>
      <div className="button-group">
        {/* <Button
          background="white"
          color="#718098"
          onClick={() => {
            setValue('oldPass', undefined);
            setValue('newPass', undefined);
            setValue('confirmNewPass', undefined);
          }}
        >
          Hủy bỏ
        </Button> */}
        <Button onClick={handleSubmit(onSubmit)}>Lưu lại</Button>
      </div>
    </div>
  );
};

//--------------------
//--------------------
//--------------------
const ChangeLanguage = () => {
  const onChangeLang = useCallback((lang: string) => {
    requestInterToken({
      method: 'PUT',
      url: API_URL.USER.UPDATE_INFO,
      data: { language: lang },
    })
      .then(res => {
        Alert({ name: 'Đổi ngôn ngữ thành công', icon: 'success' });

        localStorage.setItem('infor', JSON.stringify(res.data));
      })
      .catch(err => {
        Alert({
          name: err.message,
          icon: 'error',
        });
      });
  }, []);
  return (
    <div className="setup-item change-language">
      <div className="title">Cài đặt ngôn ngữ</div>
      <div className="content">
        <div className="handle-item">
          <div className="handle-item">
            <Input.Wrapper
              isLabelOnTop
              //hasDropdown
              label="Ngôn ngữ"
              icon={<MdGTranslate size={16} />}
            >
              <Input.Select
                options={[
                  { label: 'Tiếng Việt', value: 'vi' },
                  { label: 'Tiếng Anh', value: 'en' },
                ]}
                defaultValue={{ label: 'Tiếng Việt', value: 'vi' }}
                onChange={e => {
                  if (e) onChangeLang(e?.value);
                }}
              />
            </Input.Wrapper>
          </div>
        </div>
      </div>
    </div>
  );
};
