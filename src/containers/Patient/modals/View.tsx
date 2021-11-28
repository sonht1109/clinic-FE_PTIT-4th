import { Alert } from 'components/Alert';
import Button from 'components/Button';
import FormSection from 'components/FormSection';
import ErrorMessage from 'components/Input/ErrorMessage';
import WithWrapper from 'components/Input/WithWrapper';
import Modal, { ICoreModal, SModalContent } from 'components/Modal';
import { Children, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { viewFields } from '../data';
import { onCreate, onUpdate } from '../store/actions';
import { selectPatientStore } from '../store/selecters';

interface Props extends ICoreModal {
  isCreating?: boolean;
}

export default function View({
  isOpen,
  toggleModal,
  title,
  isCreating = true,
}: Props) {
  const t = useIntl();

  const { register, errors, control, setValue, watch, handleSubmit } =
    useForm();

  const { selectedRow } = useSelector(selectPatientStore);

  const ds = useDispatch();

  useEffect(() => {
    if (selectedRow && isOpen && !isCreating) {
      setValue('patient', selectedRow);
      setValue(
        'patient.birthDate',
        !isNaN(new Date(selectedRow.birthDate).getTime())
          ? new Date(selectedRow.birthDate)
          : null,
      );
    }
  }, [selectedRow, setValue, isOpen, isCreating]);

  const onSubmit = (data: any) => {
    if (isCreating) {
      ds(
        onCreate(data.patient, () => {
          Alert({ name: 'Thực hiện tạo mới thành công' });
          toggleModal(false);
        }),
      );
    } else {
      ds(
        onUpdate({ ...data.patient, id: selectedRow?.id }, () => {
          Alert({ name: 'Thực hiện cập nhật thành công' });
          toggleModal(false);
        }),
      );
    }
  };

  return (
    <Modal {...{ isOpen, toggleModal, title }}>
      <SModalContent>
        <FormSection>
          {Children.toArray(
            viewFields(t).map(f => {
              return (
                <div className="form-item">
                  {['text', 'tel', 'number'].includes(f.type) ? (
                    <WithWrapper.Text
                      wrapperProps={{ label: f.label, icon: f.icon }}
                      register={register({ ...f.rules })}
                      inputProps={{ name: f.name, type: f.type }}
                    />
                  ) : f.type === 'date' ? (
                    <WithWrapper.Date
                      watch={watch}
                      control={control}
                      setValue={setValue}
                      name={f.name}
                      rules={f.rules}
                      wrapperProps={{
                        label: f.label,
                      }}
                    />
                  ) : null}
                  <ErrorMessage errors={errors} field={f.name} />
                </div>
              );
            }),
          )}
        </FormSection>
        <div className="group-button">
          <Button onClick={handleSubmit(onSubmit)}>Lưu</Button>
        </div>
      </SModalContent>
    </Modal>
  );
}
