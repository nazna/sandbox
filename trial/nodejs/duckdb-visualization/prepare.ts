import { readFile, writeFile } from 'node:fs/promises';
import { DuckDBInstance } from '@duckdb/node-api';
import { compress } from '@mongodb-js/zstd';
import { tableFromJSON, tableToIPC } from 'apache-arrow';
import { DateTime } from 'luxon';

async function readAndWrite(name: string): Promise<void> {
  const content = await readFile(`./data/${name}.csv`, 'utf-8');
  const lines = content
    .split('\n')
    .map((line) => line.split(','))
    .filter((e) => e.at(0) && e.at(1))
    .map((e) => ({
      yyyymmdd: DateTime.fromFormat(e.at(0) as string, 'yyyy/M/d').toFormat('yyyyMMdd'),
      temperature: Number(e.at(1)),
    }))
    .map((e) => JSON.stringify(e))
    .join('\n');

  const buffer = Buffer.from(lines);
  const compressed = await compress(buffer);

  await writeFile(`./data/${name}.jsonl.zst`, compressed);
}

await readAndWrite('kurashiki');
await readAndWrite('tokyo');

const instance = await DuckDBInstance.create();
const connection = await instance.connect();

const result = await connection.run(`
  SELECT
    yyyymmdd,
    parse_filename(parse_filename(filename, true, 'system'), true) AS city,
    temperature
  FROM
    read_json_auto('./data/*.jsonl.zst', filename=true);`);

const rows = await result.getRowObjects();

const table = tableFromJSON(rows);
const ipc = tableToIPC(table, 'file');

await writeFile('./public/weather.arrow', ipc);
