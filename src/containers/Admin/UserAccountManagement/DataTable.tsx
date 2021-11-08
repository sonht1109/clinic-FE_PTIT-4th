import Input from 'components/Input';
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
import { selectUserAccountManagementStore } from './store/selecters';
import { IEvent } from './store/types';
import useModal from 'hooks/useModal';
import Modal, { SModalContent } from 'components/Modal';
import { InModal } from './style';
import { Col, Row } from 'styled-bootstrap-grid';

export default function DataTable() {
  const { data, pageNumber, pageSize, total, status, keyword } = useSelector(
    selectUserAccountManagementStore,
  );
  // console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData({ pageSize, pageNumber, status, keyword }));
  }, [pageSize, pageNumber, dispatch, status, keyword]);

  return (
    <Table header={theads}>
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
    </Table>
  );
}

const TableRow = ({ e }: { e: IEvent }) => {
  const { selectedRow } = useSelector(selectUserAccountManagementStore);
  console.log("selectedRow: ", selectedRow);

  const dispatch = useDispatch();
  const {
    isOpen: isDetailModalOpen,
    toggleModal: toggleDetailModal,
  } = useModal();

  return (
    <>
      <tr onClick={() => dispatch(handleSelectRow(e))}>
        <td>
          <Input.Checkbox
            checked={selectedRow?.id === e?.id}
          />
        </td>
        <td>{e?.phone}</td>
        <td className="name_user" onClick={() => { toggleDetailModal(true) }}>{e?.name}</td>
        <td>{e?.totalEventCreated}</td>
        <td>{e?.totalEventJoined ? e?.totalEventJoined : "0"}</td>
        <td>{e?.isLocked === 0 ? "Đang hoạt động" : "Bị khóa"}</td>
      </tr>

      {/* modals */}
      <Modal
        title={"Hồ sơ"}
        isOpen={isDetailModalOpen}
        toggleModal={toggleDetailModal}
        overwriteModalStyle={{ 
            maxWidth: 970 
        }}
      >
        <SModalContent>
          <InModal>
            <p className="title">Một số thông tin có thể hiển thị cho những người dùng khác đang sử dụng dịch vụ của Bvote khi bạn khởi tạo sự kiện</p>
            <div className="content">
              <Row>
                <Col xl={6} lg={4} md={12} sm={12}>
                  <div className="avatar">

                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={12}>
                  <div className="top_content">
                    <Row>
                      <Col xl={6} lg={6} md={6} sm={6}>
                      </Col>
                      <Col xl={6} lg={6} md={6} sm={6}>
                      </Col>
                    </Row>
                  </div>
                  <div className="bottom_content">

                  </div>
                </Col>
              </Row>
            </div>
          </InModal>
        </SModalContent>
      </Modal>
    </>
  );
};
