import { InjectionKey, Ref } from "vue"

import { BaseError } from "@/shared/types/global/errors-types"

export const ERRORS_LIST = Symbol("errors-list") as InjectionKey<{
  errors: Ref<BaseError[]>
  addError: (error: BaseError) => number
}>
