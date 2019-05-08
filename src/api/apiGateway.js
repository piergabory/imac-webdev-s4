import fakeResponse from './fakeDatabase'

const apiAccessToken = 1115531291985896
const apiRoot = 'https://superheroapi.com/api.php'

const getHero = id => {
  console.log('hello')
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
      .then(response => handleHTTPSuccess(response, resolve))
      .catch(reject)
  })
}

const searchHero = keyword => {
  return new Promise((resolve, reject) => {
    fetch(`${apiRoot}/${apiAccessToken}/search/${keyword}`)
      .then(response => handleHTTPSuccess(response, resolve))
      .catch(reject)
  })
}

const handleHTTPSuccess = (data, resolve) => {
  data.json().then(jsonData => {
    console.log(data, jsonData, jsonData.response === 'success')
    console.info('api request status: ', jsonData.response)
    if (jsonData.response === 'success') {
      return resolve(jsonData)
    } else {
      console.error('server error response:', jsonData.error)
      return resolve(fakeResponse)
    }
  })
}

export default {getHero, searchHero}
