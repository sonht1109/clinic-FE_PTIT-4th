import HandleButton from 'components/Button/HandleButton';
import Modal from 'components/Modal';
import { EventActionEnum, EventStatusEnum, PermOptionEnum } from 'enum';
import useModal from 'hooks/useModal';
import {
  FaCheck,
  FaExclamationTriangle,
  FaTrash,
  FaUnlockAlt,
  FaUpload,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { handleEventAction, handlePublish } from './store/actions';
import { selectAdminEventManagementStore } from './store/selecters';
import { SHandle } from './style';
import Button from 'components/Button';
import { SDeleteModal } from 'components/Modal/DeleteModal';
import loadable from 'components/LazyLoad';

const DeleteModal = loadable(() => import('components/Modal/DeleteModal'));

export default function Handle({ code }: { code: string }) {
  const { selectedRow } = useSelector(selectAdminEventManagementStore);

  const dispatch = useDispatch();

  const { isOpen: publishOpen, toggleModal: togglePublish } = useModal();
  const { isOpen: deleteOpen, toggleModal: toggleDelete } = useModal();

  return (
    <>
      <SHandle>
        {selectedRow && (
          <HandleButton
            permissionCode={code}
            permissionType={PermOptionEnum['DELETE']}
            tooltip="Xoá"
            className="handle-item"
            onClick={() => toggleDelete(true)}
            borderColorOnHover="#FF6C6C"
            tooltipColor="#FF6C6C"
          >
            <FaTrash size={16} />
          </HandleButton>
        )}

        {[EventStatusEnum['ACCEPTED']].includes(
          selectedRow?.status as EventStatusEnum,
        ) && (
          <HandleButton
            permissionCode={code}
            permissionType={PermOptionEnum['UPDATE']}
            tooltip="Đình chỉ"
            className="handle-item"
            borderColorOnHover="#FF6C6C"
            tooltipColor="#FF6C6C"
            onClick={() =>
              selectedRow?.id &&
              dispatch(
                handleEventAction(EventActionEnum['LOCK'], selectedRow?.id),
              )
            }
          >
            <FaExclamationTriangle size={16} />
          </HandleButton>
        )}

        {[EventStatusEnum['ACCEPTED']].includes(
          selectedRow?.status as EventStatusEnum,
        ) && (
          <HandleButton
            permissionCode={code}
            permissionType={PermOptionEnum['UPDATE']}
            tooltip="Publish"
            className="handle-item"
            onClick={() => {
              togglePublish(true);
            }}
          >
            <FaUpload size={16} />
          </HandleButton>
        )}

        {[EventStatusEnum['WAITING']].includes(
          selectedRow?.status as EventStatusEnum,
        ) && (
          <HandleButton
            permissionCode={code}
            permissionType={PermOptionEnum['VERIFY']}
            tooltip="Xác nhận"
            className="handle-item"
            onClick={() =>
              selectedRow?.id &&
              dispatch(
                handleEventAction(EventActionEnum['VERIFY'], selectedRow?.id),
              )
            }
          >
            <FaCheck size={16} />
          </HandleButton>
        )}

        {[EventStatusEnum['DENIED']].includes(
          selectedRow?.status as EventStatusEnum,
        ) && (
          <HandleButton
            permissionCode={code}
            permissionType={PermOptionEnum['UPDATE']}
            tooltip="Kích hoạt"
            className="handle-item"
            onClick={() =>
              selectedRow?.id &&
              dispatch(
                handleEventAction(EventActionEnum['UN_LOCK'], selectedRow?.id),
              )
            }
          >
            <FaUnlockAlt size={16} />
          </HandleButton>
        )}
      </SHandle>

      {/* delete modal */}

      <DeleteModal
        title="xoá sự kiện"
        content="Bạn có chắc chắn xóa sự kiện này không ?"
        isOpen={deleteOpen}
        toggleModal={toggleDelete}
        onSubmit={() =>
          dispatch(
            handleEventAction(EventActionEnum['DELETE'], selectedRow?.id || ''),
          )
        }
      />

      {/* publish modal */}
      <Modal
        isOpen={publishOpen}
        toggleModal={togglePublish}
        title="công bố sự kiện"
      >
        <SDeleteModal>
          {/* <img src={deleteModalSrc} alt="delete" width={200} height={200} /> */}
          <FaUpload color="#FF7575" size={200} />
          <p>
            Bạn có chắc chắn công bố sự kiện này không? <br /> Sau khi công bố,
            bạn sẽ không thể chỉnh sửa bất kỳ thông tin nào của sự kiện này nữa
          </p>
          <div className="group-button">
            <Button
              color="#718098"
              border="1px solid #00CB82"
              onClick={() => toggleDelete(false)}
              background="white"
              width="152px"
              height="40px"
            >
              Huỷ
            </Button>

            <Button
              color="white"
              border="none"
              onClick={() => {
                dispatch(
                  handlePublish({
                    event: selectedRow?.id || '',
                    publishContestant: true,
                    publishEvent: true,
                  }),
                );
                togglePublish(false);
              }}
              width="152px"
              height="40px"
            >
              Công bố
            </Button>
          </div>
        </SDeleteModal>
      </Modal>
    </>
  );
}
