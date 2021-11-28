import { Alert } from 'components/Alert';
import Button from 'components/Button';
import FormSection from 'components/FormSection';
import ErrorMessage from 'components/Input/ErrorMessage';
import WithWrapper from 'components/Input/WithWrapper';
import Modal, { ICoreModal, SModalContent } from 'components/Modal';
import { Children, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { viewFields } from '../data';
import { getDrugs, onCreate, onUpdate } from '../store/actions';
import { selectDiseaseStore } from '../store/selecters';
import { ISelect } from 'configs/types';
import { FaCaretDown } from 'react-icons/fa';
import Async from 'react-select/async';
import Wrapper from 'components/Input/Wrapper';
import debounce from 'lodash.debounce';
import { SAsync } from 'components/Input/Select';

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

  const { selectedRow } = useSelector(selectDiseaseStore);

  const ds = useDispatch();

  const [drugs, setDrugs] = useState<ISelect[]>([]);

  useEffect(() => {
    if (selectedRow && isOpen && !isCreating) {
      setValue('disease', selectedRow);
      // setDrugs([...selectedRow.drugs]);
    }
  }, [selectedRow, setValue, isOpen, isCreating]);

  const onSubmit = (data: any) => {
    const mappedDrugs = drugs.map(d => ({
      id: d.value,
    }));

    if (isCreating) {
      ds(
        onCreate({ ...data.disease, drugs: mappedDrugs }, () => {
          Alert({ name: 'Thực hiện tạo mới thành công' });
          toggleModal(false);
        }),
      );
    } else {
      ds(
        onUpdate(
          { ...data.disease, id: selectedRow?.id, drugs: mappedDrugs },
          () => {
            Alert({ name: 'Thực hiện cập nhật thành công' });
            toggleModal(false);
          },
        ),
      );
    }
  };

  const loadOptions = (name: string, callback: any) => {
    getDrugs({ name, onSuccess: callback });
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
                  ) : f.type === 'select' ? (
                    f.name === 'disease.drugs' ? (
                      <Wrapper
                        label={f.label}
                        icon={f.icon}
                        isLabelOnTop={true}
                        rightIcon={<FaCaretDown size={16} />}
                      >
                        <SAsync>
                          <Async
                            cacheOptions
                            defaultOptions
                            isMulti
                            onChange={(val: any) => {
                              setDrugs([...val]);
                            }}
                            loadOptions={debounce(loadOptions, 500)}
                            components={{
                              IndicatorSeparator: () => null,
                              DropdownIndicator: () => null,
                            }}
                            classNamePrefix="rs"
                            placeholder="Nhập tên thuốc"
                          />
                        </SAsync>
                      </Wrapper>
                    ) : null
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
