
// CẦN CHO BIẾN CURRENTPAGE NÀY MẶC ĐỊNH Ở PAGE 1
let currentPage = 1;
// CẦN BỎ PRODUCTS VÀO TRONG HÀM ĐỂ DỄ DÀNG HIỂN THỊ
function renderProducts(products){
    document.getElementById("products-list").textContent = ''
    for(let i = 0; i < products.length;i++){
        const productElement = document.createElement("li")
        const productIdElement = document.createElement("p")
        const productNameElement = document.createElement("p")
        const productCategoryElement = document.createElement("p")
        const productPriceElement = document.createElement("p")
        const productRatingElement = document.createElement("p")
        const productPictureElement = document.createElement("img")
        
        productIdElement.textContent = products[i].id
        productNameElement.textContent = products[i].name
        productCategoryElement.textContent = products[i].category
        productPriceElement.textContent = products[i].price
        productRatingElement.textContent = products[i].rating
        productPictureElement.src = products[i].imgurl  
    
        productElement.appendChild(productIdElement)
        productElement.appendChild(productNameElement)
        productElement.appendChild(productCategoryElement)
        productElement.appendChild(productPriceElement)
        productElement.appendChild(productRatingElement)
        productElement.appendChild(productPictureElement)


        document.getElementById("products-list").appendChild(productElement)
    }
}

// HÀM GỌI DỮ LIỆU TỪ API 
async function fetchProducts(page) {
    try{
        const response = await fetch(`https://form-test-api.vercel.app/api/products?page=${page}`);
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
}
// HÀM MAIN CHÍNH CŨNG LÀ HÀM CẬP NHẬT CURRENT PAGE
async function main() {
    const data = await fetchProducts(currentPage)
    const products = data.products
    if (data) {
        renderProducts(products)
        document.getElementById("pageNumber").textContent = `Trang ${data.currentPage} / ${data.totalPages}`
    }
}


document.getElementById("nextPagebtn").addEventListener("click", () => {
    if(currentPage < 4){
        currentPage++
        main()
    }
});

document.getElementById("previousPagebtn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--
        main()
    }
})

main()



