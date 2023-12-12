


function searchReplace(){
    let search = document.querySelector("#search-input").value
    let article = document.querySelector("#article")

    article.innerHTML = article.innerText.replaceAll(search, `<span class="highlight">` + search + `</span>`)
}