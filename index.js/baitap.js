const products =[
{id:1, name: "Áo thun", category: "Quần áo", Prices: 150000, rating: 4.5},
{id:1, name: "Quần jeans", category: "Quần áo", Prices: 450000, rating: 4.2},
{id:1, name: "Giày thể thao", category: "Giày dép", Prices: 800000, rating: 4.7},
{id:1, name: "Túi xách", category: "Phụ kiện", Prices: 600000, rating: 4.0},
{id:1, name: "Đồng hồ", category: "Phụ kiện", Prices: 120000, rating: 4.8},
{id:1, name: "Mủ lưỡi trai", category: "Phụ kiện", Prices: 100000, rating: 3.9},
];


//-----------Bài tập 1
function sortcategory(products){
    for(let i = 0;i < products.length;i++){
        if(products[i].category == "Thời trang"){
            console.log(products[i])
        }
    }


}
//-----------Bài tập 2
function sortPrice(products){
    for(let i = 0;i < products.length;i++){
        if(products[i].Prices < 450000){
            console.log(products[i])
        }
    }
}


//-----------Bài tập 3
function sortrating(products){
    for(let i = 0;i < products.length;i++){
        if(products[i].rating > 4.2){
            console.log(products[i])
        }
    }
}


//-----------Bài tập 4
function sortcategory(products){
    for(let i = 0;i < products.length;i++){
        if(products[i].category == "Thời trang" && products[i].Prices< 500000 && products[i].rating > 4.0){
            console.log(products[i])
        }
    }
}


function sort()