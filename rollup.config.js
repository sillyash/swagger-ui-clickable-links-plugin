import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

export default {
  input: 'src/plugin.tsx',
  external: ['react', 'react-dom'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: pkg.unpkg,
      format: 'umd',
      name: 'SwaggerUIClickableLinks',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  plugins: [
    // Replace process.env.NODE_ENV for UMD build to avoid browser errors
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
      declarationMap: true,
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    // Custom plugin to create index.d.ts
    {
      name: 'create-index-dts',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'index.d.ts',
          source: `import ClickableLinksPlugin from './plugin';
export default ClickableLinksPlugin;
export * from './utils';
`,
        });
      },
    },
  ],
};
