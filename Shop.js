let SerchProducts=document.getElementById("SerchProducts")
let ProductCard=document.querySelectorAll(".productsCard") 

SerchProducts.addEventListener("input",()=>{
    let SerchValue=SerchProducts.value.toLowerCase()
    ProductCard.forEach((card)=>{
        let ProductName=card.querySelector("h1").innerText.toLowerCase()
        if (ProductName.includes(SerchValue)) {
            card.style.display="flex"
        }else{
            card.style.display="none"
        }
    })

        let productsContainer=document.querySelectorAll(".product")
        productsContainer.forEach((productsContainer)=>{
        let cards=productsContainer.querySelectorAll(".productsCard")
        let visibleCount=0
        cards.forEach((card)=>{
            if (card.style.display=="flex") {
                visibleCount++
            }
       })
       if (visibleCount==0) {
        productsContainer.style.display="none"
       }else{
        productsContainer.style.display="block"
       }
    })
})



let cart=[]
let cartQuantity=document.getElementById("cartQuantity")
let cartPrice=document.getElementById("cartPrice")
ProductCard.forEach((card)=>{
    let ProductName=card.querySelector("h1").innerText
    let ProductPrice=parseFloat(card.querySelector("p").innerText.replace("₹", ""))
    let ProductImg=card.querySelector("img").src
    let MinusBtn=card.querySelector(".minusBtn")
    let cardQuantity=card.querySelector(".cardQuantity")
    let PlusBtn=card.querySelector(".plusBtn")
    let cardcartdata=card.querySelector(".cardDetails2>p")
    
    cardcartdata.addEventListener("click",()=>{
        sideBar.style.right="0px"
        rendersideBar()
    })

    function UpdateNavbar(){
        let totalQTY=0;
        let totalPrice=0;
        cart.forEach((item)=>{
            totalQTY+=item.qty;
            totalPrice+=item.price*item.qty;
        })
        cartQuantity.innerText=totalQTY
        cartPrice.innerText=`₹${totalPrice.toFixed(2)}`
    }

    function UpdateCart(name,price,qty){
        let exisisting=cart.find(item=>item.name == name)
        if (exisisting) {
            exisisting.qty=qty
            if (qty==0) {
            cart=cart.filter(item=>item.name !== name)
            }
        }else{
            cart.push({name,price,qty,"image":ProductImg})
        }
        UpdateNavbar()
        localStorage.setItem("cart",JSON.stringify(cart))
    }

    PlusBtn.addEventListener("click",()=>{
        let qty=parseInt(cardQuantity.innerText)
        qty++
        cardQuantity.innerText=qty
        UpdateCart(ProductName,ProductPrice,qty)
        rendersideBar()
    })

    MinusBtn.addEventListener("click",()=>{
        let qty=parseInt(cardQuantity.innerText)
        if(qty>0)qty--
        cardQuantity.innerText=qty
        UpdateCart(ProductName,ProductPrice,qty)
        rendersideBar()
    })
})

// SIDE BAR

let cartIcon=document.querySelector("#navThree>i")
let sideBar=document.getElementById("sidebar")
let closeSideBar=document.querySelector("#sidebar1>p")
let sideBar2=document.getElementById("sidebar2")
let totalCartPrice=document.querySelector("#sidebar3>h2>span")

cartIcon.addEventListener("click",()=>{
    sideBar.style.right="0px"
    rendersideBar()
})
closeSideBar.addEventListener("click",()=>{
    sideBar.style.right="-350px"
})

function rendersideBar(){
    sideBar2.innerHTML=""
    if (cart.length==0) {
        sideBar2.innerHTML=`<p style=margin:20px>Your Cart Is Empty</p>`
        totalCartPrice.innerText="0.00"
        return   
    }
    let total=0
    cart.forEach((item)=>{
        total+=item.price*item.qty
        let itemDiv=document.createElement("div")
        itemDiv.classList.add("Cart_item")
        itemDiv.innerHTML=`
        <div class="Cart_item">
            <img src="${item.image}" alt="${item.name}" height="120" width="150"></img>
        </div>
        <div class="cart_item2">
                <h2>${item.name}</h2>
                <p>₹${item.price}</p>
                <div class="cart_item2_details">
                    <p class="cart_item_quantity">Qty: ${item.qty}</p>
                    <p class="cart_delete_btn"><i class="fa-regular fa-trash-can"></i></p>
                </div>
            </div>
        `
        sideBar2.append(itemDiv)

        let deletebtn=itemDiv.querySelector(".cart_delete_btn")
        deletebtn.addEventListener("click",()=>{
            cart=cart.filter(exisistingitem=>exisistingitem.name!==item.name)
            rendersideBar()
            localStorage.setItem("cart",JSON.stringify(cart))
            // NAVBARUPDATE:

            let totalQTY=0;
            let totalPrice=0;
            cart.forEach((item)=>{
                 totalQTY+=item.qty;
                 totalPrice+=item.price*item.qty;
                })
            cartQuantity.innerText=totalQTY
            cartPrice.innerText=`₹${ totalPrice.toFixed(0)}`

            let allCards = document.querySelectorAll(".productsCard")
            allCards.forEach((card) => {
                let name = card.querySelector("h1").innerText
                if (name == item.name) {
                    let quantity = card.querySelector(".cardQuantity")
                    quantity.innerText = 0
                }
            })
        })
        totalCartPrice.innerText=total.toFixed(2)
    })
}



let checkout=document.getElementById("checkout")
checkout.addEventListener("click",()=>{
    location.href="./Checkout.html"
})



let submit = document.getElementById("submitbtn")
let emailInput = document.querySelector("input[type='email']")

submit.addEventListener("click", () => {
    if(emailInput.value.trim() === ""){
        alert("Please enter email ID")
    } else {
        alert("Subscribed")
    }
})
