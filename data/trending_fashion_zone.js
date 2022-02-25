var trending_fashion_zone_data = [
  {
    img: "https://cdn.shopclues.com/images/thumbnails/78529/200/200/123783677womensvnecksleevelesschiffonpromdress1500360679.jpg",
    name: "Westchic Plain Black Georg...",
    p1: "900",
    p2: "1299",
    p3: "437",
    dis: "66% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/95098/200/200/142654363-95098986-1543836693.jpg",
    name: "Fashlook Brown Leatherite...",
    p1: "189",
    p2: "1789",
    p3: "161",
    dis: "91% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/104223/200/200/148695190-104223920-1598444855.jpg",
    name: "PAUSE Blue  Solid Lapel Coll...",
    p1: "379",
    p2: "1299",
    p3: "342",
    dis: "73% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/107255/200/200/149878229-107255354-1634817960.jpg",
    name: "29K Men Black Casual Strip...",
    p1: "309",
    p2: "999",
    p3: "288",
    dis: "71% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/104223/200/200/148695185-104223914-1603182895.jpg",
    name: "Pause Men Silver Cotton La...",
    p1: "279",
    p2: "1299",
    p3: "278",
    dis: "78% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/103492/200/200/148176235-103492898-1572160253.jpg",
    name: "Men Soft Bi-fold Tan Color...",
    p1: "449",
    p2: "3999",
    p3: "427",
    dis: "89% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/107255/200/200/149878229-107255354-1634817960.jpg",
    name: "29K Men Black Casual Strip...",
    p1: "309",
    p2: "999",
    p3: "288",
    dis: "71% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/104223/200/200/148695185-104223914-1603182895.jpg",
    name: "Pause Men Silver Cotton La...",
    p1: "279",
    p2: "1299",
    p3: "278",
    dis: "78% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/103492/200/200/148176235-103492898-1572160253.jpg",
    name: "Men Soft Bi-fold Tan Color...",
    p1: "449",
    p2: "3999",
    p3: "427",
    dis: "89% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/110871/200/200/151047473-110871442-1601973238.jpg",
    name: "Wrstchic Women Maroon P..",
    p1: "",
    p2: "999",
    p3: "399",
    dis: "60% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/105344/200/200/149172710-105344978-1583307035.jpg",
    name: "Trendyz Men Black Cotton H...",
    p1: "449",
    p2: "899",
    p3: "475",
    dis: "47% off",
  },
];

trending_fashion_zone_data.map(function (data) {
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
  document.querySelector(".trending_fashion_zone").append(main_div);
});
