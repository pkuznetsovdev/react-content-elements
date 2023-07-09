import React from "react";
import { CEHTMLProps } from "../../types";

export interface CustomProps extends CEHTMLProps<unknown> {
  CustomTemplate: React.FC<React.PropsWithChildren>;
}
