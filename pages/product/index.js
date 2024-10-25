let quantity = 1
document.getElementById("quantity-input").value = 1


//increase
function increase_quantity(){
    quantity++
    document.getElementById("quantity-input").value = quantity
}
document.getElementById("increase-quantity-btn").onclick = increase_quantity

//decrease
function decrease_quantity(){
    if(quantity>1){
        quantity--
        document.getElementById("quantity-input").value = quantity
    }
}
document.getElementById("decrease-quantity-btn").onclick = decrease_quantity

//input
function input_quantity(){
    quantity = document.getElementById("quantity-input").value
}
document.getElementById("quantity-input").onchange = input_quantity

//++++++++++
const product = {
    name: "Áo",
    price: 50,
    imgurl: "https://contents.mediadecathlon.com/p2606947/k$1c9e0ffdefc3e67bdeabc82be7893e93/dry-men-s-running-breathable-t-shirt-red-decathlon-8771124.jpg"
}
document.getElementById("product-name").textContent = product.name
document.getElementById("product-price").textContent = product.price
document.getElementById("product-img").src = product.imgurl