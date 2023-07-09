export const checkIfObject = (
  maybeObject: unknown,
): maybeObject is Record<string, unknown> =>
  maybeObject === Object(maybeObject);
