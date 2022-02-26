
function openCity(evt, cityName) {
    console.log("okkk")
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}


    let newarrivals1=document.getElementById('newarrival').addEventListener("click",newarrivalsfxn)
    let min40off=document.getElementById('min40%off');
   // min40off.style.color="#24a3b5";
   min40off.addEventListener("click",min40offfxn)
    let bestselling=document.getElementById('bestselling');
    bestselling.addEventListener("click",bestsellingpro);
    let tablets=document.getElementById("tablets");
    tablets.addEventListener("click",tabletsfxn);
   
   

    let l = -1;
    let m = 4;



    //prices
     let NAprice=['₹1699','₹1999','₹39999','₹6999','₹1199']
     let NAprice1=['₹4373','₹5999','₹5999','₹6999','₹7899']
     let NAprice2=['₹11999','₹13999','₹1999','₹2999','₹10999']
     let NAprice3=['₹9999','₹12999','₹10999','₹8999','₹14999']


    var array=['https://cdn.shopclues.com/images1/thumbnails/74865/320/320/131046271-74865163-1552367251.jpg',
         'https://cdn.shopclues.com/images1/thumbnails/100740/320/320/146388171-100740822-1598963228.jpg',
         'https://cdn.shopclues.com/images1/thumbnails/99805/320/320/145858527-99805765-1557233120.jpg',
         'https://cdn.shopclues.com/images1/thumbnails/112439/320/320/151644357-112439509-1608043117.jpg',
         'https://cdn.shopclues.com/images1/thumbnails/95955/320/320/143119381-95955649-1602053583.jpg',
         'https://cdn.shopclues.com/images1/thumbnails/88966/320/320/139398340-88966621-1529055067.jpg',
         'https://cdn.shopclues.com/images1/thumbnails/112499/320/320/151691681-112499420-1631780517.jpg',
         'https://cdn.shopclues.com/images1/thumbnails/113568/320/320/152145532-113568220-1617952712.jpg'

         ]

    let bestsellingarr=['https://cdn.shopclues.com/images/thumbnails/3830/320/320/VZ7211448452444.jpg',
                    'https://cdn.shopclues.com/images1/thumbnails/114310/320/320/152360066-114310317-1622204714.jpg',
                    'https://cdn.shopclues.com/images/thumbnails/2209/320/320/pentasmartps650301035382820640x3601387619730.jpg',
                    'https://cdn.shopclues.com/images/thumbnails/2209/320/320/pentasmartps650301035382820640x3601387619730.jpg',
                    'https://cdn.shopclues.com/images1/thumbnails/113773/320/320/152206855-113773894-1618573732.jpg',
                    'https://cdn.shopclues.com/images1/thumbnails/113513/320/320/152124323-113513357-1616846421.jpg',
                    'https://cdn.shopclues.com/images/thumbnails/7941/320/320/5691412924089.jpg',
                    'https://cdn.shopclues.com/images/thumbnails/4653/320/320/lenovotabletideataba3000blackfrontback21400668336.jpg',
                    'https://cdn.shopclues.com/images/thumbnails/2615/320/320/LenovoIdeaTabA10001390392053.jpg',
                    'https://cdn.shopclues.com/images1/thumbnails/115731/320/320/152851350-115731928-1637138382.jpg',
                    'https://cdn.shopclues.com/images/thumbnails/3517/320/320/lenovotabletideataba1000blackfrontback21395119852.jpg',
                    
                    'https://cdn.shopclues.com/images/thumbnails/1411/320/320/1111380794515.jpg',
                    'https://cdn.shopclues.com/images/thumbnails/3225/320/320/2421674videoconvt75c400x400imadmufyqgehxtxr13818410471393492186.jpg',
                    'https://cdn.shopclues.com/images/thumbnails/12509/320/320/41A0LRzs9L1424415529.jpg',
                    'https://cdn.shopclues.com/images/thumbnails/1602/320/320/1319260pqCBcjyzID0vOxck48013700588371382777288.png',
                    'https://cdn.shopclues.com/images1/thumbnails/115731/320/320/152851247-115731825-1637138022.jpg',
                    'https://cdn.shopclues.com/images/thumbnails/8501/320/320/ffsfront1414909490.jpg',
                    'https://cdn.shopclues.com/images1/thumbnails/115731/320/320/152850855-115731321-1637131228.jpg',
                    'https://cdn.shopclues.com/images1/thumbnails/115732/320/320/152851774-115732250-1637142452.jpg',
                    'https://cdn.shopclues.com/images/thumbnails/3288/320/320/Edutab21395397015.jpg',
                    'https://cdn.shopclues.com/images/thumbnails/1301/320/320/FabfoneNext1379669663.jpg',
                    'https://cdn.shopclues.com/images1/thumbnails/115731/320/320/152850901-115731478-1637136445.jpg',
                    'https://cdn.shopclues.com/images1/thumbnails/115731/320/320/152851098-115731678-1637137471.jpg',
                    'https://cdn.shopclues.com/images1/thumbnails/115732/320/320/152851759-115732208-1637140956.jpg'
]   
//name arrays
let min40offnames=['MTR MT312 Dual Sim Feature Phone','Refurbished  NOKIA 1600 Black 1.4 Inches','Apple iPhone X 256 Gb Refurbished White',
                   'Apple iPhone X 256 Gb Refurbished White','Pear P310 Dual Sim Feature Phone','Kechaodo K10 Single Sim Mobile With 0.66 Inch Display, 300mAh Battery, Bluetooth Dailer , Wireless FM',
                   'Title- Refurbished NOKIA 105 Single Sim Mobile Phone Assorted color','Refurbished Iphone 3.5 inches(8.89 cm) 4s 1 GB RAM 16GB ROM Single Sim Smartphone','KECHAODA K115 DUAL SIM, Music and Camera Flash light (6 Months Seller Warranty)'             
] 
let bestsellingnames=[
    'Vizio VZ-706 (Talk)','BSNL Penta PS650 Tablet','VIZIO 3G Vibrant Calling Tablet( C-721 )','VZ Super Tech 118 7inch Calling Tablet',
    'Vizio 706 3G Calling Tab(2021 Edition)',
]
let tabletnames=[
    'Oplus XonPad 7 Tablet (WiFi, 3G, Voice Calling) With 16GB Internal Memory','ASUS Fonepad','Rolecto E-Learning Tablet with free NCERT E-Books for Class 9',
    'NXI Fabfone Smart 6.5" 3G Calling Tablet (Dual SIM)',
    'Rolecto E-Learning Tablet with free NCERT E-Books for Class 2'
]
let newarriNames=[
    'OnePlus 9 Pro 5G (Pine Green, 12GB RAM, 256GB Storage','Redmi Note 10 Pro Max (6 GB RAM, 128 GB ROM, Dark Nebula','MediaTek Nokia 106 Mobile Phone',
    'Nokia 130 Singal Sim Mobile Phone','Google Pixel 3 Xl 64 Gb 4 Gb Ram Refurbished Mobile Phone like new'
]
function min40offfxn(){
    console.log('2223');
    let l = -1;
    let m = 4;
        console.log(l,m);
   dox.innerHTML="";
      l = l + 1;
      m = m + 1;
      for (let i = l; i < m; i++) {


        let price=document.createElement("p");
        price.style.fontFamily="Roboto, Arial, Helvetica, sans-serif";
        price.style.fontSize="20px";
        price.style.lineHeight="20px";
        price.style.color="#212121";
        price.style.fontWeight="600"
        price.textContent=NAprice[i];


        let off=document.createElement('flag');
        off.style.fontSize="23px";
        off.style.color="#24a3b5";
        off.style.fontWeight="600";
        off.textContent="40% Off";
        off.style.paddingBottom="1px"


        
        var div = document.createElement("div");
        div.style.width = "20%";
        div.style.height = "100%";
        
        let img = document.createElement("img");
        img.src = array[i];
        img.style.height = "50%";
        img.style.paddingLeft = "65px";
        let h4=document.createElement('h4');
        h4.textContent=min40offnames[i];
        h4.style.color="#757575"
       img.style.paddingTop="20px"
    
        let p = document.createElement("p");
        p.textContent = "dummy";
        div.append(img,h4,price,off);
        dox.append(div);
        
}
}


     
          var dox=document.getElementById('bottombox');
        
    
   autoDis(array);


