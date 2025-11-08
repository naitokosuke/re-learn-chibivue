// `renderer` のファクトリ関数の引数に `nodeOps`(Node 操作オブジェクト) を渡して、renderer オブジェクトを生成

import { createRenderer } from "../runtime-core";
import { nodeOps } from "./runtime-dom";

const { render } = createRenderer(nodeOps);
