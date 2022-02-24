async function paymentDone(e) {
  e.preventDefault();
  let card_num = document.querySelector(".card_num").value;
  let MM = document.querySelector("#month").value;
  let YY = document.querySelector("#year").value;
  let CVV = document.querySelector("#cvv").value;
  let card_name = document.querySelector(".card_name").value;

  if (
    card_num == 123412341234 &&
    MM == 04 &&
    YY == 2024 &&
    CVV == 123 &&
    card_name == "Harshal Ghutkule"
  ) {
    let x = JSON.parse(localStorage.getItem("paymentdata"));

    let { title, price, image } = x[0];

    let { token } = JSON.parse(localStorage.getItem("loginData"));

    let orderDetail = {
      image,
      title,
      price,
    };

    console.log(orderDetail, token);

    orderDetail = JSON.stringify(orderDetail);

    try {
      let url = "http://localhost:2349/orders";
      let responce = await fetch(url, {
        method: "POST",
        body: orderDetail,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.log(err);
    }

    alert("Please wait payment is processing");
    setTimeout(timeout, 2000);

    function timeout() {
      localStorage.setItem("cartData", JSON.stringify(""));
      window.alert("Payment successfull");
      window.location.href = "../index.html";
    }
  } else {
    document.querySelector(".invalid").style.display = "block";
  }
}

// show payment amount

let amountTopay = JSON.parse(localStorage.getItem("paymentAmount"));

document.getElementById("pay").value = `Pay ${amountTopay}`;
