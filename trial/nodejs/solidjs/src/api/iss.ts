export async function fetchISSCurrentLocation() {
  const response = await fetch('http://api.open-notify.org/iss-now.json')
  return await response.json()
}
