let arrayOfImg=document.querySelector('.other-image').children
let showImg=document.querySelector('.show-image img')
let spanOfAddToCart=document.querySelector('.add-to-cart span')
let decreaseQtyBtn=document.querySelector('.decrease-qty')
let increaseQtyBtn=document.querySelector('.increase-qty')
let cartAddToCartBtn=document.querySelector('.cart-btn button')
let cartIcon=document.querySelector('.cart-icon')
let cartSpanIcon=document.querySelector('.cart-icon span')
let cart=document.querySelector('.cart')
let priceOfProduct=document.querySelector('.text').children[2]
let oldPrice=document.querySelector('.text span:first-of-type').childNodes[0].textContent.trim().slice(1,)
let qtyOfProduct=document.querySelector('.text span:first-of-type span:last-child')
console.log(cartSpanIcon)
let product=document.querySelector('.product')
let button=document.querySelector('.cart button')
let h5=document.createElement('h5')
let slider=document.querySelector('.slider')
let mainImgSlider=document.querySelector('.slider-img img')
let closeBtn=document.querySelector('.close')
let previousBtn=document.querySelector('.previous')
let nextBtn=document.querySelector('.next')
let sliderImages=document.querySelector('.other-slider-image').children
let mainImg=document.querySelector('.show-image')
//slideshow
for(let i=0;i<arrayOfImg.length;i++){
    arrayOfImg[i].addEventListener('click',function(e){
        removeActiveClass()
       e.target.classList.add('active')
       showImg.src=e.target.src   
    })
}
//remove class active 
let removeActiveClass=()=>{
[...arrayOfImg].forEach(element => {
    element.classList.remove('active')
})

}

//increase qty 
increaseQtyBtn.addEventListener('click',function(){
 spanOfAddToCart.textContent=Number(spanOfAddToCart.textContent)+1
})
//decrease qty
decreaseQtyBtn.addEventListener('click',function(){
    spanOfAddToCart.textContent=Number(spanOfAddToCart.textContent)-1
    if(Number(spanOfAddToCart.textContent)<0){
        spanOfAddToCart.textContent=0
       
    } 
   })

//add to cart
let addToCart=()=>{
    if(Number(spanOfAddToCart.textContent)>0){
        cartSpanIcon.textContent= spanOfAddToCart.textContent
        cartSpanIcon.classList.add('active')
        qtyOfProduct.textContent=spanOfAddToCart.textContent
        priceOfProduct.textContent= '$'+ (Number(spanOfAddToCart.textContent)*Number(oldPrice))
        cart.append(product)
        cart.append(button)
        document.querySelector('h5').remove()
    }
}
//delete product
let deleteProduct=()=>{
   
    if(product && button){
        product.remove()
        button.remove()
        h5.textContent='Your cart is empty'
        cart.appendChild(h5)
        cartSpanIcon.textContent=0
        cartSpanIcon.classList.remove('active')
    }

}
//add event to button
cartAddToCartBtn.addEventListener('click',function(){
    addToCart()
})
//show cart 
cartIcon.addEventListener('click',function(){
    cart.classList.toggle('flex')
    if(cartSpanIcon.textContent==='0'){  

        deleteProduct()
    }
    else{
        addToCart()
    }
   
    
   
})
//delete product from cart
document.querySelector('.product svg').addEventListener('click',function(){
        deleteProduct()
    
})
//slider
mainImg.addEventListener('click',function(){
    
    slider.classList.add('flex')

})
//close slider
closeBtn.addEventListener('click',function(){
    slider.classList.remove('flex')

})
let removeActiveClassSlider=()=>{
   
    [...sliderImages].forEach(element => {
        element.classList.remove('active')
    })
}
for(let i=0;i<sliderImages.length;i++){
    sliderImages[i].addEventListener('click',function(e){
        removeActiveClassSlider()
       e.target.classList.add('active')
       mainImgSlider.src=e.target.src   
    })
   
}

let current=sliderImages.length
//add event to next button
let next=()=>{
    if(current<sliderImages.length){
        current++
        console.log(current)
    }
    else{current=1}
    mainImgSlider.src=sliderImages[current-1].src
    removeActiveClassSlider()
    sliderImages[current-1].classList.add('active')
}
nextBtn.addEventListener('click',function(){ 
    next()
    

})
//add event to previous button
let previous=()=>{
    if(current<sliderImages.length+1 && current>1){
        current--
        
    }
    else{current=sliderImages.length}
    mainImgSlider.src=sliderImages[current-1].src
    removeActiveClassSlider()
    sliderImages[current-1].classList.add('active')
  

}
previousBtn.addEventListener('click',function(){
    previous()
   
})


