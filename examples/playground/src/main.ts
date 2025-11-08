import { createApp } from "chibivue";

// createApp は AppOptions 型の引数を受け取る必要がある
const app = createApp({
  render: () => "Hello World",
});

app.mount("#app");
