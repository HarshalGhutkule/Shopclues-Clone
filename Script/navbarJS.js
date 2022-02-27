setTimeout(timeout, 1000);

function timeout() {
  // dorpdown options mouseover function

  function mouseoverNavigation(ele) {
    let nav1 = document.querySelector(`#${ele}>div`);
    nav1.style.display = "block";
    document.querySelector(`#${ele}>a`).style.backgroundColor = "white";
    document.querySelector(`#${ele}>a`).style.color = "#24a3b5";
  }
  document
    .getElementById("nav1")
    .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav1"));
  document
    .getElementById("nav2")
    .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav2"));
  document
    .getElementById("nav3")
    .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav3"));
  document
    .getElementById("nav4")
    .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav4"));
  document
    .getElementById("nav5")
    .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav5"));
  document
    .getElementById("nav6")
    .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav6"));
  document
    .getElementById("nav7")
    .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav7"));
  document
    .getElementById("nav8")
    .addEventListener("mouseover", mouseoverNavigation.bind(null, "nav8"));

  // dorpdown options mouseout function

  function mouseoutNavigation(ele) {
    let nav1 = document.querySelector(`#${ele}>div`);
    nav1.style.display = "none";
    document.querySelector(`#${ele}>a`).style.backgroundColor = "#24a3b5";
    document.querySelector(`#${ele}>a`).style.color = "white";
  }
  document
    .getElementById("nav1")
    .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav1"));
  document
    .getElementById("nav2")
    .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav2"));
  document
    .getElementById("nav3")
    .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav3"));
  document
    .getElementById("nav4")
    .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav4"));
  document
    .getElementById("nav5")
    .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav5"));
  document
    .getElementById("nav6")
    .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav6"));
  document
    .getElementById("nav7")
    .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav7"));
  document
    .getElementById("nav8")
    .addEventListener("mouseout", mouseoutNavigation.bind(null, "nav8"));

  // function to openSigninPage
  let pleaseSignin = JSON.parse(localStorage.getItem("pleaseSignin"));
  if (pleaseSignin == "1") {
    document.getElementById("back").style.display = "block";
    localStorage.setItem("pleaseSignin", JSON.stringify(""));
  }

  let usernameWhenUserpage = JSON.parse(localStorage.getItem("loginData"));
  console.log(usernameWhenUserpage);
  let openSigninPage = () => {
    if (usernameWhenUserpage == "" || usernameWhenUserpage == null) {
      document.getElementById("back").style.display = "block";
    } else {
      window.location.href = "/Pages/UserPage.html";
    }
  };

  document
    .getElementById("login_sucess")
    .addEventListener("click", openSigninPage);

  document
    .getElementById("userHeading")
    .addEventListener("click", openSigninPage);

  document
    .querySelector("#gotouserpage>li:nth-child(1)")
    .addEventListener("click", openSigninPage);
  document
    .querySelector("#gotouserpage>li:nth-child(2)")
    .addEventListener("click", openSigninPage);
  document
    .querySelector("#gotouserpage>li:nth-child(3)")
    .addEventListener("click", openSigninPage);
  document
    .querySelector("#gotouserpage>li:nth-child(4)")
    .addEventListener("click", openSigninPage);
  document
    .querySelector("#gotouserpage>li:nth-child(5)")
    .addEventListener("click", openSigninPage);
  document
    .querySelector("#gotouserpage>li:nth-child(6)")
    .addEventListener("click", openSigninPage);
  document
    .querySelector("#gotouserpage>li:nth-child(7)")
    .addEventListener("click", openSigninPage);
  document
    .querySelector("#gotouserpage>li:nth-child(8)")
    .addEventListener("click", openSigninPage);
  document
    .querySelector("#gotouserpage>li:nth-child(9)")
    .addEventListener("click", openSigninPage);

  // function to showcart

  let showcart = () => {
    document.querySelector(".hover_content1").style.display = "inline-block";
  };
  document.getElementById("showcart").addEventListener("mouseenter", showcart);

  // function to hidecart

  let hidecart = () => {
    document.querySelector(".hover_content1").style.display = "none";
  };
  document.getElementById("showcart").addEventListener("mouseleave", hidecart);

  // function for search bar

  let showResult = () => {
    let input = document.getElementById("getinput").value;

    if (input == "mobiles") {
      window.location.href = "ProductListPage.html";
    }
  };
  document.querySelector(".srch_btn").addEventListener("click", showResult);

  // function for scroll top button

  let lastscroll = 0;

  let arrow = document.querySelector(".uparrow");

  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastscroll) {
      arrow.style.display = "block";
    } else {
      arrow.style.display = "none";
    }
  });

  // functions for sign-in and regiser page

  let div1 = document.querySelector(".signinShow");
  let div2 = document.querySelector(".signup");
  let h2_1 = document.querySelector("#select_op>h2:nth-child(1)");
  let h2_2 = document.querySelector("#select_op>h2:nth-child(2)");

  let showLogin = () => {
    div2.style.display = "none";
    h2_2.style.color = "black";
    h2_2.style.borderBottom = "none";

    div1.style.display = "block";
    h2_1.style.color = "#55b8c6";
    h2_1.style.borderBottom = "2px solid #55b8c6";
  };
  document.getElementById("showin").addEventListener("click", showLogin);

  let showRegister = () => {
    div1.style.display = "none";
    h2_1.style.color = "black";
    h2_1.style.borderBottom = "none";

    div2.style.display = "block";
    h2_2.style.color = "#55b8c6";
    h2_2.style.borderBottom = "2px solid #55b8c6";
  };
  document.getElementById("showster").addEventListener("click", showRegister);

  // function for storing userdetail on our server(register page)

  let storedetail = document.getElementById("storedetail");

  storedetail.addEventListener("click", postData);

  let userdetail;

  async function postData(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let username = document.getElementById("username1").value;
    let password = document.getElementById("password1").value;

    if (email == "" || number == "" || username == "" || password == "") {
      alert("Please fill all info");
    } else {
      userdetail = {
        email,
        number,
        username,
        password,
      };

      userdetail = JSON.stringify(userdetail);

      let url = "https://shopclues-backend.herokuapp.com/register";

      try {
        let responce = await fetch(url, {
          method: "POST",
          body: userdetail,
          headers: {
            "Content-Type": "application/json",
          },
        });

        let res = await responce.json();
        let emailDisplay = document.querySelector("#emailError");
        let mobileDisplay = document.querySelector("#MobileError");
        let usernameDisplay = document.querySelector("#UsernameError");
        let passwordDisplay = document.querySelector("#PasswordError");
        if (res.errors !== undefined) {
          emailDisplay.style.display = "none";
          mobileDisplay.style.display = "none";
          usernameDisplay.style.display = "none";
          passwordDisplay.style.display = "none";
          res.errors.forEach((el) => {
            if (el.param === "email") {
              emailDisplay.style.display = "block";
              emailDisplay.innerHTML = el.msg;
            }
            if (el.param === "number") {
              mobileDisplay.style.display = "block";
              mobileDisplay.innerHTML = el.msg;
            }
            if (el.param === "username") {
              usernameDisplay.style.display = "block";
              usernameDisplay.innerHTML = el.msg;
            }
            if (el.param === "password") {
              passwordDisplay.style.display = "block";
              passwordDisplay.innerHTML = el.msg;
            }
          });
        } else if (res.status !== "ok") {
          alert(res.message);
        } else {
          document.getElementById("email").value = "";
          document.getElementById("number").value = "";
          document.getElementById("username1").value = "";
          document.getElementById("password1").value = "";
          emailDisplay.style.display = "none";
          mobileDisplay.style.display = "none";
          usernameDisplay.style.display = "none";
          passwordDisplay.style.display = "none";
          alert("Register successfully");
          div2.style.display = "none";
          h2_2.style.color = "black";
          h2_2.style.borderBottom = "none";

          div1.style.display = "block";
          h2_1.style.color = "#55b8c6";
          h2_1.style.borderBottom = "2px solid #55b8c6";
        }
      } catch (err) {
        alert(err.message);
      }
    }
  }

  // function for checking userdetail on masai server (login page)

  let checkdetail = document.getElementById("checkdetail");

  checkdetail.addEventListener("click", checkData);

  let userData;

  async function checkData(event) {
    event.preventDefault();

    userData = {
      username: document.getElementById("username2").value,
      password: document.getElementById("password2").value,
    };

    userData = JSON.stringify(userData);

    try {
      let url = "https://shopclues-backend.herokuapp.com/login";
      let responce = await fetch(url, {
        method: "POST",
        body: userData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      let res = await responce.json();
      if (res.status !== "ok") {
        alert(res.message);
      } else {
        alert("Login successfully");
        let user = document.getElementById("username2").value;
        getUser(user, res.token);
      }
    } catch (err) {
      alert(err.message);
    }
  }

  let usernameof = JSON.parse(localStorage.getItem("loginData"));

  console.log(usernameof);

  if (usernameof != null && usernameof != "") {
    document.getElementById("back").style.display = "none";
    document.getElementById("login_sucess").textContent = usernameof.username;
    document.getElementById("login_sucess").style.fontSize = "12px";
    document.getElementById(
      "login_sucess1"
    ).textContent = `Welcome ${usernameof.username}`;
    document.getElementById("signout").style.display = "block";
  }

  let getUser = async (user, token) => {
    let url = `https://shopclues-backend.herokuapp.com/users?username=${user}`;

    try {
      let responce = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      let data = await responce.json();
      localStorage.setItem(
        "loginData",
        JSON.stringify({ username: data.username, id: data._id, token })
      );
      document.getElementById("back").style.display = "none";
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  // function for signOut

  let signOut = () => {
    usernameof = "";
    localStorage.setItem("loginData", JSON.stringify(usernameof));

    document.getElementById("login_sucess").textContent = "Sign In";
    document.getElementById("login_sucess").style.fontSize = "16px";
    document.getElementById("login_sucess1").textContent = "Login/Register";
    document.getElementById("signout").style.display = "none";
    localStorage.setItem("cartData", JSON.stringify(""));

    window.location.href = "../index.html";
    
  };
  document.getElementById("signout").addEventListener("click", signOut);

  // function to close log and register tab

  let close = document.getElementById("closetab");

  close.addEventListener("click", () => {
    document.getElementById("back").style.display = "none";
  });

  
  let appendCartdata = async() => {

  let idtoken = JSON.parse(localStorage.getItem("loginData"));

  console.log(idtoken);

  if(idtoken !== null && idtoken !== ""){
    let {id,token} = idtoken;
    let url = `https://shopclues-backend.herokuapp.com/carts/${id}`;

  try {
    let responce = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let data = await responce.json();

    if (data != null && data != "") {
        let location = document.querySelector(".listItem");
        let quantity = document.querySelector(".nItems");
        let showonNav = document.getElementById("qty");
  
        let x = "";
  
        data.forEach(({ product_name, image, price }, index) => {
          x += `<div>
                      <img src="${image}" alt="">
                  </div>
                  <div id="rs">
                      <p>${product_name}</p>
                      <p>Rs.${price}</p>
                  </div>`;
  
          location.innerHTML = x;
          quantity.innerHTML = `<p>Your Shopping Cart (${index + 1} Items)</p>`;
          showonNav.style.display = "block";
          showonNav.textContent = index + 1;
        });
      }
  } catch (err) {
    console.log(err);
  }
  }
  else{
    let data = JSON.parse(localStorage.getItem("cartData"));
    if (data != null && data != "") {
        let location = document.querySelector(".listItem");
        let quantity = document.querySelector(".nItems");
        let showonNav = document.getElementById("qty");
  
        let x = "";
  
        data.forEach(({ product_name, image, price }, index) => {
          x += `<div>
                      <img src="${image}" alt="">
                  </div>
                  <div id="rs">
                      <p>${product_name}</p>
                      <p>Rs.${price}</p>
                  </div>`;
  
          location.innerHTML = x;
          quantity.innerHTML = `<p>Your Shopping Cart (${index + 1} Items)</p>`;
          showonNav.style.display = "block";
          showonNav.textContent = index + 1;
        });
      }
  }

  
  };

  appendCartdata();
}
