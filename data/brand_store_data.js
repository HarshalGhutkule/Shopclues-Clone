var brand_store = [
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/104122/280/1/148627878-104122294-1577180435.jpg",
    name: "Khadi",
    dis: "Starting @69",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/104461/280/1/148797859-104461120-1578647077.jpg",
    name: "Nike",
    dis: "Upto 85% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/109822/280/1/150760050-109822495-1600850631.jpg",
    name: "Redmi",
    dis: "Save Upto Rs. 5000",
  },
  {
    img: "https://cdn.shopclues.com/images/thumbnails/34620/280/1/902417708981309282209372miltonwaterbottleset1434449243144186494711454507692145672090914577949341459228900.jpg",
    name: "Milton",
    dis: "Upto 60% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/108976/320/1/150501198-108976885-1596612884.jpg",
    name: "Fastrack",
    dis: "Mini 40% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/109013/280/1/150523151-109013699-1603186269.jpg",
    name: "Realme",
    dis: "Save Upto Rs. 5000",
  },
  {
    img: "https://cdn.shopclues.com/images/thumbnails/34620/280/1/902417708981309282209372miltonwaterbottleset1434449243144186494711454507692145672090914577949341459228900.jpg",
    name: "Milton",
    dis: "Upto 60% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/108976/320/1/150501198-108976885-1596612884.jpg",
    name: "Fastrack",
    dis: "Mini 40% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/109013/280/1/150523151-109013699-1603186269.jpg",
    name: "Realme",
    dis: "Save Upto Rs. 5000",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/109124/280/1/150563834-109124498-1600113360.jpg",
    name: "Vivo",
    dis: "Save Upto Rs. 5000",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/108804/280/1/150437204-108804736-1602946705.jpg",
    name: "Philips",
    dis: "Upto 40% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/108327/320/1/150284086-108327730-1594283471.jpg",
    name: "American Tourister",
    dis: "Upto 75% off",
  },
];

brand_store.map(function (data) {
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
  document.querySelector(".brand_store").append(main_div);
});
