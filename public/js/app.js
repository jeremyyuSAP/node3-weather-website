// const fetch = require("node-fetch");

// console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From JavaScript'


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''


    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error)
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            } else {
                console.log(data.forecast)
                // console.log(data.locations)
                messageTwo.textContent = ('Current forecast: ' + data.forecast.current + ', with a temp of ' + data.forecast.temp + 'F, with wind of ' + data.forecast.wind_speed + 'MPH from direction ' + data.forecast.wind_dir)
                messageOne.textContent = data.location
            }
        })
    })


    console.log(location)
})


