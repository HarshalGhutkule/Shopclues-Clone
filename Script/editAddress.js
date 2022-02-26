
async function savedata(event){
    event.preventDefault();

    let pincode = document.getElementById("pincode").value;

    if(pincode.length < 6){
        document.getElementById("pinalert").style.display = "block";
    }

    let city = document.getElementById("city").value;

    if(city == ""){
        document.getElementById("cityalert").style.display = "block";
    }

    let state = document.getElementById("state").value;

    if(state == ""){
        document.getElementById("statealert").style.display = "block";
        document.getElementById("statealert").style.marginLeft = "380px";
        document.getElementById("statealert").style.marginTop = "-12px";
    }

    let name = document.getElementById("name").value;

    if(name == ""){
        document.getElementById("namealert").style.display = "block";
    }

    let phonenumber = document.getElementById("phonenumber").value;
    if(phonenumber == ""){
        document.getElementById("phonenumberalert").style.display = "block";
        document.getElementById("phonenumberalert").style.marginLeft = "380px";
        document.getElementById("phonenumberalert").style.marginTop = "0px";
    }

    let house = document.getElementById("house").value;

    if(house == ""){
        document.getElementById("housealert").style.display = "block";
    }

    else if(pincode.length = 6 && city != "" && state != "" && name != "" && phonenumber != "" && house != ""){
        let gst = document.getElementById("gst").value;
        let street = document.getElementById("street").value;

        let radio1 = document.getElementById("radio1");
        let radio2 = document.getElementById("radio2");
        let radio3 = document.getElementById("radio3");
        let val;

        if(radio1.checked == true){
            val = radio1.value;
        }
        else if(radio2.checked == true){
            val = radio2.value;
        }
        else if(radio3.checked == true){
            val = radio3.value;
        }

        let addressofuser = {
            pincode,
            city,
            state,
            name,
            phonenumber,
            house,
            street,
            gst,
            val
        };

        addressofuser = JSON.stringify(addressofuser);

        let {id,token} = JSON.parse(localStorage.getItem("loginData"));

        let url = `https://shopclues-backend.herokuapp.com/users/${id}`;

        try{
            let responce = await fetch(url, {
                method: "PATCH",
                body: addressofuser,
                headers: {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                }
            })
            window.location.href = "UserPage.html";
        }
        catch(err){
            alert(err.message);
        }
        }
}
