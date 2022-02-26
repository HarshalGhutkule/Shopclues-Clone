
// function to append data
let data;
let List_div = document.querySelector("#list_div");
product();
async function product() {
  const response = await fetch("https://shopclues-backend.herokuapp.com/mobiles", {
    method: "GET", 
    headers: {
      "Content-Type": "application/json",
      
    },
    
  });
  data = await response.json(); 
    appendData(data,List_div)
}

    function appendData(d, location) {
      console.log(d);
      if (d.length == 0) {
        location.innerHTML = null;
      } else {
        let x = "";
        d.forEach((el, i) => {
          x += `<div class="mobile-div">
              <span id="wishlist">
                <a 
                  ><img
                    src="https://cdn-icons-png.flaticon.com/128/6320/6320703.png"
                    alt=""
                /></a>
              </span>
              <div class="img-div">
                <img
                  src="${el.image}"
                  alt="mobile image"
                />
              </div>
              <div>
                <p id="shipping">${el.product_name}</p>
                <div class="new-price">
                  <span class="p-price">₹${el.price}</span>
                  <span class="prd-discount">${el.discount}Off</span>
                </div>
                <div class="old-price">
                  <span>₹${Math.floor(Math.random() * (4000 - 3000) + 3000)}</span>
                  <span>₹${el.mrp}</span>
                </div>
                <div>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </div>
                <p id="shipping"><i class="fal fa-truck"></i>Free Shipping</p>
              </div>
            </div>`;
          location.innerHTML = x;
          let mobile_name = document.querySelectorAll(".mobile-div");
          mobile_name.forEach((el, i) => {
            el.addEventListener("click", () => {
              localStorage.setItem("productDetail", JSON.stringify(d[i]._id));
              window.location.href = "ProductDetailPage.html";
            });
          });
        });
      }
    }

  // function for high to low
  let high_price = document.getElementById("high-price");

  high_price.addEventListener("click", highPrice);

  function highPrice() {
    let data1 = data.sort(function (a, b) {
      console.log("work");
      return b.price - a.price;
    });
    appendData(data1, List_div);
  }

  // function for low to high

  let low_price = document.getElementById("low-price");

  low_price.addEventListener("click", lowPrice);

  function lowPrice() {
    let data1 = data.sort(function (a, b) {
      console.log("work");
      return a.price - b.price;
    });
    appendData(data1, List_div);
  }


  // function for 2501-5000
  let price_filter = document.getElementById("price-one");

  price_filter.addEventListener("click", () => {
    document.getElementById("price-two").checked = false;
    if (price_filter.checked === true) {
      let data1 = data.filter((el) => {
        return el.price > 2501 && el.price < 5000;
      });
      appendData(data1, List_div);
    }
  });
  // function for above 5000

  let price_filter2 = document.getElementById("price-two");

  price_filter2.addEventListener("click", () => {
    document.getElementById("price-one").checked = false;
    if (price_filter2.checked === true) {
      let data1 = data.filter((el) => {
        return el.price > 5000;
      });
      appendData(data1, List_div);
    }
  });
  // function to clear all price
  let clear_all = document.querySelector(".clear-all");

  clear_all.addEventListener("click", () => {
    price_filter.checked = false;
    price_filter2.checked = false;
    appendData(data, List_div);
  });

  //function for dicount upto 20%

  let discount1 = document.querySelector(".twenty");

  discount1.addEventListener("click", () => {
    document.querySelector(".forty").checked = false;
    document.querySelector(".sixty").checked = false;
    document.querySelector(".eighty").checked = false;
    document.querySelector(".aboveAll").checked = false;
    if (discount1.checked === true) {
      let data1 = data.filter((el) => {
        return el.discount <= "20%";
      });
      appendData(data1, List_div);
    }
  });

  // discount for 21-40%
  let discount2 = document.querySelector(".forty");

  discount2.addEventListener("click", () => {
    document.querySelector(".twenty").checked = false;
    document.querySelector(".sixty").checked = false;
    document.querySelector(".eighty").checked = false;
    document.querySelector(".aboveAll").checked = false;
    if (discount2.checked === true) {
      let data1 = data.filter((el) => {
        return el.discount >= "21%" && el.discount <= "40%";
      });
      appendData(data1, List_div);
    }
  });

  // discount for 41-60%

  let discount3 = document.querySelector(".sixty");

  discount3.addEventListener("click", () => {
    document.querySelector(".twenty").checked = false;
    document.querySelector(".forty").checked = false;
    document.querySelector(".eighty").checked = false;
    document.querySelector(".aboveAll").checked = false;
    if (discount3.checked === true) {
      let data1 = data.filter((el) => {
        return el.discount >= "41%" && el.discount <= "60%";
      });
      appendData(data1, List_div);
    }
  });

  // discount for 61-80%

  let discount4 = document.querySelector(".eighty");

  discount4.addEventListener("click", () => {
    document.querySelector(".twenty").checked = false;
    document.querySelector(".forty").checked = false;
    document.querySelector(".sixty").checked = false;
    document.querySelector(".aboveAll").checked = false;
    if (discount4.checked === true) {
      let data1 = data.filter((el) => {
        return el.discount >= "61%" && el.discount <= "80%";
      });
      
      appendData(data1, List_div);
    }
  });

  // discount for above 80%

  let discount5 = document.querySelector(".aboveAll");

  discount5.addEventListener("click", () => {
    document.querySelector(".twenty").checked = false;
    document.querySelector(".forty").checked = false;
    document.querySelector(".sixty").checked = false;
    document.querySelector(".eighty").checked = false;
    if (discount5.checked === true) {
      let data1 = data.filter((el) => {
        return el.discount > "80%";
      });

      appendData(data1, List_div);
    }
  });

  // function to clear all discount

  let clear_all1 = document.querySelector(".clear-all1");

  clear_all1.addEventListener("click", () => {
    discount1.checked = false;
    discount2.checked = false;
    discount3.checked = false;
    discount4.checked = false;
    discount5.checked = false;
    appendData(data, List_div);
  });