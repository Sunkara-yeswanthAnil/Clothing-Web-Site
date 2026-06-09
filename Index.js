let image=document.querySelectorAll("#sliderContainer img")
let index=0
function showimage(){
    image.forEach((img,ind)=>{
        img.classList.toggle("noActive", ind !==index)
    })
}

let rightArrow=document.getElementById("rightArrow")
rightArrow.addEventListener("click",()=>{
    index++
    if (index>=image.length) {
        index=0
    }
    showimage()
})
let leftArrow=document.getElementById("leftArrow")
leftArrow.addEventListener("click", ()=>{
    index--
    if (index<0) {
        index=image.length-1
    }
    showimage()
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


let clothbtn = document.getElementById("clothbtn");
clothbtn.addEventListener("click", () => {
    location.href = "./Shop.html#clothsContainer";
});

let glassbtn = document.getElementById("glassbtn");
glassbtn.addEventListener("click", () => {
    location.href = "./Shop.html#sunGlassesContainer";
});

let watchbtn = document.getElementById("watchbtn");
watchbtn.addEventListener("click", () => {
    location.href = "./Shop.html#watchesContainer";
});

let jacketbtn = document.getElementById("jacketbtn");
jacketbtn.addEventListener("click", () => {
    location.href = "./Shop.html#jacketContainer";
});