function autoDis(arrays){
    let l = -1;
    let m = 4;
   dox.innerHTML="";
      l = l + 1;
      m = m + 1;
      for (let i = l; i < m; i++) {
        
        let div = document.createElement("div");
        div.style.width = "20%";
        div.style.height = "100%";
        div.style.marginLeft = "2%"
        div.classList.add()

        let price=document.createElement("p");
        price.style.fontSize="18px";
        price.style.lineHeight="20px";
        price.style.color="#212121";
        price.style.fontWeight="500"
        price.textContent=NAprice[i];


        let off=document.createElement('flag');
        off.style.fontSize="15px";
        off.style.color="#24a3b5";
        off.style.fontWeight="600";
        off.textContent="40% Off";
        off.style.paddingBottom="1px"
       
        
        let img = document.createElement("img");
        let h4=document.createElement('h4');
        h4.textContent=min40offnames[i];
        h4.style.color="#757575"
        h4.style.fontWeight = "500";
        img.src = arrays[i];
        img.style.height = "50%";
        img.style.padding = "20px";
        let p = document.createElement("p");
        p.textContent = "dummy";
        div.append(img,h4,price,off);
        dox.append(div);
        
      }
    }
    // moveInd(bestsellingarr);
   // best selling products
   function bestsellingpro(){

       dox.innerHTML="";
       l = l + 1;
      m = m + 1;
      for (let i = 0; i < 5; i++) {



        let price=document.createElement("p");
        price.style.fontSize="18px";
        price.style.lineHeight="20px";
        price.style.color="#212121";
        price.style.fontWeight="500"
        price.textContent=NAprice1[i];


        let off=document.createElement('flag');
        off.style.fontSize="15px";
        off.style.color="#24a3b5";
        off.style.fontWeight="600";
        off.textContent="20% Off";
        off.style.paddingBottom="1px"


        let div = document.createElement("div");
        div.style.width = "20%";
        div.style.height = "100%";
        div.style.marginLeft = "2%"
        div.classList.add("display4")
        
        let img = document.createElement("img");
        let h4=document.createElement('h4');
        h4.textContent=bestsellingnames[i];
        h4.style.fontWeight = "500";
        h4.style.color="#757575"
        img.src = bestsellingarr[i];
        img.style.padding = "20px";
        img.style.height = "50%";
        let p = document.createElement("p");
        p.textContent = "dummy";
        div.append(img,h4,price,off);
        dox.append(div);
   }
}
let newarrivals=['https://cdn.shopclues.com/images1/thumbnails/115889/320/320/152909391-115889762-1642231409.jpg',
'https://cdn.shopclues.com/images1/thumbnails/115888/320/320/152908795-115888197-1642145532.jpg',
'https://cdn.shopclues.com/images1/thumbnails/115887/320/320/152908503-115887380-1642078916.jpg',
'https://cdn.shopclues.com/images1/thumbnails/115883/320/320/152907321-115883687-1641974615.jpg',
'https://cdn.shopclues.com/images1/thumbnails/115854/320/320/152897210-115854156-1641126588.jpg',
'https://cdn.shopclues.com/images1/thumbnails/115851/320/320/152896044-115851081-1640940597.jpg',
'https://cdn.shopclues.com/images1/thumbnails/115851/320/320/152896029-115851014-1640939874.jpg',
'https://cdn.shopclues.com/images1/thumbnails/115850/320/320/152896022-115850983-1640939284.jpg',
'https://cdn.shopclues.com/images1/thumbnails/115849/320/320/152895360-115849436-1640858840.jpg']
var tabarr=[
    'https://cdn.shopclues.com/images/thumbnails/12509/320/320/41A0LRzs9L1424415529.jpg',
    'https://cdn.shopclues.com/images/thumbnails/1602/320/320/1319260pqCBcjyzID0vOxck48013700588371382777288.png',
    'https://cdn.shopclues.com/images1/thumbnails/115731/320/320/152851247-115731825-1637138022.jpg',
    'https://cdn.shopclues.com/images/thumbnails/8501/320/320/ffsfront1414909490.jpg',
    'https://cdn.shopclues.com/images1/thumbnails/115731/320/320/152850855-115731321-1637131228.jpg',
    'https://cdn.shopclues.com/images1/thumbnails/115732/320/320/152851774-115732250-1637142452.jpg',
    'https://cdn.shopclues.com/images1/thumbnails/115742/320/320/152856793-115742966-1637648074.jpg',
    'https://cdn.shopclues.com/images/thumbnails/3288/320/320/Edutab21395397015.jpg'
]




