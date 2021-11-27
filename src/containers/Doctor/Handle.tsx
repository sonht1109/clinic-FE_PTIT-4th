import HandleButton from 'components/Button/HandleButton';
import HandleSection from 'components/HandleSection';
import DeleteModal from 'components/Modal/DeleteModal';
import { PermOptionEnum } from 'enum';
import React, { useState } from 'react';
import { FaEye, FaPlus, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import View from './Modals/View';
import { onDelete } from './store/actions';
import { selectDoctorStore } from './store/selecters';

export default function Handle() {
  const { selectedRow } = useSelector(selectDoctorStore);

  const dp = useDispatch();

  const [viewOpen, toggleView] = useState(false);
  const [deleteOpen, toggleDelete] = useState(false);
  const [createOpen, toggleCreate] = useState(false);

  return (
    <>
      <HandleSection>
        <HandleButton
          tooltip="Thêm mới"
          className="handle-item"
          permissionType={PermOptionEnum['ADD']}
          onClick={() => toggleCreate(true)}
        >
          <FaPlus size={16} />
        </HandleButton>

        {selectedRow && (
          <>
            <HandleButton
              tooltip="Chi tiết"
              className="handle-item"
              permissionType={PermOptionEnum['VIEW']}
              onClick={() => toggleView(true)}
            >
              <FaEye size={16} />
            </HandleButton>

            <HandleButton
              tooltip="Xóa"
              className="handle-item"
              permissionType={PermOptionEnum['DELETE']}
              onClick={() => toggleDelete(true)}
            >
              <FaTrash size={16} />
            </HandleButton>
          </>
        )}
      </HandleSection>
      <View isCreating={false} isOpen={viewOpen} toggleModal={toggleView} title="Xem chi tiết" />
      <View isCreating={true} isOpen={createOpen} toggleModal={toggleCreate} title="Tạo mới" />
      {selectedRow && (
        <DeleteModal
          isOpen={deleteOpen}
          toggleModal={toggleDelete}
          title="Xóa"
          onSubmit={() => dp(onDelete(selectedRow?.id))}
        />
      )}
    </>
  );
}
