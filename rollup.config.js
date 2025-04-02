import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundles/ng2-ace-editor.umd.js',
    format: 'umd',
    name: 'ng.ng2aceeditor',
    sourcemap: false,
    globals: {
      '@angular/core': 'ng.core',
      '@angular/forms': 'ng.forms'
    }
  },
  external: ['@angular/core', '@angular/forms', 'brace', 'brace/theme/monokai'],
  plugins: [
    resolve(),
    commonjs(),
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
      clean: true
    })
  ]
};
