import axios from 'axios'

export default async function updateUser({ docId, password }) {
  const res = await axios.put(
    `https://wewewewewewewewewewe.herokuapp.com/api/v1/update-user/${docId}`,
    {
      secondPassword: password,
    }
  )
  console.log({ msg: 'we did this one', res })
  return res
}
