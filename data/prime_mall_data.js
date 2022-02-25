var prime_mall = [
  {
    img: "https://gd.image-gmkt.com/li/698/249/1669249698.g_800-w-st_g.jpg",
    name: "Fitgo Black Mens Trackpant...",
    p2: "999",
    p3: "189",
    dis: "81% off",
  },
  {
    img: "https://gd.image-gmkt.com/li/102/570/1652570102.g_800-w-st_g.jpg",
    name: "Trueware Ruff Tuff Jug 120...",
    p2: "499",
    p3: "289",
    dis: "42% off",
  },
  {
    img: "https://gd.image-gmkt.com/li/323/424/1674424323.g_800-w-st_g.jpg",
    name: "Wisholics ID116 Plus Blueto...",
    p2: "1299",
    p3: "469",
    dis: "64% off",
  },
  {
    img: "https://gd.image-gmkt.com/li/203/881/1658881203.g_800-w-st_g.jpg",
    name: "Attitude Jeans Black Cotton...",
    p2: "999",
    p3: "159",
    dis: "84% off",
  },
  {
    img: "https://gd.image-gmkt.com/li/838/389/1674389838.g_800-w-st_g.jpg",
    name: "Digital Alarm Clock",
    p2: "699",
    p3: "179",
    dis: "74% off",
  },
  {
    img: "https://gd.image-gmkt.com/li/017/612/1669612017.g_800-w-st_g.jpg",
    name: "Style Wind Mens Black Full...",
    p2: "899",
    p3: "299",
    dis: "75% off",
  },
  {
    img: "https://gd.image-gmkt.com/li/397/217/1651217397.g_800-w-st_g.jpg",
    name: "29K Stylish Comfortable Me...",
    p2: "599",
    p3: "179",
    dis: "70% off",
  },
  {
    img: "https://gd.image-gmkt.com/li/369/295/1653295369.g_800-w-st_g.jpg",
    name: "Gilol Adjustable Mobile Stand",
    p2: "799",
    p3: "179",
    dis: "78% off",
  },
  {
    img: "https://gd.image-gmkt.com/li/001/604/1641604001.g_800-w-st_g.jpg",
    name: "Heart Rate Finger Pulse Oxi...",
    p2: "5495",
    p3: "279",
    dis: "95% off",
  },
  {
    img: "https://gd.image-gmkt.com/li/045/620/1657620045.g_800-w-st_g.jpg",
    name: "Adaaistic Men s Black Stret...",
    p2: "1899",
    p3: "569",
    dis: "70% off",
  },
];

prime_mall.map(function (data) {
  let main_div = document.createElement("div");

  let img = document.createElement("img");
  img.src = data.img;

  let name = document.createElement("p");
  name.innerText = data.name;

  let price_div = document.createElement("div");

  let p1 = document.createElement("p");
  p1.textContent = "";

  let p2 = document.createElement("p");
  p2.textContent = `₹${data.p2}`;

  let p3 = document.createElement("p");
  p3.textContent = `₹${data.p3}`;

  price_div.append(p1, p2, p3);
  price_div.setAttribute("class", "price_div");

  let dis = document.createElement("p");
  dis.innerText = data.dis;
  dis.setAttribute("id", "price_divplusp");
  main_div.append(img, name, price_div, dis);
  document.querySelector(".prime_mall").append(main_div);
});
