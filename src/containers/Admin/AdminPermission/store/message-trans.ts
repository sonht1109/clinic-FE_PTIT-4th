/*
 * AdminPermission  Messages
 *
 * This contains all the text for the AdminPermission component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'AdminPermission';
export const status = 'AdminPermission.status';
export const thead = 'AdminPermission.thead';

const adminPermissionMessages = defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'title',
  },

  1: {
    id: `${status}.1`,
    defaultMessage: 'Sử dụng',
  },
  0: {
    id: `${status}.0`,
    defaultMessage: 'Không sử dụng',
  },

  add: {
    id: `${thead}.add`,
    defaultMessage: 'Add',
  },
  update: {
    id: `${thead}.update`,
    defaultMessage: 'Update',
  },
  delete: {
    id: `${thead}.delete`,
    defaultMessage: 'Delete',
  },
  view: {
    id: `${thead}.view`,
    defaultMessage: 'View',
  },
  verify: {
    id: `${thead}.verify`,
    defaultMessage: 'Verify',
  },
  block: {
    id: `${thead}.block`,
    defaultMessage: 'Block',
  },
  download: {
    id: `${thead}.download`,
    defaultMessage: 'Download',
  },
  export: {
    id: `${thead}.export`,
    defaultMessage: 'Export',
  },
  name: {
    id: `${thead}.name`,
    defaultMessage: 'Tên quyền',
  },

});

export default adminPermissionMessages;
