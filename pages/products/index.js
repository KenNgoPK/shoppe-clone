const products =[
    {id:1, name: "Áo thun", category: "Quần áo", price: 150000, rating: 1.0},
    {id:2, name: "Quần jeans", category: "Quần áo", price: 450000, rating: 4.2},
    {id:3, name: "Giày thể thao", category: "Giày dép", price: 800000, rating: 4.7},
    {id:4, name: "Túi xách", category: "Phụ kiện", price: 600000, rating: 4.0},
    {id:5, name: "Đồng hồ", category: "Phụ kiện", price: 120000, rating: 4.8},
    {id:6, name: "Mủ lưỡi trai", category: "Phụ kiện", price: 100000, rating: 3.9},
];

const categories =[
    {id:1, name:"Phụ kiện"},
    {id:2, name:"Quần áo"},
    {id:3, name:"Giày dép"},
]; 

// async function fetchCategories() {
//     const url = "https://form-test-api.vercel.app/api/categories"
//     try{
//         const response = await fetch(url)
//         const data = response.json()
//         const categories = data
//         return categories
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// async function  main() {
//     const categories = await fetchCategories()
//     renderCategories(categories)
// }
// main()




function handleFilterByCategory(category){
    const filteredProducts = filterProductsByCategory(products,category)
    renderProducts(filteredProducts)
}

function renderCategories(categories){
    document.getElementById("categoryList").textContent = ""
    for(let i = 0; i < categories.length; i++){
        const categoryElement = document.createElement("li")
        const categoryName = document.createElement('p')
        categoryName.textContent = categories[i].name
        categoryElement.appendChild(categoryName)
        document.getElementById("categoryList").appendChild(categoryElement)
        // categoryElement.addEventListener("click",() => {
        //     handleFilterByCategory(categories[i].name)
        // })
        categoryElement.onclick = () =>{
            handleFilterByCategory(categories[i].name)
        }
    }
}

renderCategories(categories)

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
    
        document.getElementById("product-list").appendChild(productElement)
    }
}

renderProducts(products)

function filterProductsByPrice(products,minPrice,maxPrice){
    const newProducts = []
    for(let i = 0; i < products.length;i++){
        if(products[i].price >= minPrice && products[i].price<= maxPrice){
            newProducts.push(products[i])
        }
    }
    return newProducts
}
//Lọc theo Price
function handleFilterByPrice(){
    const minPrice = document.getElementById("minPrice").value
    const maxPrice = document.getElementById("maxPrice").value
    const filteredProducts = filterProductsByPrice(products,minPrice,maxPrice)
    renderProducts(filteredProducts)
}


document.getElementById("filterByPriceBtn").onclick = handleFilterByPrice
//Lọc theo Rating
function filterProductsByRating(products,minRating){
    const newProducts = []
    for(let i = 0; i<products.length; i++){
        if(products[i].rating >= minRating){
            newProducts.push(products[i])
        }
    }
    return newProducts
}

function handleFilterByRating(){
    const minRating = document.getElementById("minRating").value
    const filteredProducts = filterProductsByRating(products,minRating)
    renderProducts(filteredProducts)
}

document.getElementById("filterByRatingBtn").onclick = handleFilterByRating
//Lọc theo loại
function filterProductsByCategory(products,category){
    const newProducts = []
    for(let i = 0; i< products.length; i++){
        if(products[i].category === category){
            newProducts.push(products[i])
        }
    }
    return newProducts
}

// function handleFilterByCategory(){
//     const category = document.getElementById("category").value
//     const filteredProducts = filterProductsByCategory(products,category)
//     renderProducts(filteredProducts)
// }

// document.getElementById("filterByCategoryBtn").onclick = handleFilterByCategory

//Lọc theo rating with star
function filterProductsByRating(products,minRating){
    const newProducts = []
    for(let i = 0; i<products.length; i++){
        if(products[i].rating >= minRating){
            newProducts.push(products[i])
        }
    }
    return newProducts
}

function handleFilterByRating5Star(){
    const filteredProducts = filterProductsByRating(products,5.0)
    renderProducts(filteredProducts)
}
document.getElementById("star-5").onclick = handleFilterByRating5Star

function handleFilterByRating4Star(){
    const filteredProducts = filterProductsByRating(products,4.0)
    renderProducts(filteredProducts)
}
document.getElementById("star-4").onclick = handleFilterByRating4Star

function handleFilterByRating3Star(){
    const filteredProducts = filterProductsByRating(products,3.0)
    renderProducts(filteredProducts)
}
document.getElementById("star-3").onclick = handleFilterByRating3Star

function handleFilterByRating2Star(){
    const filteredProducts = filterProductsByRating(products,2.0)
    renderProducts(filteredProducts)
}
document.getElementById("star-2").onclick = handleFilterByRating2Star

function handleFilterByRating1Star(){
    const filteredProducts = filterProductsByRating(products,1.0)
    renderProducts(filteredProducts)
}
document.getElementById("star-1").onclick = handleFilterByRating1Star



async function fetchProducts() {
    try {
        const response = await fetch("https://form-test-api.vercel.app/api/products?page=1");
        const data = await response.json();  // await response.json() to get the actual JSON data
        renderProducts(data);  // render the fetched products
    } catch (error) {
        console.log(error);
    }
}

fetchProducts()