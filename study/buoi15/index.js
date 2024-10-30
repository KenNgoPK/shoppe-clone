
async function fetchData() {
    try{
        const response = await fetch("https://form-test-api.vercel.app/api/products?page=2");
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }finally{
        console.log("Done")
    }
}
