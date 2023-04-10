export const BREAKPOINTS_BY_NAME = {
  xs: {
    from: 0,
    to: 767,
  },
  sm: {
    from: 768,
    to: 959,
  },
  md: {
    from: 960,
    to: 1247,
  },
  lg: {
    from: 1248,
    to: 1631,
  },
  xl: {
    from: 1632,
    to: 1911,
  },
  xxl: {
    from: 1920,
    to: Infinity,
  },
} as const;

/** shared export start */
export function useBreakpoints() {
  const currentBreakpointName = useGetCurrentBreakpointName();

  return [currentBreakpointName, { BREAKPOINTS_BY_NAME, BREAKPOINT_NAMES }] as const;
}

export type BreakpointName = keyof typeof BREAKPOINTS_BY_NAME;
/** shared export end */

export const BREAKPOINT_NAMES = Object.keys(BREAKPOINTS_BY_NAME).map(
  (breakpointName) => breakpointName,
) as Array<BreakpointName>;

function useGetCurrentBreakpointName() {
  let currentBreakpoint = null;
  const currentScreenWidth = window.innerWidth;

  for (const bpName in BREAKPOINTS_BY_NAME) {
    const breakpointName = bpName as BreakpointName; // ts type fix
    const breakpoint = BREAKPOINTS_BY_NAME[breakpointName];

    if (breakpoint.from <= currentScreenWidth && breakpoint.to >= currentScreenWidth) {
      currentBreakpoint = breakpointName;
      break;
    }
  }

  return currentBreakpoint;
}