function tabletsfxn(){

       dox.innerHTML="";
       l = l + 1;
      m = m + 1;
      for (let i = 0; i < 5; i++) {

        let div = document.createElement("div");
        div.style.width = "20%";
        div.style.height = "100%";
        div.style.marginLeft = "2%"


        let price=document.createElement("p");
        price.style.fontFamily="Roboto, Arial, Helvetica, sans-serif";
        price.style.fontSize="18px";
        price.style.lineHeight="20px";
        price.style.color="#212121";
        price.style.fontWeight="500"
        price.textContent=NAprice3[i];


        let off=document.createElement('flag');
        off.style.fontSize="15px";
        off.style.color="#24a3b5";
        off.style.fontWeight="600";
        off.textContent="20% Off";
        off.style.paddingBottom="1px"
        off.style.paddingTop="3px";

        let img = document.createElement("img");
        let h4=document.createElement('h4');
        h4.style.fontWeight = "500";
        h4.textContent=tabletnames[i];
        h4.style.color="#757575"
       
        img.src = tabarr[i];
        img.style.height = "50%";
        img.style.padding = "20px";

        let p = document.createElement("p");
        p.textContent = "dummy";
        div.append(img,h4,price,off);
        dox.append(div);
}
}
function newarrivalsfxn(){
  
       dox.innerHTML="";
       l = l + 1;
      m = m + 1;
      for (let i = 0; i < 5; i++) {

        let div = document.createElement("div");
        div.style.width = "20%";
        div.style.height = "100%";
        div.style.marginLeft = "2%"
        div.classList.add("display3")
        
        let price=document.createElement("p");
        price.style.fontFamily="Roboto, Arial, Helvetica, sans-serif";
        price.style.fontSize="18px";
        price.style.lineHeight="20px";
        price.style.color="#212121";
        price.style.fontWeight="500"
        price.textContent=NAprice2[i];


        let off=document.createElement('flag');
        off.style.fontSize="15px";
        off.style.color="#24a3b5";
        off.style.fontWeight="600";
        off.textContent="20% Off";
        off.style.paddingBottom="1px"

        let name=document.createElement('h4');
        name.style.color="#757575"
        let img = document.createElement("img");
        let h4=document.createElement('h4');
        name.style.fontWeight = "500";
        name.textContent=newarriNames[i];
        h4.style.color="#757575"
        img.src = newarrivals[i];
        img.style.height = "50%";
        img.style.padding = "20px";
        let p = document.createElement("p");
        p.textContent = "dummy";
        div.append(img,name,price,off);
        dox.append(div);
}
}
let secondArr=['https://cdn.shopclues.com/images1/thumbnails/112670/160/160/151764373-112670959-1609234442.jpg',
'https://cdn.shopclues.com/images/thumbnails/89407/160/160/13194565671pXh516HIL1513156128.jpg',
'https://cdn.shopclues.com/images1/thumbnails/93280/160/160/141296433-93280312-1538110209.png',
'https://cdn.shopclues.com/images1/thumbnails/112486/160/160/151680485-112486010-1608298679.jpg',
'https://cdn.shopclues.com/images/thumbnails/89406/160/160/131945540813SPpaS7pL1513154511.jpg',
'https://cdn.shopclues.com/images1/thumbnails/93280/160/160/141296540-93280628-1538113164.png']


