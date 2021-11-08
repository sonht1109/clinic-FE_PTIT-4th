enum GenderEnum {
  NONE = "none",
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}
enum UserTypeIdPersonEnum {
  NONE = "none",
  PASSPORT = "passport",
  GPLX = "gplx",
  CCCD = "cccd",
  CMND = "cmnd",
}

enum UserTypeEnum {
  ADMIN = "admin",
  USER = "user",
}

enum UserActionEnum {
  LOCK = "lock",
  UNLOCK = "unlock",
  // ADD_PERM = "add-perm",
}

enum UseStatusEnum {
  NOUSE,
  USE,
}

enum UserLanguageEnum {
  VN = "vi",
  ENG = "en",
}

export {
  GenderEnum,
  UserTypeEnum,
  UserActionEnum,
  UseStatusEnum,
  UserLanguageEnum,
  UserTypeIdPersonEnum,
};
