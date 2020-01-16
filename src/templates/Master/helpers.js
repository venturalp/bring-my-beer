export const shouldStick = (windowHeight, wrapperHeight, footerHeight) =>
  windowHeight - wrapperHeight >= footerHeight
