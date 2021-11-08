const API_URL = {
  AUTH: {
    LOGIN: "api/auth/login",
    REGISTER: "api/auth/register",
    RESET_PASSWORD: "api/auth/reset-password",
    VERIFY_FA: "api/auth/verify-two-fa",
  },
  INFORMATIONS: {
    SINGLE_ACCOUNT: "api/info/profile",
    GET: "api/info/get", //{type}
    STATISTIC: "api/info/statistic",
  },
  EVENTS: {
    GET: "api/info/events", //get list event from Admin
    GET_ONE: (id: string) => `api/event/${id}`, //get info of only Event by id
    CREATE: "api/event",
    CREATING: "api/event/creating",
    CREATED: "api/event/created",
    GET_CONTESTANT: (eventId: string, pageNumber: number, pageSize: number) =>
      `api/event​/${eventId}​/contestant?page=${pageNumber}&sizePerPage=${pageSize}`,
    DETELE: (id: string) => `api/event/${id}`, //ID
    LOCK: (id: string) => `api/event/action/lock/${id}`, //ID
    VERIFY: (id: string) => `api/event/action/verify/${id}`, //ID
    UN_LOCK: (id: string) => `api/event/action/unlock/${id}`, //ID
    RANKING: (id: string) => `api/event/${id}/ranking?page=1&sizePerPage=10`, //ID
    THEME: {
      GET: (id: string) => `api/event/theme/${id}`,
      POST: (id: string) => `api/event/theme/${id}`,
    },
    CONFIRM: (id: string) => `api/event/confirm/${id}`,
    PUSBLISH: "api/blockchain/publish",
  },
  CONTESTANT: {
    CREATE: {
      ONE: "api/contestant",
      EXCEL: "api/contestant/excel",
    },
    DELETE: "api/contestant",
    DELETE_TYPE: (id: string) => `api/contestant/type/${id}`,
  },
  //admin home
  ADMIN: {
    DASH: "api/info/statistic",
    EVENTS_CREATED: "api/info/get/event",
  },
  OFFICER_ACCOUNT: {
    GET: "api/info/get/user",
  },
  ADMIN_ACCOUNT: {
    GET: "api/info/admins",
    GET_GROUP_PERMISION: "api/permission/group",
    HANDLE: (id: string) => `api/user/action/${id}`, //:id
  },
  KYC: {
    GET: "api/info/kycs",
    GET_ONE: (id: string) => 'api/kyc/' + id,
    POST: "api/kyc",
    POST_ACTION: "api/kyc/action",
    CANCEL: (id: string) => `api/kyc/action/${id}`,
  },
  PERMISSION: {
    GET_GROUP: "api/permission/group",
    GET_PERMISSION: "api/permission",
    CREATE: "api/permission/group/add",
    UPDATE: (ID: string) => `api/permission/group/update/${ID}`,
  },
  NOTIFYS: {
    GET: "api/notification",
    CREATE: "api/notification",
    UPDATE: (id: string) => `api/notification/${id}`,
    DELETE: `api/notification`,
  },
  // post img
  POST_IMG: "api/event/theme/image",
  USER: {
    USER_ACTION: (id: string) => `api/user/action/${id}`,
    USER_INFO: "api/user/info",
    UPDATE_INFO: "api/user/info",
    DETELE: (id: string) => `api/user/${id}`,
  },
  SECURITY: {
    GET_QR: "api/security/qr-code",
    POST_TWO_FA: "api/security/two-fa",
    CHANGFGE_PASSWORD: "api/security/change-password",
    RESTORE_INFO: "api/security/restore-info",
  },
  VIEW_NOTIFICATION: {
    GET: "api/notification/user",
    GET_DETAILS: (id: string) => `api/notification/detail/${id}`,
    CONFIRM_READ: (id: string) => `api/notification/confirm-read/${id}`
  },
};

export default API_URL;
