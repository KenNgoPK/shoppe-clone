const products = [
    { id: 1, name: "Áo thun", category: "Quần áo", price: 150000, rating: 4.5 },
    { id: 2, name: "Quần jeans", category: "Quần áo", price: 450000, rating: 4.2 },
    { id: 3, name: "Giày thể thao", category: "Giày dép", price: 800000, rating: 4.7 },
    { id: 4, name: "Túi xách", category: "Phụ kiện", price: 600000, rating: 4.0 },
    { id: 5, name: "Đồng hồ", category: "Phụ kiện", price: 120000, rating: 4.8 },
    { id: 6, name: "Mũ lưỡi trai", category: "Phụ kiện", price: 100000, rating: 3.9 },
];

// Bài tập 1
function sortCategory(products) {
    return products.filter(product => product.category === "Quần áo");
}

// Bài tập 2
function sortPrice(products) {
    return products.filter(product => product.price < 450000);
}

// Bài tập 3
function sortRating(products) {
    return products.filter(product => product.rating > 4.2);
}

// Bài tập 4
function sortAll(products) {
    return products.filter(product => 
        product.category === "Quần áo" &&
        product.price < 500000 &&
        product.rating > 4.0
    );
}


console.log(sortCategory(products));
console.log(sortPrice(products));
console.log(sortRating(products));
console.log(sortAll(products));
