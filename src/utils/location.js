export const getLocation = fallback => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fallback)
    return true
  }

  return false
}
