interface ISSCurrentLocation {
  message: string
  timestamp: number
  iss_position: {
    latitude: string
    longitude: string
  }
}
