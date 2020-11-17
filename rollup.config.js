import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs'
    },
    {
      file: 'lib/index.esm.js',
      format: 'esm'
    },
    {
      file: 'lib/index.umd.js',
      format: 'umd',
      name: 'ReactEditorjsRenderer',
      globals: {
        react: 'React',
        'prop-types': 'PropTypes'
      }
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: "runtime"
    }),
    commonjs()
  ],
  external: ['prop-types', 'react']
}