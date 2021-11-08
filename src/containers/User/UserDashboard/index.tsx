import ErrorBound from 'components/ErrorBound';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SAccountStatus,
  SDashboardEvent,
  SUserDashboad,
  SEventItem,
  SModalDetail,
  SNextArrow,
  SPrevArrow,
} from './style';
import finishedIcon from 'assets/images/finished.png';
import unfinishedIcon from 'assets/images/unfinished.png';
import image from 'assets/images/demoEvent.png';
import Slider from 'react-slick';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
// import { useIntl } from 'react-intl';
import { getEventsCreated, getStatusAccount } from './store/actions';
import { userDashboard } from './store/selecters';
import reducersUserDashboard from './store/reducers';
import useInjectReducer from 'redux/useInjectReducer';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal';
import nextNomal from 'assets/images/next-nomal.png';
import nextActive from 'assets/images/next-active.png';
import prevNomal from 'assets/images/prev-nomal.png';
import prevActive from 'assets/images/prev-active.png';

const sampleList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function UserDashboard() {
  const [currentTab, setCurrentTab] = useState(0);
  useInjectReducer('UserDashboard', reducersUserDashboard);

  return (
    <ErrorBound>
      <ColRightWrapper header="Dashboard">
        <SUserDashboad>
          <AccountStatus />
          <div className="tab-container">
            <div className="tab-header">
              <div className="tab-list">
                <div
                  className={currentTab === 0 ? 'tab-item active' : 'tab-item'}
                  onClick={() => setCurrentTab(0)}
                >
                  Sự kiện đã tạo
                </div>
                <div
                  className={currentTab === 1 ? 'tab-item active' : 'tab-item'}
                  onClick={() => setCurrentTab(1)}
                >
                  Sự kiện đã tham gia
                </div>
              </div>
            </div>
            <div className="tab-content">
              {currentTab === 0 ? (
                <DashboardEvent type="created" />
              ) : (
                <DashboardEvent type="joined" />
              )}
            </div>
          </div>
        </SUserDashboad>
      </ColRightWrapper>
    </ErrorBound>
  );
}

const AccountStatus = () => {
  const dispatch = useDispatch();
  const { statusAccount } = useSelector(userDashboard);

  useEffect(() => {
    dispatch(getStatusAccount());
  }, [dispatch]);

  return (
    <SAccountStatus>
      <div className="title">Trạng thái tài khoản</div>

      <div className="content">
        <div className="chain-container">
          <div className="item">
            <div
              className={`status-container  first-child ${
                statusAccount?.infoCompleted ? 'active' : ''
              }`}
            >
              <span
                className={`status first-child ${
                  statusAccount?.infoCompleted ? 'active' : ''
                }`}
              >
                <img className="finish" src={finishedIcon} alt="" />
                <img className="unfinished" src={unfinishedIcon} alt="" />
              </span>
            </div>
            <div
              className={`desc ${statusAccount?.infoCompleted ? 'active' : ''}`}
            >
              Thông tin cá nhân
            </div>
          </div>

          <div className="item">
            <div
              className={`status-container ${
                statusAccount?.infoCompleted ? 'active' : ''
              }`}
            >
              <span
                className={`status ${
                  statusAccount?.infoCompleted ? 'active' : ''
                }`}
              >
                <img className="finish" src={finishedIcon} alt="" />
                <img className="unfinished" src={unfinishedIcon} alt="" />
              </span>
            </div>
            <div
              className={`desc ${statusAccount?.infoCompleted ? 'active' : ''}`}
            >
              Xác minh danh tính (KYC)
            </div>
          </div>

          <div className="item">
            <div
              className={`status-container last-child ${
                statusAccount?.infoCompleted ? 'active' : ''
              }`}
            >
              <span
                className={`status last-child ${
                  statusAccount?.infoCompleted ? 'active' : ''
                }`}
              >
                <img className="finish" src={finishedIcon} alt="" />
                <img className="unfinished" src={unfinishedIcon} alt="" />
              </span>
            </div>
            <div
              className={`desc ${statusAccount?.infoCompleted ? 'active' : ''}`}
            >
              Quyền tạo sự kiện
            </div>
          </div>
        </div>
      </div>
    </SAccountStatus>
  );
};
const DashboardEvent = ({ type }: { type: string }) => {
  const [listEvent, setListEvent] = useState([]);
  const { isOpen, toggleModal } = useModal();
  const [event, setEvent] = useState(null);

  const dispatch = useDispatch();
  const { eventsCreated } = useSelector(userDashboard);
  // bosung them event joined nua, dang thieu
  useEffect(() => {
    dispatch(getEventsCreated());
  }, [dispatch, type]);
  useEffect(() => {
    dispatch(getEventsCreated());
    if (type === 'created') {
      setListEvent(eventsCreated);
    }
    // else setListEvent(eventsJoined);
  }, [dispatch, type]);

  return (
    <SDashboardEvent>
      {sampleList.length > 0 ? (
        <Slider {...settings} className="slide-event">
          {sampleList.map((item, index) => {
            return (
              <EventItem
                item={item}
                key={index}
                setEvent={setEvent}
                toggleModal={toggleModal}
              />
            );
          })}
        </Slider>
      ) : (
        <div>Chưa có sự kiện</div>
      )}
      {/* {listEvent.length > 0 ? (
        <Slider  {...settings} className="slide-event">
          {listEvent.map((item, index) => {
            return (
              <EventItem
                item={item}
                key={index}
                setEvent={setEvent}
                toggleModal={toggleModal}
              />
            );
          })}
        </Slider>
      ) : (
        <div>Chưa có sự kiện</div>
      )} */}
 
        <Modal
          isOpen={isOpen}
          toggleModal={toggleModal}
          title="Thông tin sự kiện"
          overwriteModalStyle={{ maxWidth: 720 }}
        >
          <ModalDetail item={event} />
        </Modal> 
    </SDashboardEvent>
  );
};