function secondArrAppend(){
   
    l=l+1;
    m=m+1;


    for(let i=i;i<m;i++){
        let div =document.createElement('div');
        div.style.width = "20%";
        div.style.height = "100%";
        div.style.marginLeft = "2%";
        div.classList.add("dispaly3")
        // div.style.border = "1px solid black";
        
        let img = document.createElement("img");
        let h4=document.createElement('h4');
        h4.textContent=bestsellingnames[i];
        h4.style.fontWeight = "500";
        h4.style.color="#757575"
        img.src = secondArr[i];
        img.style.height = "50%";
        img.style.padding = "20px";
        let p = document.createElement("p");
        p.textContent = "dummy";
        div.append(img);
        dox.append(div);
    }

    }

    
    let alsoDiv=document.getElementById("display2");
    function alsobought(){
    let l = -1;
    let m = 4;
        console.log(l,m);
   dox.innerHTML="";
      l = l + 1;
      m = m + 1;
      for (let i = l; i < m; i++) {
        
        var div = document.createElement("div");
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.marginLeft = "2%";
        div.classList.add('display3')
        
        let img = document.createElement("img");
        img.src = array[i];
        img.style.height = "50%";
        img.style.padding = "20px";
        let h4=document.createElement('h4');
        h4.style.fontWeight = "500";
        h4.textContent=min40offnames[i];
        h4.style.color="#757575"
        let price=document.createElement("P");
        price.textContent="560"
        price.style.fontSize="18px"
        price.style.fontWeight="500";
        price.style.fontStyle="normal"
        price.style.color="#212121";
        price.style.lineHeight="20px"
        let p = document.createElement("p");
        p.textContent = "dummy";
        div.append(img,h4,price);
        alsoDiv.append(div);
}
}
function min40offfxn(){
    console.log('essss');
    let l = -1;
    let m = 4;
        console.log(l,m);
   dox.innerHTML="";
      l = l + 1;
      m = m + 1;
      for (let i = l; i < m; i++) {
        


        let price=document.createElement("p");
        price.style.fontSize="18px";
        price.style.lineHeight="20px";
        price.style.color="#212121";
        price.style.fontWeight="500"
        price.textContent=NAprice[i];


        let off=document.createElement('flag');
        off.style.fontSize="15px";
        off.style.color="#24a3b5";
        off.style.fontWeight="600";
        off.textContent="20% Off";
        off.style.paddingBottom="1px"


        
        var div = document.createElement("div");
        div.style.width = "20%";
        div.style.height = "100%";
        div.classList.add("display3");
        div.style.marginLeft = "2%";
        
        let img = document.createElement("img");
        img.src = array[i];;
        img.style.height = "50%";
        img.style.padding = "20px";
        let h4=document.createElement('h4');
        h4.textContent=min40offnames[i];
        h4.style.color="#757575"
        h4.style.fontWeight = "500";
    
        let p = document.createElement("p");
        p.textContent = "dummy";
        div.append(img,h4,price,off);
        dox.append(div);
       
     
}
}
// alsobought();


