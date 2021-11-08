import HeaderText from 'components/HeaderText';
import Input from 'components/Input';
import Pagination from 'components/Pagnination';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, handleChangePage, handleChangePageSize } from '../store/actions';
import { selectDashboardStore } from '../store/selecters';
import EventItem from './EventItem';
import { SEvents } from './styles';

export default function Events() {

  const dispatch = useDispatch();
  const {total, events, pageNumber, pageSize} = useSelector(selectDashboardStore);

  useEffect(() => {
    dispatch(getEvents(pageNumber, pageSize))
  }, [dispatch, pageNumber, pageSize])

  return (
    <SEvents>
      <div className="module-header">
        <HeaderText>
          Các sự kiện đã tạo
        </HeaderText>
        <Input.Wrapper label="Trạng thái" isLabelOnTop>
          <Input.Select options={[]} />
        </Input.Wrapper>
      </div>

      <div className="module-content">
        <div className="event__list">
          {React.Children.toArray(
            events.map((e) => <EventItem e={e} />),
          )}
        </div>

        <Pagination
          handleChangePageSize={(size: number) => dispatch(handleChangePageSize(size))}
          onChange={(page: number) => dispatch(handleChangePage(page))}
          current={pageNumber}
          pageSize={pageSize}
          total={total}
        />
      </div>
    </SEvents>
  );
}
