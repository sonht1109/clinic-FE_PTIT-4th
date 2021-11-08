enum IdTypeEnum {
  NONE = 'none',
  PASSPORT = 'passport',
  GPLX = 'gplx',
  CCCD = 'cccd',
  CMND = 'cmnd',
}

enum KycStatusEnum {
  WAITING = 'waiting',
  ACCEPTED = 'accepted',
  DENIED = 'denied',
}

enum KycActionEnum {
  DENIED = 'denied',
  VERIFY = 'verify',
}

export { IdTypeEnum, KycStatusEnum, KycActionEnum };
