export function blpop(...keys) {
  // remove timeout arg
  keys.length = keys.length - 1;
}
