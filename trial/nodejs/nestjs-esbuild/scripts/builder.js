/* eslint-disable */
import { build } from 'esbuild'
import pkg from '../package.json' assert { type: 'json' }

export async function builder() {
  const dependencies = Object.keys(pkg.dependencies ?? {})
  const peerDependencies = Object.keys(pkg.peerDependencies ?? {})

  /** @type {import('esbuild').BuildOptions} */
  const options = {
    entryPoints: ['./src/main.ts'],
    outfile: './dist/main.cjs',
    bundle: true,
    minify: true,
    platform: 'node',
    target: 'node17',
    external: [...dependencies, ...peerDependencies],
    sourcemap: process.env.NODE_CONFIG_ENV !== 'production',
  }

  await build(options)
}

builder()
