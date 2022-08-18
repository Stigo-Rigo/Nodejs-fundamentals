const fs = require('fs')

const contentBuffer = fs.readFileSync('1-json.json')
const jsonData = contentBuffer.toString()
const data = JSON.parse(jsonData)
data.name = 'mustick'
data.age = 25

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)
// console.log(data);