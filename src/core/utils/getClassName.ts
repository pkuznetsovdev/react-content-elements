import { STRING_LITERALS } from "./constants";

export function getClassName(...classes: unknown[]) {
  const classNames = classes.flat(1);

  return (
    classNames
      .filter((n) => n && typeof n === "string")
      /*@ts-ignore*/
      .map((n) => n.trim().toLowerCase())
      .join(STRING_LITERALS.space)
  );
}
