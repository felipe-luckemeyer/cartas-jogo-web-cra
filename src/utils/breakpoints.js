const xs = '320px';
const sm = '600px';
const md = '960px';
const lg = '1280px';
const xl = '1920px';
const breakpointMax = (size) => `@media (max-width: ${size})`;
const breakpointMin = (size) => `@media (min-width: ${size})`;
const breakpointBetween = (min, max) => `@media (min-width: ${min}) and (max-width: ${max})`;
const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
const breakpointsSizes = {
  xs,
  sm,
  md,
  lg,
  xl,
};

export {
  xs,
  sm,
  md,
  lg,
  xl,
  breakpointMax,
  breakpointMin,
  breakpointBetween,
  breakpoints,
  breakpointsSizes,
};