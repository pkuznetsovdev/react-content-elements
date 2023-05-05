import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react']
        }),
        resolve(),
        commonjs(),
        typescript(),
        scss({ fileName: "main.css", outputStyle: 'compressed'})
    ],
    external: Object.keys({
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.10.0"
      }),
}