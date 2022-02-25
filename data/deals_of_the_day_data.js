var deals_of_the_data = [
  {
    img: "https://cdn.shopclues.com/images/thumbnails/70907/200/200/128348324-70907666-1522394475.jpg",
    name: "Vox V6666 White & Gold 12...",
    p1: "2999",
    p2: "1406",
    p3: "1299",
    dis: "53% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/94892/200/200/142501520-94892843-1542969175.jpg",
    name: "Pack of ^ DeVry Multicolour...",
    p1: "269",
    p2: "1200",
    p3: "237",
    dis: "80% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/114233/200/200/152310615-114233377-1621542810.jpg",
    name: "POCKESTER Brown Wood K...",
    p1: "129",
    p2: "699",
    p3: "128",
    dis: "81% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/89198/200/200/139475783-89198031-1529985889.jpg",
    name: "Fashlook Men White Dotted ...",
    p1: "469",
    p2: "1199",
    p3: "427",
    dis: "64% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/111898/200/200/151364378-111898097-1604389996.jpg",
    name: "I Kall K320 6.53Inchs Display...",
    p1: "8600",
    p2: "9999",
    p3: "5537",
    dis: "44% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/110894/200/200/151056678-110894199-1602215912.jpg",
    name: "Nike ?men Slipper",
    p1: "419",
    p2: "1495",
    p3: "380",
    dis: "74% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/106955/200/200/149777643-106955049-1593024830.jpg",
    name: "I Kall K900 5.5 inches(13.97 ...",
    p1: "5399",
    p2: "7999",
    p3: "4551",
    dis: "43% off",
  },
];

deals_of_the_data.map(function (data) {
  let main_div = document.createElement("div");

  let img = document.createElement("img");
  img.src = data.img;

  let name = document.createElement("p");
  name.innerText = data.name;
  name.setAttribute("class", "nameofpro");

  let price_div = document.createElement("div");

  let p1 = document.createElement("p");
  p1.textContent = `₹${data.p1}`;

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
  document.querySelector(".deals_of_the_day").append(main_div);
});
