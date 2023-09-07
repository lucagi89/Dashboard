
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