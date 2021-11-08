import Button from 'components/Button';
import WithSearchSelect from 'components/Input/WithSearch/Select';
import { SSearch } from '../AdminEventManagement/style';

export default function Search() {
  return (
    <SSearch>
      <span className="search__title">BẢNG XẾP HẠNG</span>
      <div className="search__container">
        <WithSearchSelect options={[]} className="is-first" />
        <Button>Tìm kiếm</Button>
      </div>
    </SSearch>
  );
}
