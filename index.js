let products=[]

const show = () => {
    document.getElementById("data").innerHTML=""
    for(let i=0; i<products.length; i++){
        let img = document.createElement("img")
        img.src = products[i].img

      let title = document.createElement("h1")
      title.innerHTML=products[i].title
      
      let price = document.createElement("p")
      price.innerHTML=products[i].price
     
      let del=document.createElement("button")
      del.innerHTML="DELETE"
      del.addEventListener("click",()=>{
        products.splice(i,1)
        // console.log(i)
        show();

      })


      let div=document.createElement("div")
      div.append(img,title,price,del)
      title.setAttribute("class","title")
      document.getElementById("data").append(div)

    }


}



const formdata = (e) => {
   e.preventDefault()

 let title=document.getElementById("title").value
 let img=document.getElementById("img").value
 let price=document.getElementById("price").value
 let password=document.getElementById("password").value

  if( title.length<2){
    alert("please enter valid title")
    document.getElementById("t-error").innerHTML="please enter valid title"
    document.getElementById("t-error").style.color="red"
    return
  }
 
  if(price<0){
    alert("please enter valid price")
    return
  }
 
  if(password.length<6){
    alert("must be 6 character in password")
    return
  }



let product={
    title:title,
    img:img,
    price:price
}
products.push(product)
show()
console.log(products);
}




 document.getElementById("form").addEventListener("submit",formdata);