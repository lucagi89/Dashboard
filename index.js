





fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data => 
        {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById('author').textContent = `By: ${data.user.name}`
        }
        )
    .catch(err =>{
        console.log(err)
        document.body.style.backgroundImage = `url('./images/error.avif')`
        alert('Something went wrong, please refresh the page')
    })


const cryptos = ['bitcoin', 'ethereum', 'cardano', 'solana', 'dogecoin', 'binancecoin']

let count = 0

async function fetchCryptoInfo(){
    fetch(`https://api.coingecko.com/api/v3/coins/${cryptos[count]}`)
    .then(res => {
        if(!res.ok){
            throw Error('something is wrong')
        }
        return res.json()})
    .then(data => {
        document.getElementById('crypto-top').innerHTML = `
                    <img src="${data.image.small}" id="logo">
                    <p id="name">${data.name}</p>
        `
        document.getElementById('crypto-bottom').innerHTML = `
        <p>📍: £${data.market_data.current_price.gbp}</p>
        <p>📈: £${data.market_data.high_24h.gbp}</p>
        <p>📉: £${data.market_data.low_24h.gbp}</p>
        `
        
    })
    .catch(err => alert(err))

    if (count < 5){
        count++
    }else{
        count = 0
    }
}

setInterval(fetchCryptoInfo, 5000)

setInterval(function(){
    const now = new Date();
    const time = now.toLocaleString('en-US', { timeStyle: "short" })
    document.getElementById('time').textContent = time
},1000)
    
  
 async function success(pos) {
    const myWeatherKey = 'a286a3b6b4c2b61d8d57c51d29aa5e7f'
    const crd = pos.coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${myWeatherKey}`)
        .then(res => res.json())
        .then(data => console.log(data))
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error);
  