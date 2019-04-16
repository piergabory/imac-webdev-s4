const apiAccessToken = 1115531291985896
const apiRoot = 'http://superheroapi.com/api/'

const getHero = id => {
  return new Promise((resolve, reject) => {
    fetch(`${apiRoot}/${apiAccessToken}/${id}`,
      {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        }
      })
      .then(response => resolve(response.json()))
      .catch(reject)
  })
}

const searchHero = keyword => {
  return new Promise((resolve, reject) => {
    fetch(`${apiRoot}/${apiAccessToken}/search/${keyword}`)
      .then(response => resolve(response.json()))
      .catch(reject)
  })
}

export default {getHero, searchHero}
