import Table from 'components/Table';
import React, { Children } from 'react';
import { theads } from './data';

export default function DataTable() {

  const data = []

  return (
    <Table header={theads} minWidth="1200px">
      {data.length > 0 ? (
        <>
          {Children.toArray([1, 2, 3].map(d => <TableRow />))}
          {/* <tr>
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
          </tr> */}
        </>
      ) : (
        <tr>
          <td colSpan={100}>Chưa có dữ liệu</td>
        </tr>
      )}
    </Table>
  );
}


const TableRow = () => {
  return (
    <tr>
      <td></td>
    </tr>
  )
}