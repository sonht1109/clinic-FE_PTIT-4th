import Checkbox from 'components/Input/Checkbox';
import Pagination from 'components/Pagnination';
import Table from 'components/Table';
import { Children, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { theads } from './data';
import {
  getData,
  handleChangePage,
  handleChangePageSize,
  onSelectRow,
} from './store/actions';
import { selectDoctorStore } from './store/selecters';
import { TDoctor } from './store/types';

export default function DataTable() {
  const { data, pageNumber, pageSize, total } = useSelector(selectDoctorStore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <Table header={theads} minWidth="1200px">
      {data.length > 0 ? (
        <>
          {Children.toArray(data.map((d, i) => <TableRow d={d} i={i + 1} />))}
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

const TableRow = ({ d, i }: { d: TDoctor; i: number }) => {
  const { selectedRow } = useSelector(selectDoctorStore);
  const dispatch = useDispatch();

  return (
    <tr onClick={() => dispatch(onSelectRow(d))}>
      <td>
        <Checkbox checked={selectedRow?.id === d?.id}/>
      </td>
      <td>{d?.name}</td>
      <td>{d?.level}</td>
      <td>{d?.literacy}</td>
      <td>{d?.degree}</td>
      <td>{d?.experience}</td>
    </tr>
  );
};
