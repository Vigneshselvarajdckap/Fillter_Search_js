const products = [
    {
      id: 'rec43w3ipXvP28vog',
      title: 'high-back bench',
      company: 'ikea',
      image:'highBench.jpg',      
      price: 10000,
    },
    {
      id: 'rec4f2RIftFCb7aHh',
      title: 'albany table',
      company: 'marcos',
      image:
        'albanytable.jpg',
      price: 7900,
    },
    {
      id: 'rec8kkCmSiMkbkiko',
      title: 'accent chair',
      company: 'caressa',
      image:
        'accentchair.jpg',
      price: 25999,
    },
    {
      id: 'recBohCqQsot4Q4II',
      title: 'wooden table',
      company: 'caressa',
      image:
        'woodentable.jpg',
      price: 45999,
    },
    {
      id: 'recDG1JRZnbpRHpoy',
      title: 'dining table',
      company: 'caressa',
      image:
        'diningtable.jpg',
      price: 6999,
    },
    {
      id: 'recNWGyP7kjFhSqw3',
      title: 'sofa set',
      company: 'liddy',
      image:'sofa.jpg ',
      price: 7999,
    },
    {
      id: 'recZEougL5bbY4AEx',
      title: 'modern bookshelf',
      company: 'marcos',
      image:
        'modernbookshelf.jpg',
      price: 8999,
    },
    {
      id: 'recjMK1jgTb2ld7sv',
      title: 'emperor bed',
      company: 'liddy',
      image:
        'emperorbed.jpg',
      price: 21999,
    },
    {
      id: 'recmg2a1ctaEJNZhu',
      title: 'utopia sofa',
      company: 'marcos',
      image:'sofa2.jpg',
      price: 3900,
    },
    {
      id: 'recvKMNR3YFw0bEt3',
      title: 'entertainment center',
      company: 'liddy',
      image:
        'entertainmentcenter.jpg',
      price: 29110,
    },
    {
      id: 'recxaXFy5IW539sgM',
      title: 'albany sectional',
      company: 'ikea',
      image:
        'sofa2.jpg',
      price: 10199,
    },
    {
      id: 'recyqtRglGNGtO4Q5',
      title: 'leather sofa',
      company: 'liddy',
      image:
        'sole.jpg',
      price: 91999,
    },
];

const container = document.querySelector(".container")
const sideMenu = document.querySelector(".sideMenu")
const input = document.querySelector(".input")

function product(products){

  if(products.length>0){

    let pro = products.map((elem)=>
    `<div class = "singleProduct">
       <img src=${elem.image}>
       <h3>${elem.title}</h3>
       <p>₹ ${elem.price}</p>
    </div>`
    ).join("")
  container.innerHTML = pro
}
else{
  container.innerHTML = `<img src="img1.jpeg" class="sorry">`
}
}
product(products)

function companys(products){
   const Allcatgeory = products.map((elem)=>elem.company)
//    console.log(Allcatgeory);
   const cat = ["All",...Allcatgeory.filter((produtss,index)=>{
    
    return Allcatgeory.indexOf(produtss) == index
   
   })
]
// console.log(cat);

const local = document.querySelector(".local")
   sideMenu.innerHTML = cat.map((cats)=>`<button>${cats}</button>`).join("")
    const allBtn = document.querySelectorAll("button")
    allBtn[0].classList.add("bold")

    for(let i=0;i<allBtn.length;i++){
   allBtn[i].addEventListener("click",(e)=>{
    let select = e.target.innerText
    if(select == "All"){
        product(products)
        local.classList.remove("increse")
        local.innerText =  "Companys"
        input.style.display = "block"
        allBtn[i].classList.add("bold")
        allBtn[1].classList.remove("bold")
        allBtn[2].classList.remove("bold")
        allBtn[3].classList.remove("bold")
        allBtn[4].classList.remove("bold")
    }
    else{
        product(products.filter((element)=>element.company == select))
        input.style.display = "none"
        local.classList.add("increse")
        local.innerText = `${select}'s Company`
        allBtn[0].classList.remove("bold")
        allBtn[1].classList.remove("bold")
        allBtn[2].classList.remove("bold")
        allBtn[3].classList.remove("bold")
        allBtn[4].classList.remove("bold")
        allBtn[i].classList.add("bold")
    }
   })
}
}
companys(products)





input.addEventListener("keyup",()=>{
    let search = input.value.toLowerCase();
       if(search){
        product(products.filter((element)=>element.title.toLowerCase().indexOf(search)!= -1))
       }
       else{
        product(products)
        }
})





//  let arr = [2,4,5]

//  let pro = arr.filter((loki)=> loki  % 2 ==0)
//  console.log(pro,"olu");

//  let rra = [2,4,6]

//  let rop = rra.map((loki)=> loki * 4)
//  console.log(rop);