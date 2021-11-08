import Table from 'components/Table';
import { Children, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getData,
  getPermissions,
  handleChangePage,
  handleChangePageSize,
  handleSelectRow,
} from './store/actions';
import { theads } from './data';
import { selectAdminPermissionStore } from './store/selecters';
import Pagination from 'components/Pagnination';
import Checkbox from 'components/Input/Checkbox';
import { IGroupPermission } from './store/types';

export default function DataTable() {
  const dispatch = useDispatch();
  const { data, pageNumber, pageSize, total, shouldRefetch } = useSelector(
    selectAdminPermissionStore,
  );

  useEffect(() => {
    dispatch(getData({ pageNumber, pageSize }));
  }, [dispatch, pageNumber, pageSize, shouldRefetch]);

  useEffect(() => {
    dispatch(getPermissions());
  }, [dispatch])

  return (
    <Table header={theads} minWidth="700px">
      {data?.length > 0 ? (
        <>
          {Children.toArray(data.map(d => <TableRow d={d} />))}
          <tr>
            <td colSpan={100}>
              <Pagination
                current={pageNumber}
                total={total}
                pageSize={pageSize}
                handleChangePageSize={(size: number) => {
                  dispatch(handleChangePageSize(size));
                }}
                onChange={(page: number) => {
                  dispatch(handleChangePage(page));
                }}
              />
            </td>
          </tr>
        </>
      ) : (
        <tr>
          <td colSpan={100}>Chưa có dữ liệu</td>
        </tr>
      )}
    </Table>
  );
}

const TableRow = ({ d }: { d: IGroupPermission }) => {

  const { selectedRow } = useSelector(selectAdminPermissionStore);
  const dispatch = useDispatch();

  return (
    <tr onClick={() => dispatch(handleSelectRow(d))}>
      <td>
        <Checkbox checked={selectedRow?.id === d?.id} />
      </td>
      <td>{d?.name}</td>
      <td>{d?.description}</td>
      <td>
        {d?.status &&
          d?.status === 1 ? "Sử dụng" : "Không sử dụng"} 
      </td>
    </tr>
  );
};
