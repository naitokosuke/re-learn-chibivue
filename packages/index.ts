// const app = createApp({
//   render() { return "Hello World"; },
// });
// app.mount();
export type AppOptions = {
  render: () => string;
};
export type App = {
  mount: (selector: string) => void;
};

// App 型のオブジェクトを返す関数(ファクトリ関数)
export const createApp = (options: AppOptions): App => {
  return {
    // mount とは 何かを DOM に描画すること
    mount: selector => {
      const root = document.querySelector(selector);
      if (root) root.innerHTML = options.render();
    },
  };
};
