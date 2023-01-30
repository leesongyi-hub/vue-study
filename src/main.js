import { createApp } from "vue";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/icon.css";
import App from "./App.vue";
import BaseButton from './stories/Button.vue';

const buttonComp = createApp(App)
buttonComp.component("BaseButton", BaseButton)

createApp(App).mount("#app");

<template>
  <form>
    <BaseButton />
  </form>
</template>