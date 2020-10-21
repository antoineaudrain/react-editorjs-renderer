import { join } from 'path'
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const packageJson = require('./package.json');

export default {
  input: join(__dirname, 'src', 'index.js'),
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    json(),
    babel({
      babelHelpers: 'runtime',
    }),
    resolve(),
    commonjs(),
  ]
};
