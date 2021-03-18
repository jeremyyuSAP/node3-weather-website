const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=596b82ba3be193284f2ed01f6a175f84&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                location: body.location.name,
                region: body.location.region,
                temp: body.current.temperature,
                current: body.current.weather_descriptions[0],
                humidity: body.current.humidity,
                cloudcover: body.current.cloudcover,
                feelslike: body.current.feelslike,
                wind_dir: body.current.wind_dir,
                wind_speed: body.current.wind_speed
            })
        }
    })
}

module.exports = forecast