let alsoboughtImage=[
  'https://cdn.shopclues.com/images1/thumbnails/112670/160/160/151764373-112670959-1609234442.jpg',
  'https://cdn.shopclues.com/images/thumbnails/89406/160/160/131945540813SPpaS7pL1513154511.jpg',
  'https://cdn.shopclues.com/images1/thumbnails/114460/160/160/152412477-114460916-1624022293.jpg',
  'https://cdn.shopclues.com/images1/thumbnails/112486/160/160/151680485-112486010-1608298679.jpg',
  'https://cdn.shopclues.com/images1/thumbnails/93280/160/160/141296433-93280312-1538110209.png',
  'https://cdn.shopclues.com/images1/thumbnails/112500/160/160/151692287-112500949-1608380219.jpg',
  'https://cdn.shopclues.com/images1/thumbnails/93280/160/160/141296540-93280628-1538113164.png',
  
]
let alsoboughtNames=[
  'Uniqon Set Of 4 Pcs Multicolor Multipurpose Free Size Sun Protection HeadWraps,hair Bandana Band For Boys And Girls',
  'Strauss Bronx FT Skateboard',
  'Vatika Henna hair colour RICH BLACK 60G',
  'Adhvik Pack Of 4 Pcs Multicolor Multipurpose Free Size Sun Protection HeadWraps,hair Bandana Band For Boys And Girls',
  'Vegetal Bio Colour Soft Black 150gm',
  'Uniqon Set Of 3 Pcs Multicolor Multipurpose Free Size Sun Protection HeadWraps,hair Bandana Band For Boys And Girls',
  'Vegetal Bio Colour Dark Brown 50gm'
]
let alsoboughtPrice=[
'₹299','₹1,469','₹999','₹299','₹715','₹255','₹233'
]
let alsoboughtFakeP=[
  '₹399','1699','₹1200','₹399','₹799','₹399','₹265'
]



