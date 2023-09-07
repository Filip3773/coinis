let lista = document.getElementById("lista")

const fetchProducts =async () =>{



try{
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()

    data.products.forEach(product =>{
      let item  = document.createElement("li")
      item.innerText = product.title 
      ByteLengthQueuingStrategy.appendChild(item)


    });
}catch(error){
    console.log("greska" + error)
}






}
}
fetchProducts()