export function isPromise(p) {
  return p && typeof p.then === 'function'
}