let s=0;
let n=5;
function min40offfxn4(){
   
        console.log(l,m);
        let dox2=document.getElementById('display3')
 

      s = s + 1;
      n = n + 1;
      if(s<=2){
        dox2.innerHTML="";
    }
      for (let i = s; i < n; i++) {

        let Fprice=document.createElement("span")
        let Rprice=document.createElement("span");
        Rprice.textContent=alsoboughtPrice[i];
        
        Fprice.textContent=alsoboughtFakeP[i];
        
        Fprice.style.fontSize="18px";
        Fprice.style.lineHeight="20px";
        Fprice.style.color="#757575";
        Fprice.style.fontWeight="500";
        Fprice.style.textDecoration="line-through";
        Fprice.style.paddingRight="20px"


        let priceDiv=document.createElement("div");
        priceDiv.style.display="flex";
        
        Rprice.style.fontSize="18px";
        Rprice.style.lineHeight="20px";
        Rprice.style.color="#212121";
        Rprice.style.fontWeight="500";

        priceDiv.append(Fprice,Rprice);


        if(s<=2){ 
           
        var div = document.createElement("div");
        div.style.width = "20%";
        div.style.height = "100%";
        div.style.marginLeft = "2%";
        div.classList.add("display3")
        // div.style.border = "1px solid black";
        
        let img = document.createElement("img");
        img.src =alsoboughtImage[i];
        img.style.height = "50%";
        img.style.padding = "20px";
        let h4=document.createElement('h4');
        h4.style.fontWeight = "500";
        h4.textContent=alsoboughtNames[i];
        h4.style.color="#757575"
    
        let p = document.createElement("p");
        p.textContent = "dummy";
        div.append(img,h4,priceDiv);
        dox2.append(div);
        
       
     
    }
}
}



function min40offfxnAuto(){

    let btn=document.getElementById("btnL");
  
    btn.classList.add("buttonhover")
   
   
      let dox2=document.getElementById('display3')
    
      for (let i = 0; i < 5; i++) {

        let Fprice=document.createElement("span")
        let Rprice=document.createElement("span");
        Rprice.textContent=alsoboughtPrice[i];
        
        Fprice.textContent=alsoboughtFakeP[i];

        Fprice.style.fontSize="18px";
        Fprice.style.lineHeight="20px";
        Fprice.style.color="#757575";
        Fprice.style.fontWeight="500";
        Fprice.style.textDecoration="line-through";
        Fprice.style.paddingRight="20px"


        let priceDiv=document.createElement("div");
        priceDiv.style.display="flex";
        
        
        Rprice.style.fontSize="18px";
        Rprice.style.lineHeight="20px";
        Rprice.style.color="#212121";
        Rprice.style.fontWeight="500";

        priceDiv.append(Fprice,Rprice);
           
        var div = document.createElement("div");
        div.style.width = "20%";
        div.style.height = "100%";
        div.style.marginLeft = "2%";
        div.classList.add("display3")
        // div.style.border = "1px solid black";
        
        let img = document.createElement("img");
        img.src = alsoboughtImage[i];;
        img.style.height = "50%";
        img.style.padding = "20px";
        let h4=document.createElement('h4');
        h4.style.fontWeight = "500";
        h4.textContent=alsoboughtNames[i];
        h4.style.color="#757575"
    
        let p = document.createElement("p");
        p.textContent = "dummy";
        div.append(img,h4,priceDiv);
        dox2.append(div);
       
    }
}
    min40offfxnAuto();

    // get data from local storage
    let product_id = JSON.parse(localStorage.getItem("productDetail"));
    console.log(product_id)
    let tosend = JSON.parse(localStorage.getItem("productDetail"));
   
