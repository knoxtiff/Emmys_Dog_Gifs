const form = document.getElementById('form')
const queryInput = document.getElementById('query-input')
const resultsEl = document.getElementById('results')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const query = queryInput.value
    getGifs(query)
})

function getGifs(query){ 

    const api_key = "gOKIxwjYNewFpwD7W9Da6zT969idecVl"
    const url=`https://api.giphy.com/v1/gifs/search?&api_key=${api_key}&q=${query}&limit=12&offset=0`
    
fetch (url)
    .then(function(res) {
    return res.json()
    })
    .then(function(json) {
        console.log(json.data[0].images.fixed_height.url)

        let resultsHTML = ''
        
        json.data.forEach(function(obj) {
            console.log(obj.images.fixed_height.url)

            const url = obj.images.fixed_height.url
            const width = obj.images.fixed_height.width
            const height = obj.images.fixed_height.height
            const title = obj.title

            resultsHTML += `<img src="${url}" 
                width="${width}"    
                height="${height}"
                alt="${title}">`
        })

        resultsEl.innerHTML = resultsHTML
    })
    .catch(function(err) {
        console.log(err.message)
    })

}