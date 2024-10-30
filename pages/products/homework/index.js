function renderProducts(products){
    document.getElementById("product-list").textContent = ''
    for(let i = 0; i < products.length;i++){
        const productElement = document.createElement("li")
        const productIdElement = document.createElement("p")
        const productNameElement = document.createElement("p")
        const productCategoryElement = document.createElement("p")
        const productPriceElement = document.createElement("p")
        const productRatingElement = document.createElement("p")
        
        productIdElement.textContent = products[i].id
        productNameElement.textContent = products[i].name
        productCategoryElement.textContent = products[i].category
        productPriceElement.textContent = products[i].price
        productRatingElement.textContent = products[i].rating
    
        productElement.appendChild(productIdElement)
        productElement.appendChild(productNameElement)
        productElement.appendChild(productCategoryElement)
        productElement.appendChild(productPriceElement)
        productElement.appendChild(productRatingElement)

        document.getElementById("products-list").appendChild(productElement)
    }
}


async function fetchProducts() {
    try{
        const response = await fetch("https://form-test-api.vercel.app/api/products?page=1")
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
}

async function main() {
    const data = await fetchProducts()
    const products = data.products
    renderProducts(products)
}


main()

