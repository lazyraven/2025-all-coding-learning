import { createApp } from 'vue'
import App from './App.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App).use(Toast, {
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  showCloseButtonOnHover: false,
}).mount('#app')

// app.use(Toast, {
//   position: "top-right",
//   timeout: 3000,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   showCloseButtonOnHover: false,
// });
