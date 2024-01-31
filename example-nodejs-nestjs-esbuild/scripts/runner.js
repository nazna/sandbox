/* eslint-disable */
import { spawn } from 'node:child_process'
import { builder } from './builder.js'

async function runner() {
  await builder()
  const cp = spawn('node', ['./dist/main.cjs'])

  cp.stdout.on('data', (data) => {
    process.stdout.write(`stdout: ${data}`)
  })

  cp.stderr.on('data', (data) => {
    process.stderr.write(`stderr: ${data}`)
  })
}

runner()
