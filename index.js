
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

fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('crypto').innerText = data.name + " - " + data.market_data.current_price.gbp + " £"
        document.getElementById('crypto').style.backgroundImage = `url('${data.image.small}')`
    })
    .catch(err => console.error(err))