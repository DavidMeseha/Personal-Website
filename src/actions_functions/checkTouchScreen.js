export const isTouchSreen = (window) => {
    if ('ontouchstart' in window) return true
    else return false
}