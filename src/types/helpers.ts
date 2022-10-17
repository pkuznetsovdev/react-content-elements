import type { FC, PropsWithChildren } from "react";

export type FCWithChildren<T> = FC<PropsWithChildren<T>>;

export type ExtendsString<T extends string> = T | Omit<string, T>;
