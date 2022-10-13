import React from 'react';
import { ContentElementTextProps } from "./types";
import type { FCWithChildren } from "types";

// no name
const ContentElementText: FCWithChildren<ContentElementTextProps> = ({ children, tag: TagName }) => {

    return (
        <TagName>
            {children}
        </TagName>
    );
};

export default ContentElementText;