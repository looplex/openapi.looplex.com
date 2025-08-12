export const getAntdCurrentBreakPoint = (antdScreensObj) => {
  if (!antdScreensObj) return
  const trueOptions = Object.entries(antdScreensObj)?.filter((screen) => !!screen[1])
  return trueOptions?.at(-1)?.at(0)
}
