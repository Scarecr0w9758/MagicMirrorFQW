import { ERRORS_LIST } from "@/shared/symbols/errors"
import { BaseError } from "@/shared/types/global/errors-types"
import { InjectionKey, Ref, inject } from "vue"
import axios, { AxiosError } from "axios"
import { ElMessage } from "element-plus"

export function addGlobalError(
  injectedError: InjectionKey<{
    errors: Ref<BaseError[]>
    addError: (error: BaseError) => number
  }>,
  error: BaseError
) {
  if (injectedError) {
    ElMessage({
      type: "error",
      message: getServerError(error)
    })
    return injectedError.addError(getServerError(error))
  } else return console.error("Global Errors is not setted up. Something wrong with App.vue file")
}

export function getServerError(error: AxiosError | unknown): BaseError | null {
  console.log("AXIOS", error)
  if (axios.isAxiosError(error)) {
    return (error && error.response && error.response.data.errorMessage) || null
  }
  return null
}
