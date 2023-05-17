import React, { useMemo } from 'react';
import {
  ContentConditions,
  processContentConditionByGroups,
  processContentConditionBySchedule,
  validateByContentConditions,
} from 'src/core/temp/condition';
import { ConditionProps } from './types';

const ContentElementCondition = ({
  showMultipleResults: shouldShowMultipleResults = false,
  satisfyEveryCondition = true,
  children,
}: ConditionProps) => {
  const isFirstResultProvided = React.useRef(false);

  const elementsToRender = useMemo(
    () =>
      (
        React.Children.map(children, (item) => {
          if (
            validateByContentConditions(item?.props.contentConditions, {
              shouldSatisfyEveryCondition: item?.props.satisfyEveryCondition || satisfyEveryCondition,
            })
          ) {
            if (isFirstResultProvided.current) {
              return shouldShowMultipleResults ? item : null;
            }

            isFirstResultProvided.current = true;
            return item;
          }

          return null;
        }) || []
      ).filter(Boolean),
    [children, shouldShowMultipleResults, satisfyEveryCondition],
  );

  isFirstResultProvided.current = false;

  return elementsToRender.length ? <>{elementsToRender}</> : null;
};

export default ContentElementCondition;
