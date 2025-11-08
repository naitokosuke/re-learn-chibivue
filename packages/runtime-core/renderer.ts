/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */

/*
 * ============================================================================
 * Renderer
 * ============================================================================
 *
 * render のロジックのみを持つオブジェクトを生成するためのファクトリ関数を定義
 * その際、Node(DOM に限らず)を扱うオブジェクトはファクトリの引数として受け取る
 *
 * ============================================================================
 */

export interface RendererOptions<HostNode = RendererNode> {
  setElementText(node: HostNode, text: string): void;
}

// このファイルは DOM に依存しないため
// "Node" というインターフェースで抽象化している
export interface RendererNode {
  [key: string]: any;
}
export interface RendererElement extends RendererNode { }

export type RootRenderFunction<HostElement = RendererElement> = (
  message: string,
  container: HostElement,
) => void;

export function createRenderer(options: RendererOptions) {
  const { setElementText: hostSetElementText } = options;

  const render: RootRenderFunction = (message, container) => {
    hostSetElementText(container, message);
  };

  return { render };
}
