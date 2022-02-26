
// function to append cart data
let getdata;
let locationof = document.getElementById("cartD");

appendData();

async function appendData(){

    let { id, token } = JSON.parse(localStorage.getItem("loginData"));

  if(id !== undefined){
    let url = `https://shopclues-backend.herokuapp.com/carts/${id}`;

  try {
    let responce = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    getdata = await responce.json();

    let x = "";
    let tt = 0;
    for(let i=0; i<getdata.length; i++){
        tt += +getdata[i].price;
    }
    getdata.forEach(({product_name,price,image},inde)=>{

        x += `<div id="topI"> 
        <h3 >${inde+1} Item</h3>
    </div>
 
    <div id="itemD">
      <img src="${image}" alt="">
      <p id="itmname">${product_name}</p> <div id="counter"> <p onclick="subs()"  class="minus">-</p><p id="number">1</p><p onclick="add()" class="plus">+</p></div>
      <div id="price">
          <span>Rs</span> <span id="value">${price}</span>
          <p>Inclusive of all the applicable taxes</p>
      </div> 
    </div>`

        locationof.innerHTML = x;
        let grandT=document.getElementById("gTotal");
        let totalPrice=document.getElementById("priceOf");

        grandT.textContent=`Rs${tt-0}`;

        totalPrice.textContent=`Rs${tt}`;

        let addof = document.querySelectorAll(".plus");
        
        addof.forEach((el)=>{
            el.addEventListener("click",add.bind(null,price,el));
        });
        let subof = document.querySelectorAll(".minus");
        subof.forEach((el)=>{
            el.addEventListener("click",subs.bind(null,price,el));
        })

        var count=1;
        

        function add(price,el){
            count++;
            let num=el.closest("#itemD").querySelector("#number");
            num.textContent=count;
            
            totalPrice.textContent=`Rs${count*price}`;

            grandT.textContent=`Rs${count*price-0}`;

        }
        function subs(price,el){
            if(count>=2){ 
            count--;
            let num=el.closest("#itemD").querySelector("#number");
            num.textContent=count;

            totalPrice.textContent=`Rs${count*price}`;
        
            grandT.textContent=`Rs${count*price-0}`;
            }
            }
        })
    }
    catch (err) {
        console.log(err);
    
}

// function for to add address
addAddress();
async function addAddress(){

    let {id,token} = JSON.parse(localStorage.getItem("loginData"));

        let url = `https://shopclues-backend.herokuapp.com/users/${id}`;

    try{
        let responce = await fetch(url, {
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${token}`
            }
        })

        let data = await responce.json();
        
        let {val,name,street,city,state,pincode,phonenumber} = data.address;

        let x = `<div id="texts">   
            <img id="img" height="20px" src="https://img.icons8.com/ios/2x/free-shipping.png" alt="">
            <span id="shippingT">Shipping to:${val},${name}</span>
            <div id="change"><a href="SelectAddress.html">Change</a></div>
            </div>    
            <span id="add">${street},${city},${state},${pincode}|Mob-${phonenumber}</span>`

            document.getElementById("topbar").innerHTML = x;
        }
    catch(err){
        console.log(err);
    }
}

// function to place order

let btn = document.querySelector("#payButton");

btn.addEventListener("click", ()=>{

    let paymentAmt = document.getElementById("gTotal").textContent;

    localStorage.setItem("paymentAmount", JSON.stringify(paymentAmt));
    window.location.href = "SelectPayment.html";
})
  }
}
