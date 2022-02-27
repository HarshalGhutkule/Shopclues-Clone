// profile detail function & address function
editMYprofile();
async function editMYprofile() {
  let { id, token } = JSON.parse(localStorage.getItem("loginData"));

  let url = `https://shopclues-backend.herokuapp.com/users/${id}`;

  try {
    let responce = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let data = await responce.json();

    let { email, username, number, firstName, lastName } = data;
    

    if(data.address !== undefined){
        let { val, name, street, city, state, pincode, phonenumber, house } =
      data.address;
    let m = `<p id="myorders">${val}</p>
                <p id="myorders" >${name}</p>
                <p>${house}, ${city}</p>
                <p>${state}</p>
                <p>${pincode}</p>
                <a href="../Pages/editAddress.html">Edit Address</a>`;

    document.getElementById("subdetail3").innerHTML = m;

    document.getElementById("editAddress").innerHTML =
      name +
      ", " +
      street +
      " , " +
      city +
      " " +
      state +
      " " +
      pincode +
      " " +
      phonenumber +
      " " +
      val;
}
if (firstName == undefined && lastName == undefined) {
    let x = `<ul>
                  <li>${username}</li>
                  <li>${email}</li>
                  <li>+91-${number}</li>
                  <a><li onclick = "myprofilefn()">Edit Profile</li></a>
              </ul>`;
    document.getElementById("editMYprofile").innerHTML = x;
  } else {
    let x = `<ul>
                  <li>${firstName} ${lastName}</li>
                  <li>${email}</li>
                  <li>+91-${number}</li>
                  <a><li onclick = "myprofilefn()">Edit Profile</li></a>
              </ul>`;
    document.getElementById("editMYprofile").innerHTML = x;
  }

    if (firstName == undefined && lastName == undefined) {
      let y = `<ul>
            <li id="myorders">${username}</li>
            <li>${email}</li>
            <li>+91-${number}</li>
        </ul>`;
      document.getElementById("subfal").innerHTML = y;
    } else {
      let y = `<ul>
        <li id="myorders">${firstName} ${lastName}</li>
        <li>${email}</li>
        <li>+91-${number}</li>
    </ul>`;
      document.getElementById("subfal").innerHTML = y;
    }

    if (firstName === undefined) {
      document.getElementById("firstName").value = "";
    } else {
      document.getElementById("firstName").value = firstName;
    }
    if (lastName === undefined) {
      document.getElementById("lastName").value = "";
    } else {
      document.getElementById("lastName").value = lastName;
    }
    document.getElementById("mobileNumber").value = number;
    document.getElementById("userEmail").value = email;
  } catch (err) {
    console.log(err);
  }
}

// order append function
orderappend();
async function orderappend() {
  let { id, token } = JSON.parse(localStorage.getItem("loginData"));

  let url = `https://shopclues-backend.herokuapp.com/orders/${id}`;

  try {
    let responce = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let data = await responce.json();

    data.forEach((el) => {
      let { image, product_name, price } = el;

      let x = `<div><div>
                    <img src=${image} alt="product">
                </div>
                <div>
                    <p>${product_name}</p>
                    <p>Price: Rs${price}</p>
                </div></div>`;
      document.getElementById("orderappend").innerHTML += x;
    });
  } catch (err) {
    console.log(err);
  }
}

// function for update user profile
let updatebtn = document.querySelector("#updatebtn");

updatebtn.addEventListener("click", updateProfileOfUser);

