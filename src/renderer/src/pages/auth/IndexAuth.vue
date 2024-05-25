<template>
  <br />
  MAIN AUTH!
  <div class="links">
    <router-link :to="routerKeys.AUTH.children.LOGIN.path">Sign in</router-link>
    <router-link :to="routerKeys.AUTH.children.REGISTRATION.path">Registration</router-link>
  </div>

  <router-view> </router-view>
</template>

<script setup lang="ts">
import { routerKeys } from "@/shared/router/router-keys"
console.log("ath!")
</script>
<style scoped>
.links {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
