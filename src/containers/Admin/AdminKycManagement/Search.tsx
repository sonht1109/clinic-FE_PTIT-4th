import Button from 'components/Button';
import WithSearch from 'components/Input/WithSearch';
import { SSearch } from '../AdminEventManagement/style';
import { Controller, useForm } from 'react-hook-form';
import { statusSearch } from './data';
import { useDispatch } from 'react-redux';
import { handleSearch } from './store/actions';

export default function Search() {
  const { register, handleSubmit, control } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    if (data.status || data.keyword !== '') {
      dispatch(handleSearch(data.status?.value || '', data.keyword));
    }
  };

  return (
    <SSearch>
      <span className="search__title">XÉT DUYỆT KYC</span>
      <div className="search__container">
        <Controller
          control={control}
          name="status"
          render={({ onChange, ref, value, ...rest }) => (
            <WithSearch.Select
              wrapperClassName="is-first"
              placeholder="Trạng thái"
              options={statusSearch}
              {...{ onChange, value }}
              {...rest}
            />
          )}
        />

        <WithSearch.Text
          name="keyword"
          ref={register()}
          placeholder="Tìm kiếm"
        />
        <Button onClick={handleSubmit(onSubmit)}>Tìm kiếm</Button>
      </div>
    </SSearch>
  );
}
