import { createApp } from "vue";
import "./styles/reset.css";
import "./styles/variables.css";
import App from "./App.vue";
import MyButton from './stories/Button.vue';

const buttonComp = createApp(App)
buttonComp.component("MyButton", MyButton)

createApp(App).mount("#app");

<template>
  <form>
    <MyButton />
  </form>
</template>