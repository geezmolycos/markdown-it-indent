import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';


const plugins = [
  nodeResolve(),
  commonjs(),
  {
    banner() {
      return `/*! ${pkg.name} ${pkg.version} https://github.com/${pkg.repository} @license ${pkg.license} */`;
    }
  }
];


export default [
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/markdown-it-indent.js',
        format: 'umd',
        name: 'markdownitIndent'
      }
    ],
    plugins: plugins
  },
];
