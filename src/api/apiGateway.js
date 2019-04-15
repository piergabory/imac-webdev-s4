const apiAccessToken = 1115531291985896
const apiRoot = 'https://superheroapi.com/api/'

const getHero = id => {
  return new Promise((resolve, reject) => {
    fetch(`${apiRoot}/${apiAccessToken}/${id}`,
      {method: 'GET', headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*'}})
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