async function updateProfileOfUser() {
  let number = document.getElementById("mobileNumber").value;
  let email = document.getElementById("userEmail").value;
  let lastName = document.getElementById("lastName").value;
  let firstName = document.getElementById("firstName").value;

  let obj = {
    firstName,
    lastName,
    email,
    number,
  };

  obj = JSON.stringify(obj);

  let { id, token } = JSON.parse(localStorage.getItem("loginData"));

  let url = `https://shopclues-backend.herokuapp.com/users/update/${id}`;

  try {
    let responce = await fetch(url, {
      method: "PATCH",
      body: obj,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.reload();
  } catch (err) {
    alert(err.message);
  }
}

// function for to see profile, address, bank, change password
let vipclick = document.querySelector("#vip");

vipclick.addEventListener("click", function () {
  document.querySelector("#heading").style.display = "flex";
  document.querySelector("#details").style.display = "grid";
  document.querySelector("#heading1").style.display = "none";
  document.querySelector("#details1").style.display = "none";
  document.querySelector("#heading2").style.display = "none";
  document.querySelector("#details2").style.display = "none";
  document.querySelector("#details3").style.display = "none";
  document.querySelector("#details4").style.display = "none";
  document.querySelector("#details5").style.display = "none";
  document.querySelector("#details6").style.display = "none";
});

let myprofile = document.querySelector(".content>ul>li:nth-child(4)");
let myprofile1 = document.querySelector("#profileEdit>p:nth-child(1)");

let MyOrders = document.querySelector(".content>ul>li:nth-child(1)");
let Myreturns = document.querySelector(".content>ul>li:nth-child(2)");

myprofile.addEventListener("click", myprofilefn);
myprofile1.addEventListener("click", myprofilefn);
MyOrders.addEventListener("click", MyOrdersfn);
Myreturns.addEventListener("click", Myreturnsfn);

function MyOrdersfn() {
  document.querySelector("#heading2").style.display = "none";
  document.querySelector("#details2").style.display = "none";
  document.querySelector("#heading1").style.display = "block";
  document.querySelector("#details1").style.display = "block";
  document.querySelector("#heading").style.display = "none";
  document.querySelector("#details").style.display = "none";
  document.querySelector("#details3").style.display = "none";
  document.querySelector("#details4").style.display = "none";
  document.querySelector("#details5").style.display = "none";
  document.querySelector("#details6").style.display = "none";
  document.querySelector("#ordersReturns>p:nth-child(1)").style.borderBottom =
      "3px solid #24a3b5";
      document.querySelector("#ordersReturns>p:nth-child(2)").style.borderBottom =
      "none";
}

function Myreturnsfn() {
    document.querySelector("#heading2").style.display = "none";
    document.querySelector("#details2").style.display = "none";
    document.querySelector("#heading1").style.display = "block";
    document.querySelector("#details1").style.display = "block";
    document.querySelector("#heading").style.display = "none";
    document.querySelector("#details").style.display = "none";
    document.querySelector("#details3").style.display = "none";
    document.querySelector("#details4").style.display = "none";
    document.querySelector("#details5").style.display = "none";
    document.querySelector("#details6").style.display = "none";
    document.querySelector("#ordersReturns>p:nth-child(2)").style.borderBottom =
      "3px solid #24a3b5";
      document.querySelector("#ordersReturns>p:nth-child(1)").style.borderBottom =
      "none";
  }
  

function myprofilefn() {
  document.querySelector("#heading2").style.display = "block";
  document.querySelector("#details2").style.display = "block";
  document.querySelector("#heading1").style.display = "none";
  document.querySelector("#details1").style.display = "none";
  document.querySelector("#heading").style.display = "none";
  document.querySelector("#details").style.display = "none";
  document.querySelector("#details3").style.display = "none";
  document.querySelector("#details4").style.display = "none";
  document.querySelector("#details5").style.display = "none";
  document.querySelector("#details6").style.display = "none";
  document.querySelector("#profileEdit>p:nth-child(1)").style.borderBottom =
    "3px solid #24a3b5";
  document.querySelector("#profileEdit>p:nth-child(2)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(3)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(4)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(5)").style.borderBottom =
    "none";
}

let MyAddressBook = document.querySelector("#profileEdit>p:nth-child(2)");

MyAddressBook.addEventListener("click", MyAddressBookfn);

function MyAddressBookfn() {
  document.querySelector("#heading2").style.display = "block";
  document.querySelector("#details2").style.display = "block";
  document.querySelector("#heading1").style.display = "none";
  document.querySelector("#details1").style.display = "none";
  document.querySelector("#heading").style.display = "none";
  document.querySelector("#details").style.display = "none";
  document.querySelector("#details3").style.display = "block";
  document.querySelector("#details4").style.display = "none";
  document.querySelector("#details5").style.display = "none";
  document.querySelector("#details6").style.display = "none";
  document.querySelector("#profileEdit>p:nth-child(1)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(2)").style.borderBottom =
    "3px solid #24a3b5";
  document.querySelector("#profileEdit>p:nth-child(3)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(4)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(5)").style.borderBottom =
    "none";
}

let Mybank = document.querySelector("#profileEdit>p:nth-child(3)");

Mybank.addEventListener("click", Mybankfn);

function Mybankfn() {
  document.querySelector("#heading2").style.display = "block";
  document.querySelector("#details2").style.display = "block";
  document.querySelector("#heading1").style.display = "none";
  document.querySelector("#details1").style.display = "none";
  document.querySelector("#heading").style.display = "none";
  document.querySelector("#details").style.display = "none";
  document.querySelector("#details3").style.display = "none";
  document.querySelector("#details4").style.display = "block";
  document.querySelector("#details5").style.display = "none";
  document.querySelector("#details6").style.display = "none";
  document.querySelector("#profileEdit>p:nth-child(1)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(2)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(3)").style.borderBottom =
    "3px solid #24a3b5";
  document.querySelector("#profileEdit>p:nth-child(4)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(5)").style.borderBottom =
    "none";
}

let passChange = document.querySelector("#profileEdit>p:nth-child(4)");

passChange.addEventListener("click", passChangefn);

function passChangefn() {
  document.querySelector("#heading2").style.display = "block";
  document.querySelector("#details2").style.display = "block";
  document.querySelector("#heading1").style.display = "none";
  document.querySelector("#details1").style.display = "none";
  document.querySelector("#heading").style.display = "none";
  document.querySelector("#details").style.display = "none";
  document.querySelector("#details3").style.display = "none";
  document.querySelector("#details4").style.display = "none";
  document.querySelector("#details5").style.display = "block";
  document.querySelector("#details6").style.display = "none";
  document.querySelector("#profileEdit>p:nth-child(1)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(2)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(3)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(4)").style.borderBottom =
    "3px solid #24a3b5";
  document.querySelector("#profileEdit>p:nth-child(5)").style.borderBottom =
    "none";
}

let managePass = document.querySelector("#profileEdit>p:nth-child(5)");

managePass.addEventListener("click", managePassfn);

function managePassfn() {
  document.querySelector("#heading2").style.display = "block";
  document.querySelector("#details2").style.display = "block";
  document.querySelector("#heading1").style.display = "none";
  document.querySelector("#details1").style.display = "none";
  document.querySelector("#heading").style.display = "none";
  document.querySelector("#details").style.display = "none";
  document.querySelector("#details3").style.display = "none";
  document.querySelector("#details4").style.display = "none";
  document.querySelector("#details5").style.display = "none";
  document.querySelector("#details6").style.display = "block";
  document.querySelector("#profileEdit>p:nth-child(1)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(2)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(3)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(4)").style.borderBottom =
    "none";
  document.querySelector("#profileEdit>p:nth-child(5)").style.borderBottom =
    "3px solid #24a3b5";
}

// function for update user password
let changebtn = document.querySelector("#changebtn");

changebtn.addEventListener("click", updatePasswordOfUser);

async function updatePasswordOfUser() {
  let password = document.getElementById("CurrentPassword").value;
  let prePassword = document.getElementById("NewPassword").value;
  let newPassword = document.getElementById("ConfirmNewPassword").value;

  if (prePassword !== newPassword) {
    alert("new confirm password not matching");
  } else {
    let obj = {
      password,
      newPassword,
    };

    obj = JSON.stringify(obj);

    let { id, token } = JSON.parse(localStorage.getItem("loginData"));

    let url = `https://shopclues-backend.herokuapp.com/reset/${id}`;

    try {
      let responce = await fetch(url, {
        method: "PATCH",
        body: obj,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Password change");
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  }
}
