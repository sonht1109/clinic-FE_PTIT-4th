import Button from 'components/Button';
import WithSearch from 'components/Input/WithSearch';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { handleSearch } from './store/actions';
import { ISearchData } from './store/types';
import { SSearch } from './style';

export default function Search() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: ISearchData) => {
    // if (data.keyword !== '') {
    dispatch(handleSearch(data.keyword))
    // }
  }

  return (
    <SSearch>
      <p className="title">DANH MỤC TÀI KHOẢN NGƯỜI DÙNG</p>
      <div className="search">
        <WithSearch.Text
          name="keyword"
          ref={register()}
          placeholder="Nhập số điện thoại, tên"
        />
        <Button onClick={handleSubmit(onSubmit)}>Tìm kiếm</Button>
      </div>
    </SSearch>
  );
}
