<template>
  <div class="register-block">
    <el-form>
      <el-form-item label="Email или логин">
        <base-input placeholder="Введите email или логин" v-model:text="email"></base-input>
      </el-form-item>
      <el-form-item label="Пароль">
        <base-input
          placeholder="Введите пароль"
          type="password"
          v-model:text="password"
        ></base-input>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="isFetchLoading"
          class="register-block__submit primary-gradient-button"
          @click="onSubmit"
        >
          Войти в аккаунт
        </el-button>

        <!-- <base-button :is-loading="true" class="register-block__submit">
          Войти в аккаунт</base-button
          > -->
      </el-form-item>
      <el-button
        color="warning"
        :loading="isFetchLoading"
        class="register-block__submit success-hover"
        @click="router.push(routerKeys.AUTH.children.REGISTRATION.path)"
      >
        Регистрация
      </el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/renderer/src/shared/forms/BaseInput.vue"
import { BaseButton } from "@/renderer/src/shared/forms"
import { registerUser } from "@/shared/api/requests/user/user"
import { addGlobalError } from "@/shared/helpers/errors/errors-actions"
import { ERRORS_LIST } from "@/shared/symbols/errors"
import { inject, ref } from "vue"
import { useRouter } from "vue-router"
import { routerKeys } from "@/shared/router/router-keys"

const isFetchLoading = ref(false)
const login = ref()
const email = ref()
const name = ref()
const password = ref()
const injectedError = inject(ERRORS_LIST)!

const router = useRouter()
console.log("injErr:", injectedError)
// const { addError } = inject(ERRORS_LIST)

async function onSubmit() {
  try {
    isFetchLoading.value = true
    // const response = await getUserWidgets(1)
    const dto = {
      email: email.value,
      login: login.value,
      name: name.value,
      password: password.value
    }
    const response2 = await registerUser(dto)

    console.log("resp", response2)
  } catch (error) {
    addGlobalError(injectedError, error)
    // console.error("error while Fetching App.vue", error)
  } finally {
    isFetchLoading.value = false
  }
}

// const login = ref()
</script>
<style scoped lang="scss">
.register-block {
  width: 300px;

  &__submit {
    margin-top: 1rem;
    width: 100%;
  }
}
</style>
