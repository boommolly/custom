import axios from 'axios'

const recordVisitor = async (location) => {
  const res = await axios.post(`${process.env.BASE_URL}/record-visitor`, location)
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
    return null
  }
}
