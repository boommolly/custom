import axios from 'axios'

export default async function createUser(formData) {
  const res = await axios.post(`${process.env.BASE_URL}/create-user`, formData)
  return res.data.docId
}
