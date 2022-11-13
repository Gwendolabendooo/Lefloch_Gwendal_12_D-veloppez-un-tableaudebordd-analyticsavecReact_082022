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

export async function getUserActivity() {
  return new Promise((resolve) => {
    axios.get(url+'/user/12/activity')
    .then(res => {
      return resolve(res.data)
    })
  })
}

export async function getUserAverageSessions() {
  return new Promise((resolve) => {
    axios.get(url+'/user/12/average-sessions')
    .then(res => {
      return resolve(res.data)
    })
  })
}

export async function getUserPerformance() {
  return new Promise((resolve) => {
    axios.get(url+'/user/12/performance')
    .then(res => {
      return resolve(res.data)
    })
  })
}