product()
async function product() {
  const response = await fetch(`https://shopclues-backend.herokuapp.com/mobiles/${product_id}`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
        
    },
    // body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  data = await response.json(); // parses JSON response into native JavaScript objects

  
  let { image, price, discount, product_name ,product_desc} = data
    // get data from local storage


    let productappend = document.querySelector(".second-box");
    let imgappend = document.querySelector(".box1");

    let newtitle = product_name.split(" ");
    for(let i=0; i<newtitle.length; i++){
      if(newtitle[i] == "Apple"){
        document.querySelector(".brandofproduct").textContent = `: ${newtitle[i]}`;
      }
      if(newtitle[i] == "iPhone"){
        document.querySelector(".brandofproduct").textContent = `: ${newtitle[i]}`;
      }
      if(newtitle[i] == "iphone"){
        document.querySelector(".brandofproduct").textContent = `: ${newtitle[i]}`;
      }
      if(newtitle[i] == "VZ"){
        document.querySelector(".brandofproduct").textContent = `: ${newtitle[i]}`;
      }
      if(newtitle[i] == "Vizio"){
        document.querySelector(".brandofproduct").textContent = `: ${newtitle[i]}`;
      }
      if(newtitle[i] == "Itel"){
        document.querySelector(".brandofproduct").textContent = `: ${newtitle[i]}`;
      }
      if(newtitle[i] == "Micromax"){
        document.querySelector(".brandofproduct").textContent = `: ${newtitle[i]}`;
      }
      if(newtitle[i] == "Vivo"){
        document.querySelector(".brandofproduct").textContent = `: ${newtitle[i]}`;
      }
      if(newtitle[i] == "Rolecto"){
        document.querySelector(".brandofproduct").textContent = `: ${newtitle[i]}`;
      }
      if(newtitle[i] == "Redmi"){
        document.querySelector(".brandofproduct").textContent = `: ${newtitle[i]}`;
      }
      if(newtitle[i] == "Tecno"){
        document.querySelector(".brandofproduct").textContent = `: ${newtitle[i]}`;
      }
      if(newtitle[i] == "Samsung"){
        document.querySelector(".brandofproduct").textContent = `: ${newtitle[i]}`;
      }
    }

    addproduct();

    function addproduct(){

      y = `<img
      class="big-img"
      src="${image}"
      alt="mobile phone"/>`


  x = `<h3 class="heading">${product_name}</h3>
      <span id="spanof"><a href="iTel">iTel</a> Product Id : 151942655</span><br />
      <span  id="spanof" 
        ><div class="star">5 &#9733;&#9733;&#9733;&#9733;&#9733;</div>
        (1)
        <a href="Be the first to write a review"
          >Be the first to write a review</a
        ></span
      >
      <span  id="spanof" class="price1"
        ><h2 class="price">₹${price}</h2>
        <h2><del>₹${+price + 101}</del></h2>
        <p class="mrp">MRP:</p>
        <h2><del>₹${+price + 437}</del></h2>
        <p class="discount">${discount} off</p></span>
      <p id="">Inclusive of all taxes</p>
      <div class="super_discount" id="from_js">
        <div class="discount_head">
          <span id="spanof" ><i></i>Deal Price
          ><a href="javascript:void(0);" id="cb_popup" onclick="showinfobox()"
            >How to earn CluesBucks<sup>+</sup><i class="iota"></i></a></span>
        </div>
        <div class="discount_table">
          <table width="100%">
            <thead>
              <tr>
                <th class="brd_rt brd_lt brd_tp">Original Price</th>
                <th class="no-padding">
                  <table width="100%">
                    <tbody>
                      <tr>
                        <th
                          colspan="2"
                          height="22"
                          class="brd_rt brd_tp no-padding">
                          Applicable for All Users
                        </th>
                      </tr>
                      <tr>
                        <th class="brd_tp" width="50%">
                          Discount by
                          <span  id="spanof" class="success">cluesbucks<sup>+</sup></span>
                        </th>
                        <th class="brd_rt brd_tp" width="50%">
                          Use Coupon <span id="spanof"  class="success">EXTRA12</span>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </th>
                <th>Deal Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="brd_rt brd_lt brd_btm">
                  ₹${price} <i class="fas fa-minus"></i>
                </td>
                <td class="brd_btm no-padding">
                  <table width="100%">
                    <tbody>
                      <tr>
                        <td class="brd_tp" width="50%">
                          (₹200 <i class="fas fa-plus"></i>
                        </td>
                        <td class="brd_rt brd_tp" width="50%">
                          ₹899) <i class="fas fa-equals"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td class="deal_price">₹${+price - (200 + 899)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- <div class="deal"></div> -->
      <p class="text">*All discounts can be availed in the cart page</p>
      <span id="spanof" 
        ><img
          class="diamond"
          src="https://images.shopclues.com/images/ui/loyalty_diamond.png"
          alt=""
        />
        <p class="plus">Extra CluesBucks+</p>
        <p class="club">only on VIP Club.</p>
        <a href=" Join Now"> Join Now</a></span
      >
      <span  id="spanof" class="ul"
        ><ul>
          <li>Facility : With Calling</li>
        </ul>
        <ul>
          <li>Display Size : 7 inches(17.78 cm)</li>
        </ul>
      </span>
      <ul class="storage">
        <li>OS Name : Android Pie 9.0</li>
      </ul>
      <a href="More Specification" class="more">More Specification</a>
      <p class="emi"><i class="fal fa-badge-percent"></i>Emi starts at 423</p>
      <span id="spanof" 
        ><p class="offer"><i class="fas fa-tags"></i> 4 offers Available for you</p>
        <a href="+3 More">+3 More</a></span
      >
      <span id="spanof" 
        ><p class="prepaid">PREPAID100</p>
        <p class="order">Get Flat Rs 100 off On Prepaid Orders</p></span
      >
      <span id="spanof" 
        ><p class="code">
          Use Code "PREPAID100" Min. Cart Value ₹1000 | Max. Discount ₹100
          <a href="T&C" class="tc">T&C</a>
        </p></span
      >
      <span id="spanof" 
        ><button class="add">ADD TO CART</button
        ><button class="buy">BUY NOW</button></span
      >
      <span id="spanof" 
        ><input
          id="pincode"
          type="text"
          placeholder="Enter pincode for delivery"
        />
        <button class="check">Check</button></span
      >
      <span id="spanof" 
        ><p class="cod">COD</p>
        <p class="not" id="avi">Not Available</p>
        <p class="cod" id="ship">Shipping:</p>
        <p class="not" id="removezero">₹0</p>
        <p class="cod">Delivery:</p>
        <p class="not" id="delIn2days">2-5 Business Days</p></span
      >
      <p class="easy"><i class="fas fa-undo-alt"></i> Easy Returns & Replacement</p>
      <p class="easy">
        <i class="far fa-credit-card"></i> Payment Options: (Credit Card , Debit Card , Net Banking , Wallets ,
        EMI )
      </p>`

  productappend.innerHTML = x;
  imgappend.innerHTML = y;
  document.getElementById("bottom").textContent = product_name;
        }

    // function for add to cart data
    var description = "a";
    let addtoCart = document.querySelector(".add");

    addtoCart.addEventListener("click", addtocart);

    async function addtocart(){
      let userDetail = JSON.parse(localStorage.getItem("loginData"));
    if(userDetail != null && userDetail != ""){
      let obj = {
        image,
        product_name,
        price,
        product_desc,
        discount
      }
      obj = JSON.stringify(obj);

    try {
      let url = "https://shopclues-backend.herokuapp.com/carts";
      let responce = await fetch(url, {
        method: "POST",
        body: obj,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userDetail.token}`,
        },
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  } 
  else{
    let addtoCart = document.querySelector(".add");

    addtoCart.addEventListener("click", addtocart);
    let arraytocart = JSON.parse(localStorage.getItem("cartData")) || [];
    function addtocart(){
      let obj = {
        image,
        product_name,
        price,
        product_desc,
        discount
      }
        arraytocart.push(obj);
        localStorage.setItem("cartData", JSON.stringify(arraytocart));
        window.location.reload();
    }
  }
}

      // function for button buy now 

    let buynowP = document.querySelector(".buy");

    buynowP.addEventListener("click", buynow);
    function buynow(){
        arraytocart.push(tosend);
        localStorage.setItem("cartData", JSON.stringify(arraytocart));
        localStorage.setItem("paymentAmount", JSON.stringify(`Rs ${price}`));
        window.location.href = "SelectAddress.html";
    }

    // function to check location

    

    let checkloc = document.querySelector(".check");

    checkloc.addEventListener("click",()=>{
        let locationValue = document.getElementById("pincode").value;
        if(locationValue == 421005){
            document.getElementById("avi").textContent = "Not Available";
            document.getElementById("ship").textContent = "Free Shipping";
            document.getElementById("removezero").textContent = null;
            document.getElementById("delIn2days").textContent = "Tue 25 Jan - Fri 28 Jan";
        }
        else{
            document.getElementById("avi").textContent = "Not Available";
            document.getElementById("ship").textContent = "Shipping";
            document.getElementById("removezero").textContent = "Not Available";
            document.getElementById("delIn2days").textContent = null;
        }
    })
  }