const adressShip = document.querySelector('.adress-ship');
const adressForm = document.querySelector('.adress-form');
const closeForm = document.querySelector('.close-form');
const rightbtn = document.querySelector('.next-slider');
const leftbtn = document.querySelector('.prev-slider');

const rightProductOne = document.querySelector('.next-product-one');
const leftProductOne = document.querySelector('.prev-product-one');

adressShip.onclick = function(){
    
    adressForm.style.display = "flex";
}
closeForm.onclick = function(e){
    e.stopPropagation();
    adressForm.style.display = "none";
}
var index = 0;
const imgNumber = document.querySelectorAll('.slider-content-left-top img');
console.log(imgNumber.length);
function NextImg(){
    index+=1; 
    if(index > imgNumber.length -1 ){
        index = 0;
        
    }
  
    document.querySelector('.slider-content-left-top').style.right = index * 100+"%";  
    document.querySelector(".slider-content-left-bottom ul li.active").classList.remove("active");
    imgNumberLi[index].classList.add('active');
}

rightbtn.onclick = function(){   
      NextImg();
}
leftbtn.onclick = function(){   
    index-=1; 
    if(index < 0 ){
        index = imgNumber.length - 1;
        
    }
   
    document.querySelector('.slider-content-left-top').style.right = index * 100+"%";    
}

const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom ul li');
imgNumberLi.forEach((item, index) => {
    item.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(".slider-content-left-bottom ul li.active").classList.remove("active");
        this.classList.add('active');
        document.querySelector('.slider-content-left-top').style.right =  index * 100+"%";    
        
        
    })
})
function autoImg(){
    setInterval(NextImg, 3000);
    
}
autoImg();

indexProductOne = 0; 
const numberProductOne = document.querySelectorAll('.slider-product-one-content-container .slider-product-one-content-items');
leftProductOne.onclick = function(){   
    indexProductOne-=1; 
    if(indexProductOne < 0 ){
        indexProductOne = numberProductOne.length - 1;
        
    }
    console.log(indexProductOne);
    document.querySelector('.slider-product-one-content-container-items').style.right = indexProductOne * 100+"%";    
}

rightProductOne.onclick = function(){
    indexProductOne+=1; 
    if(indexProductOne > numberProductOne.length -1 ){
        indexProductOne = 0;
        
    }
    console.log(indexProductOne);
    document.querySelector('.slider-product-one-content-container-items').style.right = indexProductOne * 100+"%";  
    
  
}