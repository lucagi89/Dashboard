
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data => 
        {console.log(data.urls.full)
        document.querySelector('body').style.backgroundImage = `url(${data.urls.full})`
        }
        )