const EventItem = ({
  item,
  setEvent,
  toggleModal,
}: {
  item: any;
  setEvent: any;
  toggleModal: any;
}) => {
  return (
    <SEventItem status={item.status} onClick={() => {
      setEvent(item);
      toggleModal(true);
    }}>
      <div className="item-containter">
        <div className="item-slide">
          <div className="image-container">
            <img src={image} alt="" />
          </div>
          <p className="desc">{item?.name || 'tên sự kiện'}</p>
          <div
            className="status" 
          >
            {item?.status === 'ended'
              ? 'Kết thúc'
              : item?.status === 'waiting'
              ? 'Chờ xét duyệt'
              : 'Đang chạy'}
          </div>
        </div>
      </div>
    </SEventItem>
  );
};

const ModalDetail = ({ item }: { item: any }) => {
  return (
    <SModalDetail>
      <table>
        <tbody>
          <tr>
            <td className="title">Tên sự kiện</td>
            <td className="content">{item?.name}</td>
          </tr>
          <tr>
            <td className="title">Lĩnh vực</td>
            <td className="content">{item?.field}</td>
          </tr>
          <tr>
            <td className="title">Người tạo</td>
            <td className="content">{item?.creator}</td>
          </tr>
          <tr>
            <td className="title">Loại sự kiện</td>
            <td className="content">{item?.type}</td>
          </tr>
          <tr>
            <td className="title">Danh sách được Vote</td>
            <td className="content">{item?.constant}</td>
          </tr>
        </tbody>
      </table>
    </SModalDetail>
  );
};

const SampleNextArrow = (props:any) => {
  const { onClick} = props;
  return (
    <SNextArrow onClick={onClick} >
      <img src={nextActive} alt="" className="active" />
      <img src={nextNomal} alt="" className="nomal" />
    </SNextArrow>
  );
};
const SamplePrevArrow = (props:any) => {
  const { onClick} = props;
  return (
    <SPrevArrow onClick={onClick} >
      <img src={prevActive} alt="" className="active" />
      <img src={prevNomal} alt="" className="nomal" />
    </SPrevArrow>
  );
};

const settings = {
  dots: false,
  slidesToShow: 4,
  rows: 2,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  centerPadding: '0',
  fade: false,
  autoplay: true,
  infinite: false,
  draggable: true,
  swipeToSlide: true,
  touchMove: true,
  swipe: true,

  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }, 
  ],
};
