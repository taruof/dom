let totalPrice= document.getElementById("totalp")
let sum=0

function plusClick(id) {
    console.log(id)
    console.log(id[1])
    let quantity=document.getElementById("q"+id[1])
    quantity.innerHTML= Number (quantity.innerHTML)+1

    let total= document.getElementById("t"+id[1])
    let price= document.getElementById("s"+id[1])
    console.log(total);

    total.innerHTML= +total.innerHTML + Number(price.innerHTML)
    sum= Number(price.innerHTML)+sum
    totalPrice.innerHTML=sum

}

function minusClick(id) {
    
    let quantity=document.getElementById("q"+id[1])
    if (Number(quantity.innerHTML)>0) {

        quantity.innerHTML= Number (quantity.innerHTML)-1
        
        let total=document.getElementById("t"+id[1])
        let price=document.getElementById("s"+id[1])

        total.innerHTML= +total.innerHTML - Number(price.innerHTML)

        sum= sum - Number(price.innerHTML)
        totalPrice.innerHTML=sum
    }
    
}

let deleteBtnlist= document.getElementsByClassName("deletbutton")
for (let i=0;i<deleteBtnlist.length;i++){
    deleteBtnlist[i].addEventListener("click",function(){
        deleteBtnlist[i].parentElement.remove()
    })
}


let heartBtn= document.getElementsByClassName("fa-solid fa-heart")

for(let i=0;i<heartBtn.length;i++){
    heartBtn[i].addEventListener("click",function(e){
        let toggleBtn= e.target
        toggleBtn.classList.toggle("color")
    }
)
}

