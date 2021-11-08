/*
 *
 * UserEvent
 * make by phamthainb
 */

import React, { memo,  useEffect, useState } from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersUserEvent from './store/reducers';
import WrapUserEvent from './style';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import { ILink } from 'components/Breadcum';
import HandleButton from 'components/Button/HandleButton'; 
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import { RiEdit2Fill, RiErrorWarningFill } from 'react-icons/ri';
import Button from 'components/Button';
import Table, { Ithead } from 'components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserEventStore } from './store/selecters';
import { getEventCreating } from './store/actions';
import { Alert } from 'components/Alert';
import {  requestInterToken } from 'api/axios';
import API_URL from 'api/url';
import { handleError } from 'helpers';
import Pagination from 'components/Pagnination'; 
import Input from 'components/Input'; 

interface Props {}
const breadcumLinks: ILink[] = [
  {
    name: 'Trang chủ',
  },
  {
    name: 'Sự kiện',
  },
  {
    name: 'Tạo sự kiện',
  },
];
const thead: Ithead[] = [
  {
    name: 'STT',
  },
  {
    name: 'Mã sự kiện',
  },
  {
    name: 'Tên sự kiện',
  },
  {
    name: 'Ngày tạo',
  },
  {
    name: 'Chỉnh sửa',
    colspan: 2,
  },
];
// eslint-disable-next-line
function UserEvent({}: Props) {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [listToShow, setListToShow] = useState([]);
  useInjectReducer('UserEvent', reducersUserEvent);
  const [activeRow, setActiveRow] = useState('');
  const {
    creating: {data },
  } = useSelector(selectUserEventStore);
  useEffect(() => {
    if(data.length>0){
      const temp = data.slice(pageSize*(currentPage-1), pageSize*currentPage);
      setListToShow(temp);
    }
  }, [pageSize, currentPage, data])
  const tableBody =
  listToShow.length > 0 ? (
    listToShow?.map((eventItem: any, index: number) => {
        return (
          <tr
            onClick={() => {
              if (activeRow === eventItem?.eventId) setActiveRow('');
              else setActiveRow(eventItem?.eventId || '');
            }}
            key={index}
            className={activeRow === eventItem?.eventId ? 'active' : ''}
          >
            <td>
              <Input.Checkbox checked={activeRow === eventItem?.eventId} />{' '}
            </td>
            <td></td>
            <td>{eventItem?.eventInfo.name}</td>
            <td>
              {/* {formatDate(eventItem?.eventInfo.startTime)}  */}
              {eventItem?.eventInfo.startTime}
            </td>
            <td>
              <Button
                height="28px"
                width="110px"
                color="#718098"
                background="#DFE9F5"
                border="none"
              >
                Thông tin
              </Button>
            </td>
            <td>
              <Button
                height="28px"
                width="110px"
                color="#718098"
                background="#DFE9F5"
                border="none"
              >
                Giao diện
              </Button>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan={6}>Chưa có sự kiện</td>
      </tr>
    );

  const dispatch = useDispatch();
  // call get list event creating
  useEffect(() => {
    dispatch(getEventCreating());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return (
    <ErrorBound>
      <ColRightWrapper header="Tạo sự kiện" links={breadcumLinks}>
        <WrapUserEvent>
          <div className="header">danh sách sự kiện đang tạo</div>

          <div className="tools" style={{ display: 'flex' }}>
            {/* <div className="tool-item">
              <HandleButton>
                <BiSquareRounded size={16} color="#A6B0CF" />
              </HandleButton>
            </div> */}
            <div className="tool-item">
              <HandleButton tooltip="Thêm mới">
                <FaPlus size={16} color="#A6B0CF" />
              </HandleButton>
            </div>
            <div className="tool-item">
              <HandleButton
                className='delete'
                tooltip="Xóa"
                onClick={() => {
                  if (activeRow === '')
                    Alert({ name: 'Chọn sự kiện cần xóa!', icon: 'error' });
                  else {
                    requestInterToken({
                      method: "DELETE",
                      url: API_URL.EVENTS.DETELE(activeRow),
                    })
                      .then((res) => {
                        if(res.status===200) Alert({ name: 'Xóa sự kiện thành công!', icon: 'success' });
                        dispatch(getEventCreating());
                      })
                      .catch(err => handleError(err));
                  }
                }}
              >
                <FaTrashAlt size={16} color="#A6B0CF" />
              </HandleButton>
            </div>
            <div className="tool-item">
              <HandleButton tooltip="Sửa">
                <RiEdit2Fill size={16} color="#A6B0CF" />
              </HandleButton>
            </div>
            <div className="tool-item">
              <HandleButton tooltip="Đình chỉ" className='delete'>
                <RiErrorWarningFill size={16} color="#A6B0CF" />
              </HandleButton>
            </div>
            {/* <div className="tool-item">
              <HandleButton>
                <BiArrowToTop size={16} color="#A6B0CF" />
              </HandleButton>
            </div> */}
          </div>

          <div className="table-container">
            <Table header={thead}>{tableBody}
            
            {data.length > 0 &&(
              <tr>
              <td colSpan={100}>
                <Pagination
                  handleChangePageSize={(size: number) => {
                    setPageSize(size);
                    setCurrentPage(1);
                    setActiveRow('');
                  }} 
                  current={currentPage} 
                  total={data.length}
                  pageSize={pageSize}
                  onChange={(page: number) => {
                    setCurrentPage(page) 
                    setActiveRow('')
                  }}
                />
              </td>
            </tr>
            )}</Table>
          </div>
        </WrapUserEvent>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(UserEvent);

