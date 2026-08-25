const userProductBox=document.querySelector('.container-box');
const items=JSON.parse(localStorage.getItem('items'));
const totalPrice=document.getElementById('totalPrice');
const favBox=document.querySelector('.swiper-wrapper')
let favItems=JSON.parse(localStorage.getItem('favourite')) 


function drawUserProduct(){
    userProductBox.innerHTML=''
    for(let i in items){
        userProductBox.innerHTML+=`
        <div class="ele">
            <img src="${items[i].img}" alt="product">
            <div class="ele-content" style="display: flex; flex-direction: column; justify-content: space-between; width: 100%; padding-left: 15px;">
                <div>
                    <p style="margin: 0; font-weight: bold;">Product: ${items[i].name}</p>
                    <p style="margin: 0; color: #666;">Category: ${items[i].category}</p>
                    <p style="margin: 0; color: #333;">Price: ${items[i].price}</p>
                </div>
                <div class="ele-actions" style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px;">
                    <div class="plus">
                        <a href="#" class="minus"><i class="fas fa-minus text-danger" onclick="minusBtn(${items[i].id})"></i></a>
                        <span style="margin: 0 10px;">${items[i].count}</span>
                        <a href="#" class="pluss"><i class="fas fa-plus text-success" onclick="plusBtn(${items[i].id})"></i></a>
                    </div>
                    <button class="btn btn-danger" onclick="removeItems(${items[i].id})">Remove</button>
                </div>
            </div>  
        </div> 
        `
    }
}
drawUserProduct()

//  السعر 
function getTotalPrice(){
    let sum=0;
    let prices=items.map((ele)=>{
        let price=ele.price.split(' ')
        return parseInt(price[0]) ;
    })
    for(let i in items){
        sum += prices[i] * parseInt(items[i].count) 
    }
    totalPrice.innerHTML=sum+'$';
}
 getTotalPrice()

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// الازالة
 function removeItems(id){
   var index= items.findIndex((x)=>{
    return x.id==id
 })
 items.splice(index,1)
 localStorage.setItem('items',JSON.stringify(items))
 console.log(items);
 drawUserProduct()
 getTotalPrice()
}
function plusBtn(id , e){
    ele=items.find((x)=>{
       return x.id==id
    })
    ele.count++;
    localStorage.setItem('items',JSON.stringify(items))
    drawUserProduct()
    getTotalPrice()
}

// \\\\\\\\\\\\\\\\\
//   بوتن الطرح
function minusBtn(id){
    ele=items.find((x)=>{
       return x.id==id
    })
            if(ele.count !=1){
                ele.count--;
                localStorage.setItem('items',JSON.stringify(items))
                drawUserProduct()
                getTotalPrice()
            }else{
                let index= items.indexOf(ele)
                items.splice(index,1)
                localStorage.setItem('items',JSON.stringify(items))
                drawUserProduct()
                getTotalPrice()
            }
    }

    // المنتج لما يطهر فى المفضلة
function drawFav(){
    favBox.innerHTML='';
    for(let i in favItems){
        favBox.innerHTML+=`
        <div class="swiper-slide">
        <div class="swiper-img">
              <img src="${favItems[i].img}" alt="${favItems[i].name}" height="300px" width="300px">
        </div>
        <div class="card-body">
            <div class="card-text">
                <p>Product : ${favItems[i].name}</p> 
                <p>Category : ${favItems[i].category}</p>
            </div> <!-- Card text -->
                <a href="#" ><i class="fas fa-heart" style="font-size: 2rem;" onclick='removeFavourite(${favItems[i].id})'  style="backgound-color: red;"></i></a>
        </div> <!-- Card body -->
    </div>
        `
    }
}
drawFav()

function removeFavourite(id){
    let index =favItems.findIndex((x)=>{
      return  x.id==id
    })

    favItems.splice(index,1)
    localStorage.setItem('favourite',JSON.stringify(favItems))
    console.log(favItems)

    addEventListener('click',(e)=> e.preventDefault())
    location.reload()
    drawFav()
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      560: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 3,
      }
    }
});

let minus=document.querySelectorAll('.fa-minus')
let plus=document.querySelectorAll('.plus')
console.log(minus,plus)

minus.forEach(ele=>{
    ele.addEventListener('click',(e)=>{
        e.preventDefault();
    })
})
plus.forEach(ele=>{
    ele.addEventListener('click',(e)=>{
        e.preventDefault();
    })
})

