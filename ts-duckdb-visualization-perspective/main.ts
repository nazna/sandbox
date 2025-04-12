import perspective from '@finos/perspective';
import perspectiveViewer from '@finos/perspective-viewer';

import '@finos/perspective-viewer-d3fc';
import '@finos/perspective-viewer-datagrid';
import '@finos/perspective-viewer/dist/css/pro-dark.css';

// @ts-expect-error
import CLIENT_WASM from '@finos/perspective-viewer/dist/wasm/perspective-viewer.wasm?url';
// @ts-expect-error
import SERVER_WASM from '@finos/perspective/dist/wasm/perspective-server.wasm?url';

await Promise.all([perspective.init_server(fetch(SERVER_WASM)), perspectiveViewer.init_client(fetch(CLIENT_WASM))]);

const viewer = document.createElement('perspective-viewer');
document.body.append(viewer);

const response = await fetch('/weather.arrow');
const buffer = await response.arrayBuffer();

const worker = await perspective.worker();
const table = worker.table(buffer);

viewer.load(table);
