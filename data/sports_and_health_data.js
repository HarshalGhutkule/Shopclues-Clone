var sports_and_health = [
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/108803/280/1/150436700-108803780-1596188707.jpg",
    name: "Medical Equipment & Acces...",
    dis: "Upto 80% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/104507/280/1/148819339-104507472-1579085071.jpg",
    name: "Fitness Brands & Watches",
    dis: "Upto 80% off",
  },
  {
    img: "https://cdn.shopclues.com/images/thumbnails/27595/280/1/11448611056.jpg",
    name: "Bottlers & Shakers",
    dis: "Upto 80% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/103419/280/1/148130677-103419160-1571212818.jpg",
    name: "Nutrition  Supplements",
    dis: "Upto 80% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/95250/280/1/142772233-95250978-1544273464.jpg",
    name: "Skipping Ropes",
    dis: "Starting @199",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/107160/280/1/149847355-107160132-1590790597.jpg",
    name: "Yoga Mates",
    dis: "Upto 80% off",
  },
];

sports_and_health.map(function (data) {
  let main_div = document.createElement("div");
  main_div.setAttribute("id", "sportwidth");

  let img = document.createElement("img");
  img.src = data.img;

  let name = document.createElement("p");
  name.innerText = data.name;

  let dis = document.createElement("p");
  dis.innerText = data.dis;
  dis.setAttribute("id", "price_divplusp");
  main_div.append(img, name, dis);
  document.querySelector(".sports_and_health").append(main_div);
});
