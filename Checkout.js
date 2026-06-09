let buybtn= document.getElementById("buybtn")
buybtn.addEventListener("click",()=>{
    alert("Thankyou for Shopping...🛍️")
      localStorage.clear()
  location.href="Shop.html"
})

let checkout2=document.getElementById("checkout2")
let totalprice= document.querySelector("#checkout3>h2>span")

let cart = JSON.parse(localStorage.getItem("cart"))
console.log(cart)
if(cart==null){
  checkout2.innerHTML=`<p style=margin:20px>Your Cart is empty</p>`
}
let grandTotal = 0
cart.forEach((product)=>{
   checkout2.innerHTML+=`
    <div class=product_container>
       <aside class=product_container1>
        <img src=${product.image} alt=${product.name} height=150 width=200>
       </aside>
       <aside class=product_container2>
         <h1>${product.name}</h1>
         <p>Qty:${product.qty}</p>
         <p>Price:₹${product.price.toFixed(2)}</p>
         <h2>SubTotal:₹${(product.price * product.qty).toFixed(2)}</h2>
       </aside>
    </div>
   `
   grandTotal+=(product.price * product.qty)
  totalprice.innerText = grandTotal.toFixed(2)
})