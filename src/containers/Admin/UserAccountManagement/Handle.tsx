import HandleButton from 'components/Button/HandleButton';
import DeleteModal from 'components/Modal/DeleteModal';
import { UserActionEnum } from 'enum';
import useModal from 'hooks/useModal';
import {
  FaExclamationTriangle,
  FaTrash,
  FaUpload
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, handleAction } from './store/actions';
import { selectUserAccountManagementStore } from './store/selecters';
import { SHandle } from './style';

export default function Handle() {
  const { selectedRow } = useSelector(selectUserAccountManagementStore);
  console.log(selectedRow);

  const dispatch = useDispatch();

  const { isOpen: deleteOpen, toggleModal: toggleDelete } = useModal();

  return (
    <>
      <SHandle>
        {selectedRow && (
          <>
            <HandleButton tooltip="Xoá" className="handle-item" onClick={() => toggleDelete(true)}>
              <FaTrash size={16} />
            </HandleButton>

            {
              selectedRow.isLocked ? (
                <HandleButton tooltip="Bỏ đình chỉ" className="handle-item"
                  onClick={() =>
                    selectedRow?.id &&
                    dispatch(
                      handleAction({ actionType: UserActionEnum['UNLOCK'], userType: "user", id: selectedRow?.id }),
                    )
                  }
                >
                  <FaUpload size={16} />
                </HandleButton>
              ) : (
                <HandleButton tooltip="Đình chỉ" className="handle-item"
                  onClick={() =>
                    dispatch(
                      handleAction({ actionType: UserActionEnum['LOCK'], userType: "user", id: selectedRow?.id }),
                    )
                  }
                >
                  <FaExclamationTriangle size={16} />
                </HandleButton>
              )
            }
          </>
        )}
      </SHandle>

      {/* delete modal */}
      <DeleteModal
        title="xoá người dùng"
        content="Bạn có chắc chắn xóa người dùng này không ?"
        isOpen={deleteOpen}
        toggleModal={toggleDelete}
        onSubmit={() =>
          selectedRow?.id &&
          dispatch(
            deleteUser(selectedRow?.id)
          )
        }
      />
    </>
  );
}
