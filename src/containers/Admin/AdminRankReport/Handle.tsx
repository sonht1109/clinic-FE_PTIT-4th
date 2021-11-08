import HandleButton from 'components/Button/HandleButton';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { SHandle } from '../AdminEventManagement/style';

export default function Handle() {
  return (
    <SHandle>
      <HandleButton
        tooltip="Thêm mới"
        className="handle-item"
        onClick={() => {}}
      >
        <FaPlus size={16} />
      </HandleButton>
    </SHandle>
  );
}
