import axios from 'axios'

export default async function updateUser({ docId, password }) {
  const res = await axios.put(`${process.env.BASE_URL}/update-user/${docId}`, {
    secondPassword: password,
  })
  return res
}
