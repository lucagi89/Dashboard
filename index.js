





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




fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
    .then(res => {
        if(!res.ok){
            throw Error('something is wrong')
        }
        return res.json()})
    .then(data => {
        console.log(data)
        document.getElementById('logo').src = data.image.small
        document.getElementById('name').innerText = data.name
        document.getElementById('price').textContent = data.market_data.current_price.gbp + " £"
        
    })
    .catch(err => alert(err))