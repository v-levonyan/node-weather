const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=eff515c2f5d0abdcdea2fe9e9d1cd229&query=' + lat +',' +long
    

    request({url: url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.error) {
            callback('Invalid params provided', undefined)
        } 
        else {
            callback(undefined, 
                `It is ${body.current.temperature}
                 but it feels like ${body.current.feelslike}
                  and humidity ${body.current.humidity} percent`
            )
        }
    })

}

module.exports = forecast