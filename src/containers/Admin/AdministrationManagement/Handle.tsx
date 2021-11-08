import HandleButton from 'components/Button/HandleButton';
import loadable from 'components/LazyLoad';
import { PermOptionEnum, UserActionEnum, UserTypeEnum } from 'enum';
import useModal from 'hooks/useModal';
import { FaExclamationTriangle, FaPlus, FaUnlock } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { handleAction } from './store/actions';
import { selectAdministrationManagementStore } from './store/selecters';
import { SHandle } from './style';

const AddModal = loadable(() => import('./Modal/AddModal'));

export default function Handle({ code }: { code: string }) {
  const { selectedRow } = useSelector(selectAdministrationManagementStore);

  const dispatch = useDispatch();

  const { isOpen: addOpen, toggleModal: toggleOpen } = useModal();

  return (
    <>
      <SHandle>
        <HandleButton
          tooltip="Thêm mới"
          permissionCode={code}
          permissionType={PermOptionEnum['ADD']}
          className="handle-item"
          onClick={() => toggleOpen(true)}
        >
          <FaPlus size={16} />
        </HandleButton>
        {selectedRow && (
          <>
            {selectedRow.isLocked && (
              <HandleButton
                tooltip="Bỏ đình chỉ"
                className="handle-item"
                permissionCode={code}
                permissionType={PermOptionEnum['UPDATE']}
                onClick={() =>
                  selectedRow?.id &&
                  dispatch(
                    handleAction({
                      actionType: UserActionEnum['UNLOCK'],
                      userType: UserTypeEnum['ADMIN'],
                      id: selectedRow?.id,
                    }),
                  )
                }
              >
                <FaUnlock size={16} />
              </HandleButton>
            )}
            {!selectedRow.isLocked && (
              <HandleButton
                tooltip="Đình chỉ"
                className="handle-item"
                tooltipColor="#FF6C6C"
                borderColorOnHover="#FF6C6C"
                permissionCode={code}
                permissionType={PermOptionEnum['UPDATE']}
                onClick={() =>
                  dispatch(
                    handleAction({
                      actionType: UserActionEnum['LOCK'],
                      userType: UserTypeEnum['ADMIN'],
                      id: selectedRow?.id,
                    }),
                  )
                }
              >
                <FaExclamationTriangle size={16} />
              </HandleButton>
            )}
          </>
        )}
      </SHandle>

      <AddModal isOpen={addOpen} toggleModal={toggleOpen} />
    </>
  );
}
