// ! ==== API =====


// * API ist eine Schnittstelle zwischen frontend und backend
// * Application Programming Interface, komuniziert zwischen Frontend und Server
// es könnte auc h sein das server mit server komuniziert


// ! DATENTYP => Boolean, Number, String, Array, Object => was neues JSON

// ? JSON => JavaScript Object Notion


console.log(fetch("https://dummyjson.com/products"));

fetch("https://dummyjson.com/products")
.then((response)=> response.json())
.then((data)=> console.log(data))
.catch((error) => console.log("Die Küche brennt leider", error))

fetch("https://dummyjson.com/products")
.then((response)=> response.json())
.then((data)=> {
    console.log(data.products)
    const productsAusDemJson = data.products
    console.log(productsAusDemJson);
    productsAusDemJson.forEach((product)=>{
        const productTitel = product.title
        // console.log(productTitel);
        const produchtDiscription = product.description
        // console.log(produchtDiscription);
        const productImg = product.images[0]
        // console.log(productImg);
        const productPrice = product.price
        const prductId = product.id
        let productItem = document.createElement('div')

        let h2 = document.createElement('h2')
        h2.textContent = productTitel
        productItem.appendChild(h2)

        let p = document.createElement('p')
        p.textContent = produchtDiscription
        productItem.appendChild(p)

        let h5 = document.createElement('h5')
        h5.textContent = `${productPrice} €`
        productItem.appendChild(h5)

        // IMG
        const img =document.createElement('img')
        img.setAttribute("src", productImg)
        img.setAttribute("alt", productTitel)
        productItem.appendChild(img)

        //btn
        let moreInfoBtn = document.createElemen('button')
        moreInfoBtn.textContent = "More Information"
        moreInfoBtn.addEventListener("click", ()=>{
            fetch(`https://dummyjson.com/products/${prductId}`)
            .then((response)=> response.json())
            .then((data)=> console.log(data))
            .catch((error) => console.log(error))
        })

        productItem.appendChild(moreInfoBtn)
        document.querySelector('#products').appendChild(productItem)
    })
})
.catch((error) => console.log("Die Küche brennt leider", error))