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

export interface RendererNode {
  [key: string]: any;
}

export interface RendererElement extends RendererNode { }
