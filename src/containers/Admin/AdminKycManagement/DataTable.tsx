import Checkbox from 'components/Input/Checkbox';
import Pagination from 'components/Pagnination';
import Table from 'components/Table';
import formatTime from 'helpers/formatTime';
import React, { Children, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { theads } from './data';
import {
  getData,
  handleChangePage,
  handleChangePageSize,
  handleSelectRow,
} from './store/actions';
import adminKycMessages from './store/message-trans';
import { selectAdminKycManagementStore } from './store/selecters';
import { ICoreKyc } from './store/types';

export default function DataTable() {
  const { data, shouldRefetch, pageNumber, pageSize, status, keyword, total } =
    useSelector(selectAdminKycManagementStore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData({ pageNumber, pageSize, status, keyword }));
  }, [dispatch, pageNumber, pageSize, shouldRefetch, status, keyword]);

  return (
    <Table header={theads} minWidth="1200px">
      {data.length > 0 ? (
        <>
          {Children.toArray(data.map(d => <TableRow d={d} />))}
          <tr>
            <td colSpan={100}>
              <Pagination
                total={total}
                current={pageNumber}
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

const TableRow = ({ d }: { d: ICoreKyc }) => {
  const { selectedRow } = useSelector(selectAdminKycManagementStore);
  const intl = useIntl();
  const dispatch = useDispatch();

  return (
    <tr onClick={() => {dispatch(handleSelectRow(d))}}>
      <td>
        <Checkbox checked={selectedRow?.id === d?.id} />
      </td>
      <td>{d?.name}</td>
      <td></td>
      <td>{d?.processedDate && formatTime(d?.processedDate)}</td>
      <td>{d?.note}</td>
      <td>
        {d?.status && intl.formatMessage({ ...adminKycMessages[d?.status] })}
      </td>
      <td>{d?.admin?.name}</td>
    </tr>
  );
};
