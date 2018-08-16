
(function(window) {
    let anchorlinks = document.querySelectorAll('a[href^="#"]')
    
    for (let item of anchorlinks) {
        item.addEventListener('click', (e)=> {
            let hashval = item.getAttribute('href')
            let target = document.querySelector(hashval)
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            // appends the href value to url when anchor link is clicked
            history.pushState(null, null, hashval)
            e.preventDefault()
        })
    }
})(window)
