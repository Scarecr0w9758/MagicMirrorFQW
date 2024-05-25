<script setup lang="ts">
// MY WEATHER API KEY: 85caa61f67df80dd59145e2a71bceda6
// let apiKey = "85caa61f67df80dd59145e2a71bceda6";    //Enter your API key here
// let apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&lang=en";

// if ('geolocation' in navigator) {
//   const do_something = (...args) => console.log(args)
//   console.log('hello!', navigator)
//   /* местоположение доступно */
// } else {
//   console.log('NOT AVAILABLE!')
//   /* местоположение НЕ доступно */
// }

if (!navigator.geolocation) {
  console.error('Geolocation не поддерживается вашим браузером')
} else {
  console.log('Определение местоположения…')
  navigator.geolocation.getCurrentPosition(success, error)
}

function success(position) {
  console.log('pos', position)
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude

  // status.textContent = ''
  // mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
  // mapLink.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`
}

function error() {
  console.error('Невозможно получить ваше местоположение')
}
</script>
