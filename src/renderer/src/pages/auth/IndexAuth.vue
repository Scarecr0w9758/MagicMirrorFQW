<template>
  <!-- <div class="links">
    <router-link :to="routerKeys.AUTH.children.LOGIN.path">Sign in</router-link>
    <router-link :to="routerKeys.AUTH.children.REGISTRATION.path">Registration</router-link>
  </div> -->
  <div ref="registration" class="registration">
    <div class="registration__links">
      <mirror-logo class="icon"></mirror-logo>
      <!-- <inline-svg class="icon" src="./logo.svg" /> -->
      <span v-if="route.path == routerKeys.AUTH.children.LOGIN.path">
        Войти в волшебное зеркало
      </span>
      <span v-else> Зарегистрироваться в волшебном зеркале </span>
    </div>
    <router-view> </router-view>
  </div>
</template>

<script setup lang="ts">
import { routerKeys } from "@/shared/router/router-keys"
import MirrorLogo from "./MirrorLogo.vue"
import { useRoute, useRouter } from "vue-router"
import { onMounted, ref } from "vue"
import { computed } from "@vue/reactivity"
console.log("ath!")

const route = useRoute()
const router = useRouter()
</script>
<style scoped lang="scss">
.registration {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 400px;
  height: 500px;
  &:before {
    background-color: #0d1321;
    border-radius: 0.5rem;
    z-index: -1;
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    opacity: 0.5;
  }
  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  &__opacity {
    opacity: 0.15;
    background-color: red;
  }
}

.icon {
  /* border-radius: 50%; */
  /* background: linear-gradient(blue, pink); */
  width: 100px;
  height: auto;
  margin-top: 2rem;
  &:deep(svg) {
    path,
    rect {
      transition: fill 0.3s;
      fill: red !important;
    }
  }
  /*
	&--with-color {
		&:deep(*) {
			path,
			rect {
				fill: var(--icon-color) !important;
			}
		}
	}

	&--with-size {
		&:deep(svg) {
			height: var(--icon-size) !important;
			width: var(--icon-size) !important;
		}
	} */
}
</style>
