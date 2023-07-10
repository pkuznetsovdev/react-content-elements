import React from "react";
import {
  ContentElementTag,
  ContentElementModifiers,
  ContentElementName,
} from "../content-element";

export type CEHTMLProps1<TagName extends keyof HTMLElementTagNameMap = never> =
  Omit<React.HTMLProps<TagName>, "content">;

export interface ContentByElementName {
  text: string;
  link: string;
  divider: string;
  button: string;
  custom: unknown;
  image: never;
  block: never;
  list: (string | Record<string, unknown>)[];
}

export interface ContentElementTemplateProps1 {
  text: CEHTMLProps1<"p">;
  link: CEHTMLProps1<"a">;
  divider: CEHTMLProps1<"hr">;
  button: CEHTMLProps1<"button">;
  custom: CEHTMLProps1 & {
    CustomTemplate: React.ElementType;
    customName?: string;
  };
  image: CEHTMLProps1<"img">;
  block: CEHTMLProps1<"div">;
  list: CEHTMLProps1<"ul" | "ol" | "dl"> &
    Partial<{
      itemKey: string;
      ItemTemplate: React.FC<React.PropsWithChildren>;
    }>;
}

export interface ContentElementConfig1<ElementName extends ContentElementName> {
  tag?: ContentElementTag;
  modifiers?: ContentElementModifiers | unknown[];
  if?: boolean;
  content?: ContentByElementName[ElementName];

  config?: Omit<ContentElementConfig1<ElementName>, "config"> &
    ContentElementTemplateProps1[ElementName];
  // move
  contentElementName?: ElementName;
}

export type ContentElementProps1<ElementName extends ContentElementName> =
  ContentElementTemplateProps1[ElementName] &
    ContentElementConfig1<ElementName>;
