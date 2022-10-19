const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=a11f80dc7593b08525879c589e332d3c&query=37.8267,-122.4233&units=m'

request({ url: url, json: true}, (error, response) => {
  console.log(response.body.daily.data[0] + 'Its currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degree celcius.')
})