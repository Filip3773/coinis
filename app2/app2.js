let container = document.getElementById("container")

async function fetchProducts(){
try{
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    console.log(data.products)

    data.products.forEach(product =>{
      container.innerHTML += `<div class="card">
      <img src="${product.images[0]}" alt="Avatar" style="width:100px; height:100px">
      <div class="container">
        <h4><b>${product.title}</b></h4>
        <p>${product.description}</p>
      </div>
    </div>`


    });
}catch(error){
    console.log("greska" + error)
}






}

fetchProducts()