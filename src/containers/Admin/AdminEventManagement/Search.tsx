import Button from 'components/Button';
import WithSearch from 'components/Input/WithSearch';
import { SSearch } from './style';
import { statusSearch } from './data';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { handleSearch } from './store/actions';
import { ISearchData } from './store/types';

export default function Search() {
  const { register, handleSubmit, control } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: ISearchData) => {
    if (data.status || data.keyword !== '') {
      dispatch(handleSearch(data.status?.value || '', data.keyword));
    }
  };

  return (
    <SSearch>
      <div className="search__container">
        <Controller
          control={control}
          name="status"
          render={({ ref, onChange, value, ...rest }) => (
            <WithSearch.Select
              {...rest}
              {...{ onChange, value }}
              options={statusSearch}
              wrapperClassName="is-first"
              placeholder="Trạng thái"
            />
          )}
        />

        <WithSearch.Text
          name="keyword"
          ref={register()}
          placeholder="Mã sự kiện, tên sự kiện, tài khoản tạo"
        />
        <Button onClick={handleSubmit(onSubmit)}>Tìm kiếm</Button>
      </div>
    </SSearch>
  );
}
