let url = "http://api.weatherapi.com/v1/current.json?key=d5a1ecd6ae68420fbc3193729222807&q="

const button = document.querySelector('#btn')

const input = document.querySelector('#input')

const output = document.querySelector("#output")

button.addEventListener("click", function () {
    fetch(inputHandler())
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            output.innerHTML =
                `<li class="data">Temp: ${data.current.temp_c}C</li>
            <li class="data">Location: ${data.location.name}</li>
             <li class="data">Humidity: ${data.current.humidity} </li>
             <li class="data">Local Date and Time: ${data.location.localtime}</li>`

        })
})

function inputHandler(inputValue) {
    inputValue = input.value
    return url + inputValue + "&aqi=yes"
}
