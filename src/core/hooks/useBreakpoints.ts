import { BREAKPOINT_NAMES, BreakpointName, BREAKPOINTS_BY_NAME } from "../constants";

export function useBreakpoints() {
    const currentBreakpointName = useGetCurrentBreakpointName();

    return [currentBreakpointName, { BREAKPOINTS_BY_NAME, BREAKPOINT_NAMES }] as const;
}

function useGetCurrentBreakpointName() {
    let currentBreakpoint = null;
    const currentScreenWidth = window.innerWidth;

    for (const bpName in BREAKPOINTS_BY_NAME) {
        const breakpointName = bpName as BreakpointName; // ts type fix
        const breakpoint = BREAKPOINTS_BY_NAME[breakpointName];

        if (breakpoint.from <= currentScreenWidth && breakpoint.to >= currentScreenWidth) {
            // @ts-ignore
            currentBreakpoint = breakpointName;
            break;
        }
    }

    return currentBreakpoint;
}