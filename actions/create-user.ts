import axios from 'axios'

export default async function createUser(formData) {
  const res = await axios.post(
    'https://wewewewewewewewewewe.herokuapp.com/api/v1/create-user',
    formData
  )
  return res.data.docId
}
