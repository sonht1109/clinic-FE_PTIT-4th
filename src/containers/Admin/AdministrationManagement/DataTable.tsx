import Pagination from 'components/Pagnination';
import Table from 'components/Table';
import { Children, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleChangePage,
  handleChangePageSize,
  handleSelectRow,
} from './store/actions';
import { theads } from './data';
import { getData } from './store/actions';
import { selectAdministrationManagementStore } from './store/selecters';
import Input from 'components/Input';
import { IUser } from 'containers/App/store/types';

export default function DataTable() {
  const { data, pageNumber, pageSize, total, status, keyword, shouldRefetch } =
    useSelector(selectAdministrationManagementStore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData({ pageSize, pageNumber, status, keyword }));
  }, [pageSize, pageNumber, dispatch, status, keyword, shouldRefetch]);

  return (
    <Table header={theads}>
      {data.length > 0 ? (
        <>
          {Children.toArray(data?.map(e => <TableRow e={e} />))}
          <tr>
            <td colSpan={100}>
              <Pagination
                handleChangePageSize={(size: number) => {
                  dispatch(handleChangePageSize(size));
                }}
                current={pageNumber}
                total={total}
                pageSize={pageSize}
                onChange={(page: number) => {
                  dispatch(handleChangePage(page));
                }}
              />
            </td>
          </tr>
        </>
      ) : (
        <tr>
          <td>Chưa có dữ liệu</td>
        </tr>
      )}
    </Table>
  );
}

const TableRow = ({ e }: { e: IUser }) => {
  const { selectedRow } = useSelector(selectAdministrationManagementStore);
  const dispatch = useDispatch();

  return (
    <>
      <tr onClick={() => dispatch(handleSelectRow(e))}>
        <td>
          <Input.Checkbox checked={selectedRow?.id === e?.id} />
        </td>
        <td>{e?.phone}</td>
        <td className="name_user">{e?.name}</td>
        <td></td>
        <td>{e?.isLocked === false ? 'Đang hoạt động' : 'Bị khóa'}</td>
      </tr>
    </>
  );
};
