export function isPromise<T>(p: Promise<T>) {
  return p && typeof p.then === 'function'
}
