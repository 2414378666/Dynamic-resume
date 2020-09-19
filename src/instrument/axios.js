import axios from 'axios'

function axdata(config) {
  const retur = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8'
  })

  return retur(config)
}

export function gethello(type, page) {
  return axdata({
    url: '/home/data',
    params: {
      type: type,
      page: page
    }
  })
}

export function getres() {
  return axdata({
    url: '/recommend'
  })
}