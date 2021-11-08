import Input from 'components/Input';
import Pagination from 'components/Pagnination';
import Table from 'components/Table';
import formatTime from 'helpers/formatTime';
import { Children, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleChangePage,
  handleChangePageSize,
  handleSelectRow,
} from './store/actions';
import { theads } from './data';
import { getData } from './store/actions';
import { selectAdminEventManagementStore } from './store/selecters';
import { IEvent } from './store/types';
import { useIntl } from 'react-intl';
import adminEventMessages from './store/message-trans';

export default function DataTable() {
  const { data, pageNumber, pageSize, total, status, keyword, shouldRefetch } =
    useSelector(selectAdminEventManagementStore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData({ pageSize, pageNumber, status, keyword }));
  }, [pageSize, pageNumber, dispatch, status, keyword, shouldRefetch]);

  return (
    <Table header={theads} minWidth="1200px">
      {data.length > 0 ? (
        <>
          {Children.toArray(data.map(e => <TableRow e={e} />))}
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

const TableRow = ({ e }: { e: IEvent }) => {
  const { selectedRow } = useSelector(selectAdminEventManagementStore);
  const dispatch = useDispatch();
  const intl = useIntl();

  return (
    <tr onClick={() => dispatch(handleSelectRow(e))}>
      <td>
        <Input.Checkbox checked={selectedRow?.id === e?.id} />
      </td>
      <td>{e?.code}</td>
      <td>{e?.name}</td>
      <td>{e?.creator?.name}</td>
      <td>{e?.startTime && formatTime(e?.startTime)}</td>
      <td>{e?.endTime && formatTime(e?.endTime)}</td>
      <td>
        {e?.status && intl.formatMessage({ ...adminEventMessages[e?.status] })}
      </td>
      <td>{e?.admin?.name}</td>
    </tr>
  );
};
