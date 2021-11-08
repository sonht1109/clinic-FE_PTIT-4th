import HandleButton from 'components/Button/HandleButton';
import loadable from 'components/LazyLoad';
import { PermOptionEnum } from 'enum';
import useModal from 'hooks/useModal';
import { FaEye } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { SHandle } from '../AdminEventManagement/style';
import { selectAdminKycManagementStore } from './store/selecters';

const DetailModal = loadable(() => import('./DetailModal'));

export default function Handle({ code }: { code: string }) {
  const { selectedRow } = useSelector(selectAdminKycManagementStore);

  const { isOpen: detailOpen, toggleModal: toggleDetail } = useModal();

  return (
    <>
      <SHandle>
        {selectedRow && (
          <HandleButton
            tooltip="Chi tiết"
            className="handle-item"
            permissionCode={code}
            permissionType={PermOptionEnum['VIEW']}
            onClick={() => toggleDetail(true)}
          >
            <FaEye size={16} />
          </HandleButton>
        )}
      </SHandle>

      {selectedRow && (
        <DetailModal
          kycId={selectedRow?.id}
          isOpen={detailOpen}
          toggleModal={toggleDetail}
          code={code}
        />
      )}
    </>
  );
}
