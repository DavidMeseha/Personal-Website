export const isTouchSreen = () => {
  if ("ontouchstart" in window) return true;
  else return false;
};
