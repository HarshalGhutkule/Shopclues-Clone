
function paymentDone(e) {
  e.preventDefault();

    let x = JSON.parse(localStorage.getItem("paymentdata"));

    let { product_name, price, image } = x[0];

    let { token } = JSON.parse(localStorage.getItem("loginData"));

    let orderDetail = {
      image,
      product_name,
      price,
    };

    orderDetail = JSON.stringify(orderDetail);
    a()
    async function a(){

    try {
      let url = "https://shopclues-backend.herokuapp.com/orders";
      let responce = await fetch(url, {
        method: "POST",
        body: orderDetail,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.setItem("cartData", JSON.stringify(""));
      window.location.href = "https://shopcluespaytm.herokuapp.com/";

    } catch (err) {
      console.log(err);
    }
  }
      
}

// show payment amount

let amountTopay = JSON.parse(localStorage.getItem("paymentAmount"));

document.getElementById("pay").value = `Pay ${amountTopay}`;
