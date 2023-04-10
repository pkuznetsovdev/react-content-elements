const DEFAULT_START_TIME = '00:00:00';
const DEFAULT_END_TIME = '23:59:59';
const VALID_DAY_VALUES = [1, 2, 3, 4, 5, 6, 7];

type ContentConditionBase = {
  satisfyEveryRule?: boolean;
  satisfyEveryCondition?: boolean;
};

type ContentConditionBaseParams = {
  shouldSatisfyEveryRule?: boolean;
  shouldSatisfyEveryCondition?: boolean;
};

type ContentConditionScheduleRuleBase = {
  time?: string;
};

type ContentConditionScheduleRuleByDay = ContentConditionScheduleRuleBase & {
  day: (typeof VALID_DAY_VALUES)[number];
};

type ContentConditionScheduleRuleByDate = ContentConditionScheduleRuleBase & {
  date: string;
};

type ContentConditionScheduleRuleTypes = ContentConditionScheduleRuleByDate | ContentConditionScheduleRuleByDay;
type ContentConditionScheduleRule = {
  start: ContentConditionScheduleRuleTypes;
  end?: ContentConditionScheduleRuleTypes;
};

type ContentConditionSchedule = ContentConditionBase & {
  type: 'schedule';
  rules: Array<ContentConditionScheduleRule>;
};

type UserGroup = string;

type ContentConditionGroups = ContentConditionBase & {
  type: 'groups';
  rules: UserGroup[];
};

type ContentCondition = ContentConditionSchedule | ContentConditionGroups;

export type ContentConditions = ContentCondition[];

type ProcessContentConditionByGroupsParams = {
  currentGroups: string[];
};

export const processContentConditionByGroups = (
  condition: ContentConditionGroups,
  { currentGroups }: ProcessContentConditionByGroupsParams,
) => {
  const { satisfyEveryRule: shouldSatisfyEveryRule = true, rules = [] } = condition;

  if (!rules.length) {
    return true;
  }

  const userGroups = new Set(currentGroups);

  return shouldSatisfyEveryRule
    ? rules.every((group) => userGroups.has(group))
    : rules.some((group) => userGroups.has(group));
};

export const processContentConditionBySchedule = (condition: ContentConditionSchedule) => {
  const { satisfyEveryRule: shouldSatisfyEveryRule = true, rules = [] } = condition;

  if (!rules.length) {
    return true;
  }

  const conditionResult = shouldSatisfyEveryRule
    ? rules.every(getConditionResultBySchedule)
    : rules.some(getConditionResultBySchedule);

  return conditionResult;
};

function checkIfDatesAreEqual(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}
function getTimeFromString(timeData: string) {
  const currentDateObj = new Date();
  // @ts-ignore
  currentDateObj.setHours(...timeData.split(':'));
  return currentDateObj.getTime();
}

/* Returns `true` if the condition is satisfied
 * */
function getConditionResultBySchedule(schedule: ContentConditionScheduleRule) {
  // check if valid data is provided
  if (!schedule.start) return false;

  const startDateData = 'date' in schedule.start && schedule.start.date;
  const startDay = schedule.start && 'day' in schedule.start && Number(schedule.start.day);

  if (startDateData && startDay) return false;
  if (!startDateData && !startDay) return false;
  if (startDay && !VALID_DAY_VALUES.includes(startDay)) return false;

  const endDateData = schedule.end && 'date' in schedule.end && schedule.end.date;
  const endDay = schedule.end && 'day' in schedule.end && Number(schedule.end.day);

  if (endDateData && endDay) return false;
  if (schedule.end && !endDateData && !endDay) return false;

  // Define required utility variables
  const currentDateObj = new Date();
  const [currentTime, currentDay] = [currentDateObj.getTime(), currentDateObj.getDay()];

  let isStarted = false;

  // Time prop is treated same for both schedule types
  const startTimeData = schedule.start.time || DEFAULT_START_TIME;
  const endTimeData = schedule.end?.time || DEFAULT_END_TIME;

  // Process schedule by date
  if (startDateData) {
    const startDateObj = new Date(startDateData + 'T' + startTimeData);
    const dateStartTime = startDateObj.getTime();
    // if no end date provided
    if (!endDateData) {
      return checkIfDatesAreEqual(startDateObj, currentDateObj) && currentTime >= dateStartTime;
    }

    const endDateObj = new Date(endDateData + 'T' + endTimeData);
    const dateEndTime = endDateObj.getTime();

    if (endDateObj < startDateObj) {
      isStarted = currentDateObj > startDateObj || currentDateObj < endDateObj;
    } else if (endDateObj > startDateObj) {
      isStarted = currentDateObj > startDateObj && currentDateObj < endDateObj;
    }

    if (checkIfDatesAreEqual(startDateObj, currentDateObj)) {
      isStarted = currentTime >= dateStartTime;
    }

    if (isStarted && checkIfDatesAreEqual(currentDateObj, endDateObj)) {
      isStarted = currentTime <= dateEndTime;
    }
  }

  // Process schedule by day
  const dayStartTime = getTimeFromString(startTimeData);
  const dayEndTime = getTimeFromString(endTimeData);

  if (startDay) {
    // if no end day provided
    if (!endDay) {
      return currentDay === startDay && currentTime >= dayStartTime;
    }

    if (endDay < startDay) {
      isStarted = currentDay >= startDay || currentDay <= endDay;
    } else if (endDay > startDay) {
      isStarted = currentDay >= startDay && currentDay <= endDay;
    }

    if (currentDay === startDay) {
      isStarted = currentTime >= dayStartTime;
    }

    if (isStarted && currentDay === endDay) {
      isStarted = currentTime <= dayEndTime;
    }
  }

  return isStarted;
}

export const getContentConditions = (
  contentConditions: ContentConditions | undefined,
  { shouldSatisfyEveryCondition }: ContentConditionBaseParams,
) => {
  if (!contentConditions) {
    return true;
  }

  // TODO: move to f params
  const groupsToVerifyByCondition: never[] = []; // useSelector(getUserGroups)

  const contentConditionResults = contentConditions.map((condition) => {
    switch (condition.type) {
      case 'groups':
        return processContentConditionByGroups(condition, {
          currentGroups: groupsToVerifyByCondition,
        });
      case 'schedule':
        return processContentConditionBySchedule(condition);
      default:
        return true;
    }
  });

  return shouldSatisfyEveryCondition ? contentConditionResults.every(Boolean) : contentConditionResults.some(Boolean);
};
