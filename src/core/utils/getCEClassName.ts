import { BASE_CLASSNAME } from "../content-element";
import { getClassName } from "./getClassName";

export const getCEClassName = (
  customCEName: string,
  modifiers: (string | unknown)[] = [],
): string =>
  getClassName([
    `${BASE_CLASSNAME} ${BASE_CLASSNAME}-${customCEName}`,
    ...modifiers,
  ]);
