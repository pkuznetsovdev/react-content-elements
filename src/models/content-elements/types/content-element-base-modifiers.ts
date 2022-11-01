import { CONTENT_ELEMENT_BASE_MODIFIERS } from "../constants";
import { ExtendsString } from "../../../shared/types";

export type ContentElementBaseModifier =
  typeof CONTENT_ELEMENT_BASE_MODIFIERS[number];

// TODO: Not working as expected, CONTENT_ELEMENT_BASE_MODIFIERS are not autocompleted, only name specific
export type WithContentElementBaseModifier<T extends string> = ExtendsString<
  ContentElementBaseModifier | T
>;
