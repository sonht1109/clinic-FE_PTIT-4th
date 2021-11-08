import { AxiosError } from "axios";
import { Alert } from "components/Alert";

const helper = {};

export const handleError = (err: AxiosError) => {

  if(err.response) {
    Alert({name: err.response.data.message || "Lỗi không xác định", icon: 'error'})
  }
  else {
    console.error(JSON.stringify(err))
  }
}

export { helper };
