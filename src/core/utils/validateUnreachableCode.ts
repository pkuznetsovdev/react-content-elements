// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function validateUnreachableCode(x: never): never {
  throw new Error('Unreachable code');
}
