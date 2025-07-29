import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

// Optional Enhancements Breakdown
// 3. Use Pinia for State Management

createApp(App).use(createPinia()).mount("#app");
