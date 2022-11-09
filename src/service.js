import axios from 'axios';

const url = "http://localhost:3000"

export async function getUser() {
  return new Promise((resolve) => {
    axios.get(url+'/user/12')
    .then(res => {
      return resolve(res.data)
    })
  })
}