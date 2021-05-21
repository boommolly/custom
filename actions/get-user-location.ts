import axios from 'axios'

const recordVisitor = async (location) => {
  const res = await axios.post('http://localhost:5000/api/v1/record-visitor', location)
  console.log({ res })
  return res
}

export default async function getUserLocation() {
  try {
    const res = await axios.get('https://extreme-ip-lookup.com/json/')
    const { city, continent, country, countryCode, isp, lat, lon, query, region } = res.data
    if (res) {
      await recordVisitor(res.data)
    }
    return { city, continent, country, countryCode, isp, lat, lon, ipAddress: query, region }
  } catch (err) {
    if (err) console.error('falied to get user location')
    return null
  }
}
