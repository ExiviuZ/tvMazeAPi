const searchForm = document.querySelector('#search-form')
const input = document.querySelector('#search-bar')
const button = document.querySelector('#search-button')


searchForm.addEventListener('submit', async (e) => {
    try {
        e.preventDefault()
        const allImage = document.querySelectorAll('a')
        allImage.forEach(element => {
            element.remove()
        });
        const searchedItem = input.value
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchedItem}`)
        const movieArray = response.data
        console.log(movieArray)

        // imageTag = document.createElement('img')
        // imageTag.src = movieSRC

        // document.body.appendChild(imageTag)
        movieArray.forEach(element => {
            if (element.show.image) {
                imageTag = document.createElement('img')
                anchorTag = document.createElement('a')
                const movieSRC = element.show.image.medium
                imageTag.src = movieSRC
                anchorTag.href = imageTag.src
                anchorTag.setAttribute('target', '_blank')
                anchorTag.appendChild(imageTag)
                document.body.appendChild(anchorTag)
            }
        });

        input.value = ''

    }
    catch (e) {
        console.log(`Can't Find anything like that :(`)
    }
})

