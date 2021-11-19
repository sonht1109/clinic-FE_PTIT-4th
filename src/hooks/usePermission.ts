import { selectAppStore } from 'containers/App/store/selecters';
import { useSelector } from 'react-redux';

const usePermission = () => {
  const { info } = useSelector(selectAppStore);
  if(!info) return null;

  return {
    add: true,
    block: true,
    delete: true,
    download: true,
    export: true,
    update: true,
    verify: true,
    view: true,
  };
};

export default usePermission;