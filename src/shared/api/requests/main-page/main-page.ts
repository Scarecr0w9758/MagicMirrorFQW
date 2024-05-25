import { apiInstance } from '../../base'

const BASE_URL = '/hello'

export function getUserWidgets(userId?: number) {
  return apiInstance.get(BASE_URL)
}
