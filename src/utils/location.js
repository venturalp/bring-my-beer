export const getLocation = async fallback => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        function(position) {
          navigator.geolocation.getCurrentPosition(fallback)
          resolve(true)
        },
        function(error) {
          resolve(false)
        },
      )
    }
  })
}
