import React from "react";
import { ListItemProps, ListProps } from "./types";
import type { WithContentTemplateElementProps } from "../../content-element";
import { getCEClassName, checkIfObject } from "../../utils";

export const List = ({
  children,
  tag: TagName,
  itemKey,
  content,
  ItemTemplate,
  ...props
}: Omit<WithContentTemplateElementProps, "content"> & ListProps) => {
  const elementKeyByListProps = itemKey || "id";

  if (content) {
    return (
      <>
        {/* TODO FAQ: How to fix ts
         @ts-ignore */}
        <TagName {...props}>
          {content.map((listItemData, idx) => {
            // TODO FAQ: How to fix ts
            // @ts-ignore
            const elementKeyValue = listItemData.id || idx;

            let itemData = listItemData;
            let liProps = {};

            if (checkIfObject(listItemData)) {
              const { liElementProps, ...restListItemData } = listItemData;
              itemData = restListItemData;
              liProps = (liElementProps as Record<string, unknown>) || {};
            }

            return (
              <ListItem
                key={elementKeyValue as string | number}
                data-item-index={idx}
                {...liProps}
              >
                {/* @ts-ignore*/}
                {ItemTemplate ? (
                  // @ts-ignore
                  <ItemTemplate {...itemData} itemIndex={idx} />
                ) : (
                  listItemData
                )}
              </ListItem>
            );
          })}
        </TagName>
      </>
    );
  }

  return (
    // TODO: FAQ contentElementTag type
    // @ts-ignore-next-line
    <TagName {...props}>
      {React.Children.map(children, (child, idx) => {
        // TODO: FAQ How to fix
        // @ts-ignore-next-line
        const elementKeyValue = child?.props[elementKeyByListProps] || idx;

        return (
          <ListItem key={elementKeyValue} data-item-index={idx}>
            {child}
          </ListItem>
        );
      })}
    </TagName>
  );
};

export const ListItem = ({ children, ...props }: ListItemProps) => {
  return (
    <li className={getCEClassName("item")} {...props}>
      {children}
    </li>
  );
};

List.displayName = "CE.List";
ListItem.displayName = "CE.ListItem";
