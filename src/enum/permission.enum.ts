enum PermEnum {
  ADMIN_ACCOUNT = 1,
  USER_ACCOUNT,
  EVENT,
  KYC,
  CONTENT,
  NOTIFICATION,
  SETTING,
  RANK,
}

enum PermOptionEnum {
  ADD = 'add',
  UPDATE = 'update',
  DELETE = 'delete',
  VIEW = 'view',
  VERIFY = 'verify',
  BLOCK = 'block',
  DOWNLOAD = 'download',
  EXPORT = 'export',
}

export { PermEnum, PermOptionEnum };
