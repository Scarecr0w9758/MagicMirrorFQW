import { apiInstance } from "../../base"

const BASE_URL = "/user"

export function registerUser(params) {
  return apiInstance.post(`${BASE_URL}/registration`, params)
}
