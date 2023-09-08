





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


    const now = new Date();
    const time = now.toLocaleString('en-US', { timeStyle: "short" })
    document.getElementById('time').textContent = time