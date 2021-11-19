import Pagination from 'components/Pagnination';
import Table from 'components/Table';
import { Children, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { theads } from './data';
import { handleChangePage, handleChangePageSize } from './store/actions';
import { selectDoctorStore } from './store/selecters';
import { TDoctor } from './store/types';

export default function DataTable() {
  const { data, pageNumber, pageSize, total } = useSelector(selectDoctorStore);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getD)
  }, [])

  return (
    <Table header={theads} minWidth="1200px">
      {data.length > 0 ? (
        <>
          {Children.toArray(data.map(e => <TableRow d={e} />))}
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
          <td colSpan={100}>Chưa có dữ liệu</td>
        </tr>
      )}
    </Table>
  );
}

const TableRow = ({ d }: { d: TDoctor }) => {
  return <tr></tr>;
};
