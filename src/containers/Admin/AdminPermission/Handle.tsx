import HandleButton from 'components/Button/HandleButton';
import { PermOptionEnum } from 'enum';
import useModal from 'hooks/useModal';
import { FaEye, FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { SHandle } from '../AdminEventManagement/style';
import { selectAdminPermissionStore } from './store/selecters';
import loadable from 'components/LazyLoad'

const CreateModal = loadable(() => import('./Modal/CreateModal'));
const ModifyModal = loadable(() => import('./Modal/ModifyModal'));

export default function Handle({ code }: { code: string }) {
  const { selectedRow } = useSelector(selectAdminPermissionStore);
  const { isOpen: detailOpen, toggleModal: toggleDetail } = useModal();
  const { isOpen: modifyOpen, toggleModal: toggleModify } = useModal();

  return (
    <>
      <SHandle>
        <HandleButton
          tooltip="Thêm mới"
          className="handle-item"
          onClick={() => toggleDetail(true)}
          permissionCode={code}
          permissionType={PermOptionEnum['ADD']}
        >
          <FaPlus size={16} />
        </HandleButton>

        {selectedRow && (
          <HandleButton
            onClick={() => toggleModify(true)}
            tooltip="Chi tiết"
            className="handle-item"
            permissionCode={code}
            permissionType={PermOptionEnum['VIEW']}
          >
            <FaEye size={16} />
          </HandleButton>
        )}
      </SHandle>

      <CreateModal isOpen={detailOpen} toggleModal={toggleDetail} />

      <ModifyModal
        isOpen={modifyOpen}
        toggleModal={toggleModify}
        selectedRow={selectedRow}
      />
    </>
  );
}
