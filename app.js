const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// collect location via command line
let searchAddress = process.argv[2]

if(!searchAddress) {
  return console.log('Please provide a valid location to check the weather against')
}


geocode(searchAddress, (error, {longitude, latitude, location}) => {
  if(error) {
    return console.log(error)
  }

  forecast(longitude, latitude, location, (error, foreCastData) => {
    if(error) {
      return console.log(error)
    } 

    console.log(foreCastData)
  })

})


