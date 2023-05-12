import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        // peerDepsExternal(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react']
        }),
        resolve(),
        commonjs(),
        typescript(),
        scss({ fileName: "main.css", outputStyle: 'compressed'}),
        copy({ targets: [
                {
                    src: ['src/core/styles/utils'],
                    dest: 'dist/styles'
                }
            ] }),
    ],
    external: Object.keys({
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.8.2"
      }),
}