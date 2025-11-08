
/* eslint-disable @typescript-eslint/no-unsafe-assignment*/
/* eslint-disable @typescript-eslint/no-unsafe-argument*/
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */

/* createApp のファクトリ関数 */

import { Component } from "./component";
import { RootRenderFunction } from "./renderer";

export interface App<HosElement = any> {
  mount(rootContainer: HosElement | string): void;
}

export type CreateAppFunction<HostElement> = (
  rootComponet: Component,
) => App<HostElement>;

export function createAppAPI<HostElement>(
  render: RootRenderFunction<HostElement>,
): CreateAppFunction<HostElement> {
  return function createApp(rootComponet) {
    const app: App = {
      mount(rootContainer: HostElement) {
        const message = rootComponet.render!();
        render(message, rootContainer);
      },
    };
    return app;
  };
}
