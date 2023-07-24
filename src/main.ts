import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { Icon } from "@iconify/vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
// import * as dayjs from "dayjs";
// dayjs().format();

const app = createApp(App);
app.use(router).mount("#app");
// eslint-disable-next-line vue/multi-word-component-names
app.component("Icon", Icon);
app.use(Antd);
