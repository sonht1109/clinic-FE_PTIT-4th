import { selectAppStore } from 'containers/App/store/selecters';
import { useSelector } from 'react-redux';

const usePermission = (permissionCode: string) => {
  const { info } = useSelector(selectAppStore);
  if(!info || !info.groupPermission) return null;

  const permissionOptions = info.groupPermission.options.filter(
    o => o.permission.code === permissionCode,
  )[0];

  return {
    add: permissionOptions?.add || false,
    block: permissionOptions?.block  || false,
    delete: permissionOptions?.delete  || false,
    download: permissionOptions?.download || false,
    export: permissionOptions?.export || false,
    update: permissionOptions?.update || false,
    verify: permissionOptions?.verify || false,
    view: permissionOptions?.view || false,
  };
};

export default usePermission;