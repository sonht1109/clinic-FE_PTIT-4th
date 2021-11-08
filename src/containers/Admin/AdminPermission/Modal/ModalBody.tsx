import React, { Children, useCallback, useEffect, useMemo } from 'react';
import { IGroupPermission } from '../store/types';
import { permissionStatus, permissionTheads, slicedTheads } from '../data';
import { SDetailModal } from '../style';
import { FaCog, FaInfo, FaToggleOn } from 'react-icons/fa';
import globalMessages from 'configs/global-message';
import ErrorMessage from 'components/Input/ErrorMessage';
import WithWrapper from 'components/Input/WithWrapper';
import { Control, FieldValues, useForm, useWatch } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdminPermissionStore } from '../store/selecters';
import Table from 'components/Table';
import adminPermissionMessages from '../store/message-trans';
import Checkbox from 'components/Input/Checkbox';
import Button from 'components/Button';
import { requestInterToken } from 'api/axios';
import API_URL from 'api/url';
import { handleRefetch, handleSelectRow } from '../store/actions';
import { handleError } from 'helpers';
import { Alert } from 'components/Alert';

interface Props {
  selectedRow?: IGroupPermission | null;
  handleClose: () => void;
}

interface ICheckbox {
  control: Control<FieldValues>;
  setValue: any;
  name: string;
}

export default function ModalBody({ selectedRow, handleClose }: Props) {
  const intl = useIntl();
  const { register, control, watch, errors, handleSubmit, setValue } = useForm({
    shouldUnregister: true,
  });

  const { permissions } = useSelector(selectAdminPermissionStore);

  const dispatch = useDispatch();
  const isCreating = selectedRow?.id ? false : true;

  useEffect(() => {
    if (selectedRow) {
      setValue('name', selectedRow?.name);
      setValue('desc', selectedRow?.description);
      setValue(
        'status',
        permissionStatus.filter(
          p => selectedRow?.status.toString() === p.value,
        )[0],
      );
    }
  }, [selectedRow, setValue]);

  const mappedTheads = useMemo(() => {
    return permissionTheads.map(t => ({
      name:
        t.name !== '#'
          ? intl.formatMessage({ ...(adminPermissionMessages as any)[t.name] })
          : t.name,
      colspan: t?.colspan,
    }));
  }, [intl]);

  const tbody = useCallback(() => {
    return Children.toArray(
      permissions.map((p, i) => {
        register({ name: `permissions[${i}].name`, value: p.name });
        register({ name: `permissions[${i}].code`, value: Number(p.code) });

        const thisPermissionInSelectedRow = selectedRow
          ? selectedRow?.permissions.filter(srp => srp.code === p.code)[0]
          : null;
        return (
          <tr>
            <td>{i + 1}</td>
            <td>{p?.name}</td>
            {Children.toArray(
              slicedTheads.map(j => {
                const name = `permissions[${i}].options[${j.name}]`;
                register({name, value: thisPermissionInSelectedRow?.options[0][j.name] || false});
                return <CheckboxContainer {...{ setValue, control, name }} />;
              }),
            )}
          </tr>
        );
      }),
    );
  }, [permissions, register, control, setValue, selectedRow]);

  const onCancel = () => {
    handleClose();
  };

  const onSubmit = (data: any) => {
    if (data?.status) {
      data.status = Number(data.status.value);
    }
    if (data?.permissions) {
      data.permissions = data.permissions.map((p: any) => ({
        ...p,
        options: Object.keys(p.options).filter(key => p.options[key]),
      }));
    }

    requestInterToken({
      method: !isCreating ? 'PUT' : 'POST',
      url: selectedRow?.id
        ? API_URL.PERMISSION.UPDATE(selectedRow?.id)
        : API_URL.PERMISSION.CREATE,
      data,
    })
      .then(() => {
        dispatch(handleRefetch());
        dispatch(handleSelectRow(null));
        handleClose();
        Alert({
          name: isCreating
            ? 'Thêm mới nhóm quyền thành công'
            : 'Chỉnh sửa nhóm quyền thành công',
          icon: 'success',
        });
      })
      .catch(err => {
        handleError(err);
      });
  };

  return (
    <SDetailModal>
      <div className="body__input">
        <div className="input-item">
          <WithWrapper.Text
            inputProps={{
              name: 'name',
            }}
            wrapperProps={{
              label: 'Tên nhóm quyền',
              icon: <FaCog size={12} />,
            }}
            register={register({
              required: intl.formatMessage(
                { ...globalMessages.required },
                { field: 'Tên nhóm quyền' },
              ),
            })}
          />
          <ErrorMessage errors={errors} field="name" />
        </div>

        <div className="input-item">
          <WithWrapper.Select
            selectProps={{
              options: permissionStatus,
            }}
            name="status"
            wrapperProps={{
              label: 'Trạng thái',
              icon: <FaToggleOn size={12} />,
            }}
            {...{ watch, control }}
            rules={{
              required: intl.formatMessage(
                { ...globalMessages.required },
                { field: 'Trạng thái' },
              ),
            }}
          />
          <ErrorMessage errors={errors} field="status" />
        </div>

        <div className="input-item">
          <WithWrapper.Text
            inputProps={{
              name: 'desc',
            }}
            wrapperProps={{
              label: 'Chi tiết',
              icon: <FaInfo size={12} />,
            }}
            register={register({
              required: intl.formatMessage(
                { ...globalMessages.required },
                { field: 'Chi tiết' },
              ),
            })}
          />
          <ErrorMessage errors={errors} field="desc" />
        </div>
      </div>

      <div className="body__table">
        <Table header={mappedTheads} minWidth="1000px">
          {tbody()}
        </Table>
      </div>

      <div className="body__button">
        <Button
          width="152px"
          height="40px"
          color="#718098"
          border="1px solid#00CB82"
          background="white"
          onClick={onCancel}
        >
          Huỷ bỏ
        </Button>
        <Button width="152px" height="40px" onClick={handleSubmit(onSubmit)}>
          Lưu
        </Button>
      </div>
    </SDetailModal>
  );
}

const CheckboxContainer = (props: ICheckbox) => {
  const { control, setValue, name } = props;

  const watchValue = useWatch({
    control,
    name,
  }) as boolean;

  return (
    <td
      onClick={() => {
        setValue(name, !watchValue);
      }}
    >
      {' '}
      <Checkbox checked={watchValue} />
    </td>
  );
};
