import React, { useEffect, useState } from 'react';
import Modal, { ICoreModal } from 'components/Modal';
import { SAddModal } from '../style';
import WithWrapper from 'components/Input/WithWrapper';
import { useForm } from 'react-hook-form';
import { FaCog, FaPhone, FaUser } from 'react-icons/fa';
import ErrorMessage from 'components/Input/ErrorMessage';
import Button from 'components/Button';
import { requestToken } from 'api/axios';
import API_URL from 'api/url';
import { handleError } from 'helpers';
import { ISelect } from 'configs/types';
import { useIntl } from 'react-intl';
import globalMessages from 'configs/global-message';
import REGEX from 'helpers/regex';
import { useDispatch } from 'react-redux';
import { DataSubmit } from '../store/types';
import { handleRegister } from '../store/actions';
import { Alert } from 'components/Alert';

interface Props extends ICoreModal {}

export default function AddModal({ isOpen, toggleModal }: Props) {
  const { register, control, watch, errors, handleSubmit } = useForm();
  const intl = useIntl();
  const watchPassword = watch('password');

  const dispatch = useDispatch();

  const [groupPermList, setGroupPermList] = useState<ISelect[]>([]);

  const handleSuccess = () => {
    toggleModal(false);
    Alert({ name: 'Thực hiện thêm mới tài khoản thành công', icon: 'success' });
  };

  const onSubmit = (data: DataSubmit) => {
    dispatch(handleRegister(data, handleSuccess));
  };

  useEffect(() => {
    if (isOpen) {
      requestToken({
        method: 'GET',
        url: API_URL.PERMISSION.GET_GROUP,
        params: {
          pageSize: 100,
        },
      })
        .then(res => {
          if (res.data?.data) {
            const list = res.data.data.map((g: any) => ({
              label: g.name,
              value: g.id,
            }));
            setGroupPermList([...list]);
          }
        })
        .catch(err => {
          handleError(err);
        });
    }
  }, [isOpen]);

  return (
    <Modal
      {...{ isOpen, toggleModal }}
      title="Thêm mới tài khoản quản trị"
      overwriteModalStyle={{ maxWidth: '720px' }}
    >
      <SAddModal>
        <form action="" className="form">
          {/* name */}
          <WithWrapper.Text
            inputProps={{
              name: 'name',
              autoComplete: 'new-password',
            }}
            register={register({
              required: intl.formatMessage(
                { ...globalMessages.required },
                {
                  field: 'Họ và tên',
                },
              ),
            })}
            wrapperProps={{
              icon: <FaUser size={12} />,
              label: 'Họ và tên',
              className: 'form-item',
            }}
          />
          <ErrorMessage errors={errors} field="name" />

          {/* phone */}
          <WithWrapper.Text
            inputProps={{
              name: 'phone',
              autoComplete: 'new-password',
            }}
            register={register({
              required: intl.formatMessage(
                { ...globalMessages.required },
                {
                  field: 'Số điện thoại',
                },
              ),
              pattern: {
                message: intl.formatMessage(
                  {
                    ...globalMessages.wrongPattern,
                  },
                  {
                    field: 'Số điện thoại',
                  },
                ),
                value: REGEX.PHONE,
              },
            })}
            wrapperProps={{
              icon: <FaPhone size={12} />,
              label: 'Số điện thoại',
              className: 'form-item',
            }}
          />
          <ErrorMessage errors={errors} field="phone" />

          {/* password */}
          <WithWrapper.Password
            inputProps={{
              name: 'password',
              autoComplete: 'new-password',
            }}
            register={register({
              required: intl.formatMessage(
                { ...globalMessages.required },
                {
                  field: 'Mật khẩu',
                },
              ),
              pattern: {
                message: intl.formatMessage({
                  ...globalMessages.passwordPattern,
                }),
                value: REGEX.PASSWORD,
              },
            })}
            wrapperProps={{
              icon: <FaUser size={12} />,
              label: 'Mật khẩu',
              className: 'form-item',
            }}
          />
          <ErrorMessage errors={errors} field="password" />

          {/* confirm password */}
          <WithWrapper.Password
            inputProps={{
              name: 'confirmPassword',
              autoComplete: 'new-password',
            }}
            register={register({
              required: intl.formatMessage(
                { ...globalMessages.required },
                {
                  field: 'Mật khẩu',
                },
              ),
              pattern: {
                message: intl.formatMessage({
                  ...globalMessages.passwordPattern,
                }),
                value: REGEX.PASSWORD,
              },
              validate: value =>
                value === watchPassword ||
                intl.formatMessage({ ...globalMessages.passwordNotMatch }),
            })}
            wrapperProps={{
              icon: <FaUser size={12} />,
              label: 'Nhập lại mật khẩu',
              className: 'form-item',
            }}
          />
          <ErrorMessage errors={errors} field="confirmPassword" />

          {/* group permission */}
          <WithWrapper.Select
            name="groupPermission"
            selectProps={{
              options: groupPermList,
            }}
            {...{ control, watch }}
            wrapperProps={{
              icon: <FaCog size={12} />,
              label: 'Nhóm quyền',
              className: 'form-item',
            }}
            rules={{
              required: intl.formatMessage(
                { ...globalMessages.required },
                {
                  field: 'Nhóm quyền',
                },
              ),
            }}
          />
          <ErrorMessage errors={errors} field="groupPermission" />
        </form>

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
      </SAddModal>
    </Modal>
  );
}
