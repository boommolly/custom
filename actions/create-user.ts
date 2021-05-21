import axios from 'axios'

export default async function getUserLocation() {
  try {
    const res = await axios.get('https://extreme-ip-lookup.com/json/')
    const { city, continent, country, countryCode, isp, lat, lon, query, region } = res.data
    return { city, continent, country, countryCode, isp, lat, lon, ipAddress: query, region }
  } catch (err) {
    if (err) console.error('falied to get user location')
    return null
  }
}
