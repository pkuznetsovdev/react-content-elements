import React, { FC } from 'react';
import { ContentElementTextProps } from "./types";
import type { FCWithChildren } from "@app/types";

// no name
const ContentElementText: FCWithChildren<ContentElementTextProps> = ({ children }) => {

    return (
        <p>
            {children}
        </p>
    );
};

export default ContentElementText;