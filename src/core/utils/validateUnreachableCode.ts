export function validateUnreachableCode(x: never): never {
  throw new Error('Unreachable code');
}
