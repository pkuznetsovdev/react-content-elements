import { replaceTscAliasPaths } from "tsc-alias";

const modulePaths = ["./dist/esm", "./dist/cjs"];

export default function () {
  modulePaths.map((outDir) => replaceTscAliasPaths({ outDir }));
}
