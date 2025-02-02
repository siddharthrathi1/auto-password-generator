import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'auto'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    typescript({
      typescript: require('typescript')
    })
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})]
};
