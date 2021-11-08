/*
 *
 * AdminNoticeManagement
 * make by phamthainb
 */

import React, {
  memo,
  ReactChild,
  ReactChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import ErrorBound from 'components/ErrorBound';
import useInjectReducer from 'redux/useInjectReducer';
import reducersAdminNoticeManagement from './store/reducers';
import WrapAdminNoticeManagement, {
  SModalCreateNoti,
  SModalDeleteNoti,
} from './style';
import { requestInterToken, requestToken } from 'api/axios';
import API_URL from 'api/url';
import { Alert } from 'components/Alert';
import { ILink } from 'components/Breadcum';
import HandleButton from 'components/Button/HandleButton';
import Table, { Ithead } from 'components/Table';
import { ColRightWrapper } from 'containers/Layout/LoggedInLayout';
import { handleError } from 'helpers';
import {   BiEditAlt } from 'react-icons/bi';
import { FaPhone, FaPlus, FaToggleOn, FaTrashAlt } from 'react-icons/fa';
import * as types from './store/constants';
import { RiEdit2Fill } from 'react-icons/ri';
import Button from 'components/Button';
import Input from 'components/Input';
import { useForm } from 'react-hook-form';
import ErrorMessage from 'components/Input/ErrorMessage';
import WithWrapper from 'components/Input/WithWrapper';
import globalMessages from 'configs/global-message';
import { useIntl } from 'react-intl';
import useModal from 'hooks/useModal';
import Modal from 'components/Modal';
import deleteNoti from 'assets/images/delete-noti.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdminNoticeManagementStore } from './store/selecters';
import * as actions from './store/actions';
import { MdPerson } from 'react-icons/md';
import WithSearch from 'components/Input/WithSearch';
import Pagination from 'components/Pagnination';
interface Props {}

const breadcumLinks: ILink[] = [
  {
    name: 'Trang chủ',
  },
  {
    name: 'Thiết lập hệ thống',
  },
  {
    name: 'Thông báo',
  },
];

const thead: Ithead[] = [
  {
    name: '#',
  },
  {
    name: 'Chủ đề',
  },
  {
    name: 'Nội dung',
  },
  {
    name: 'Người nhận',
  },
  {
    name: 'Trạng thái',
  },
];
const modalTypeOptions: any = {
  create: 'create',
  edit: 'edit',
  delete: 'delete',
};

const modalTypeTranslate: any = {
  create: {
    title: 'Tạo mới thông báo',
    size: 718,
  },
  edit: {
    title: 'Chỉnh sửa thông báo',
    size: 718,
  },
  delete: {
    title: 'Xóa thông báo',
    size: 715,
  },
};

// eslint-disable-next-line
function AdminNoticeManagement({}: Props) {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const { register, handleSubmit } = useForm();
  useInjectReducer('AdminNoticeManagement', reducersAdminNoticeManagement);
  const [activeRow, setActiveRow] = useState<any>(null);
  const [modalType, setModalType] = useState(modalTypeOptions.create);
  const { isOpen, toggleModal } = useModal();
  const [modalContent, setModalContent] = useState<
    ReactChild | ReactChildren | ReactChild[]
  >(<ModalCreateNoti toggleModal={toggleModal} setActiveRow={setActiveRow} />);
  const dispatch = useDispatch();
  const { pagination, total, search, data } = useSelector(
    selectAdminNoticeManagementStore,
  );
  const getNotify = useCallback(() => {
    requestInterToken({
      method: 'GET',
      url: API_URL.NOTIFYS.GET,
      params: {
        page: pagination.pageNumber,
        sizePerPage: pagination.pageSize,
        title: search.keyword || '',
      },
    })
      .then(res => {
        dispatch(actions.getNotify(res.data.data, res.data.meta.itemCount));
      })
      .catch(err => handleError(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, pagination]);

  useEffect(() => {
    getNotify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, pagination]);
  const tableBody =
    data.length > 0 ? (
      data.map((item: any, index: number) => {
        return (
          <tr
            onClick={() => {
              if (activeRow?.id === item?.id) setActiveRow(null);
              else setActiveRow(item);
            }}
            className={activeRow?.id === item?.id ? 'active' : ''}
          >
            <td>
              <Input.Checkbox checked={activeRow?.id === item?.id} />{' '}
            </td>
            <td>{item?.title}</td>
            <td>{item?.content}</td>
            <td>{item?.receiver}</td>
            <td>{item?.status === 1 ? 'Đang hoạt động' : 'Ngưng hoạt động'}</td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan={thead.length}>Không có thông báo</td>
      </tr>
    );
  const onSearch = (value: any) => {
    console.log(value.keyword);
    if (value.keyword !== undefined) {
      setActiveRow(null);
      dispatch(actions.setSearch(value.keyword));
    }
  };
  const changePagination = useCallback(
    (pageNumber: number, pageSize: number) => {
      dispatch({
        type: types.PAGINATION,
        payload: { pageNumber: pageNumber, pageSize: pageSize },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return (
    <ErrorBound>
      <ColRightWrapper header="Thiết lập hệ thống" links={breadcumLinks}>
        <WrapAdminNoticeManagement>
          <div className="header-container">
            <div className="title">Thông báo</div>
            <div className="search">
              <WithSearch.Text
                name="keyword"
                ref={register}
                placeholder="Nhập chủ đề "
              />
              <Button
                height="40px"
                width="160px"
                onClick={handleSubmit(onSearch)}
              >
                Tìm kiếm
              </Button>
            </div>
          </div>

          <div className="tools" style={{ display: 'flex' }}>
            {/* <div className="tool-item">
              <HandleButton>
                <BiSquareRounded size={16} color="#A6B0CF" />
              </HandleButton>
            </div> */}
            <div className="tool-item">
              <HandleButton
                tooltip="Thêm mới"
                onClick={() => {
                  setModalContent(
                    <ModalCreateNoti
                      setActiveRow={setActiveRow}
                      toggleModal={toggleModal}
                      refetch={getNotify}
                    />,
                  );
                  setModalType(modalTypeOptions.create);
                  toggleModal(true);
                }}
              >
                <FaPlus size={16} color="#A6B0CF" />
              </HandleButton>
            </div>
            <div className="tool-item">
              <HandleButton
                className="delete"
                tooltip="Xóa"
                onClick={() => {
                  if (activeRow === null)
                    Alert({ name: 'Chọn thông báo cần xóa!', icon: 'error' });
                  else {
                    setModalContent(
                      <ModalDeleteNoti
                        setActiveRow={setActiveRow}
                        toggleModal={toggleModal}
                        item={activeRow}
                        refetch={getNotify}
                      />,
                    );
                    setModalType(modalTypeOptions.delete);
                    toggleModal(true);
                  }
                }}
              >
                <FaTrashAlt size={16} color="#A6B0CF" />
              </HandleButton>
            </div>
            <div className="tool-item">
              <HandleButton tooltip="Sửa">
                <RiEdit2Fill
                  size={16}
                  color="#A6B0CF"
                  onClick={() => {
                    if (activeRow === null)
                      Alert({ name: 'Chọn thông báo cần sửa!', icon: 'error' });
                    else {
                      setModalContent(
                        <ModalCreateNoti
                          setActiveRow={setActiveRow}
                          toggleModal={toggleModal}
                          item={activeRow}
                          refetch={getNotify}
                        />,
                      );
                      setModalType(modalTypeOptions.edit);
                      toggleModal(true);
                    }
                  }}
                />
              </HandleButton>
            </div>
          </div>

          <div className="table-container">
            <Table header={thead}>
              {tableBody}
              {data.length > 0 && (
                <tr>
                  <td colSpan={100}>
                    <Pagination
                      handleChangePageSize={(size: number) => {
                        setPageSize(size);
                        changePagination(currentPage, size);
                      }}
                      current={pagination.pageNumber}
                      total={total}
                      pageSize={pagination.pageSize}
                      onChange={(page: number) => {
                        setCurrentPage(page);
                        changePagination(page, pageSize);
                      }}
                    />
                  </td>
                </tr>
              )}
            </Table>
          </div>

          <Modal
            isOpen={isOpen}
            toggleModal={toggleModal}
            title={modalTypeTranslate[modalType].title}
            overwriteModalStyle={{
              maxWidth: modalTypeTranslate[modalType].size,
            }}
          >
            {modalContent}
          </Modal>
        </WrapAdminNoticeManagement>
      </ColRightWrapper>
    </ErrorBound>
  );
}
export default memo(AdminNoticeManagement);

interface IModalCreateNoti {
  toggleModal: any;
  item?: any;
  setActiveRow: any;
  refetch?: any;
}

const ModalCreateNoti = ({
  toggleModal,
  item,
  setActiveRow,
  refetch,
}: IModalCreateNoti) => {
  const {
    register,
    handleSubmit,
    errors,
    control,
    watch,
    setValue,
    getValues,
  } = useForm();
  const intl = useIntl();
  const onSubmit = (value: any) => {
    const { receiver, status, title, content } = value;
    console.log(value);
    let formData = new FormData();
    formData.append('receiver', `${receiver.value}`);
    formData.append('title', `${title}`);
    formData.append('content', `${content}`);
    // formData.append('content', content);
    if (status.value === '1') formData.append('status', '1');
    else formData.append('status', '0');

    if (item) {
      requestToken({
        method: 'PUT',
        url: API_URL.NOTIFYS.UPDATE(item.id),
        data: {
          title,
          content,
          receiver: receiver.value,
          status: +status.value,
        },
      })
        .then(res => {
          Alert({ name: 'Sửa thông báo thành công', icon: 'success' });
          refetch();
          setActiveRow(null);
          toggleModal(false);
        })
        .catch(err => {
          Alert({
            name: err.message,
            icon: 'error',
          });
        });
    } else
      requestToken({
        method: 'POST',
        url: API_URL.NOTIFYS.CREATE,
        data: {
          title,
          content,
          receiver: receiver.value,
          status: +status.value,
        },
      })
        .then(res => {
          Alert({ name: 'Thêm thông báo thành công', icon: 'success' });
          refetch();
          setActiveRow(null);
          toggleModal(false);
        })
        .catch(err => {
          Alert({
            name: err.message,
            icon: 'error',
          });
        });
  };
  useEffect(() => {
    if (item) {
      setValue('title', item?.title);
      setValue('content', item?.content);
      // setValue('receiver', item?.receiver);
      setValue(
        'receiver',
        receiverOptions.filter(r => r.value === item?.receiver)[0],
      );

      if (item?.status === 0) setValue('status', statusOptions[1]);
      else setValue('status', statusOptions[0]);
      console.log(
        statusOptions.filter(item => item.value === getValues('status')),
      );
    }
  }, [item]);
  return (
    <SModalCreateNoti>
      <div className="handle">
        <div className="handle-item">
          <WithWrapper.Text
            inputProps={{
              name: 'title',
            }}
            wrapperProps={{
              label: 'Chủ đề',
              icon: <FaPhone size={12} />,
              className: 'form-item',
            }}
            register={register({
              required: intl.formatMessage(
                { ...globalMessages.required },
                { field: globalMessages.title.defaultMessage },
              ),
            })}
          />
          <ErrorMessage errors={errors} field="title" />
        </div>
        <div className="handle-item">
          <WithWrapper.Select
            selectProps={{
              name: 'receiver',
              options: receiverOptions,
            }}
            wrapperProps={{
              label: 'Người nhận',
              icon: <MdPerson size={12} />,
              className: 'form-item',
            }}
            control={control}
            name="receiver"
            watch={watch}
            rules={{
              required: intl.formatMessage(
                { ...globalMessages.required },
                { field: globalMessages.receiver.defaultMessage },
              ),
            }}
            defaultValue={
              receiverOptions.filter(
                item => item.value === getValues('receiver'),
              ).length > 0
                ? receiverOptions.filter(
                    item => item.value === getValues('receiver'),
                  )[0]
                : undefined
            }
          />
          <ErrorMessage errors={errors} field="receiver" />
        </div>
        <div className="handle-item">
          <WithWrapper.Select
            selectProps={{
              name: 'status',
              options: statusOptions,
              //  defaultValue: statusOptions[0],
            }}
            wrapperProps={{
              label: 'Trạng thái',
              icon: <FaToggleOn size={12} />,
              className: 'form-item',
            }}
            control={control}
            name="status"
            watch={watch}
            defaultValue={
              statusOptions.filter(item => item.value === getValues('status'))
                .length > 0
                ? statusOptions.filter(
                    item => item.value === getValues('status'),
                  )[0]
                : undefined
            }
          />
          <ErrorMessage errors={errors} field="status" />
        </div>
        <div className="handle-item">
          <WithWrapper.Textarea
            textareaProps={{
              // type: 'tel',
              name: 'content',
            }}
            wrapperProps={{
              label: 'Nội dung',
              icon: <BiEditAlt size={12} />,
              className: 'form-item',
            }}
            register={register({
              required: intl.formatMessage(
                { ...globalMessages.required },
                { field: globalMessages.content.defaultMessage },
              ),
            })}
          />
          <ErrorMessage errors={errors} field="content" />
        </div>
      </div>
      <div className="button-group">
        <Button
          background="white"
          color="#718098"
          onClick={() => {
            toggleModal(false);
            setActiveRow(null);
          }}
        >
          Hủy bỏ
        </Button>
        <Button onClick={handleSubmit(onSubmit)}>Xác nhận</Button>
      </div>
    </SModalCreateNoti>
  );
};

interface IModalDeleteNoti {
  toggleModal: any;
  item: any;
  setActiveRow: any;
  refetch: any;
}

const ModalDeleteNoti = ({
  toggleModal,
  item,
  setActiveRow,
  refetch,
}: IModalDeleteNoti) => {
  const deleteNotiAction = () => {
    requestInterToken({
      method: 'DELETE',
      url: API_URL.NOTIFYS.DELETE,
      data: {
        ids: [item?.id],
      },
    })
      .then(res => {
        refetch();
        toggleModal(false);
        setActiveRow(null);
        Alert({
          name: 'Xóa thông báo thành công!',
          icon: 'success',
        });
      })
      .catch(err => handleError(err));
  };
  return (
    <SModalDeleteNoti>
      <div className="image">
        <img src={deleteNoti} alt="" />
      </div>
      <div className="desc">Bạn có chắc chắn xóa thông báo này không ?</div>
      <div className="button-group">
        <Button
          background="white"
          color="#718098"
          onClick={() => {
            toggleModal(false);
            setActiveRow(null);
          }}
        >
          Hủy bỏ
        </Button>
        <Button
          background="#FF6C6C"
          border="1px solid #FF6C6C"
          onClick={deleteNotiAction}
        >
          Xóa
        </Button>
      </div>
    </SModalDeleteNoti>
  );
};

const receiverOptions = [
  {
    value: 'admin',
    label: 'Admin',
  },
  {
    value: 'user',
    label: 'Người tạo',
  },
];
const statusOptions = [
  {
    value: '1',
    label: 'Đang hoạt động',
  },
  {
    value: '0',
    label: 'Ngưng hoạt động',
  },
];
