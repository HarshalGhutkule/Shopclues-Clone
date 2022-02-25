var branded_deal = [
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/102732/200/200/147786464-102732679-1568202982.jpg",
    name: "Eja Art Love Bird Vinyl Wall...",
    p1: "219",
    p2: "1199",
    p3: "190",
    dis: "84% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/115792/200/200/152872993-115792044-1639566707.jpg",
    name: "CULQ IK-44 Power 2600mA...",
    p1: "139",
    p2: "599",
    p3: "133",
    dis: "77% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/111797/200/200/151327576-111797365-1603895509.jpg",
    name: "Nike Men Tanjun Sports Sho...",
    p1: "913",
    p2: "4795",
    p3: "892",
    dis: "81% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/95122/200/200/142672483-95122315-1615809654.jpg",
    name: "Vizo Wireless Magnetic Blue...",
    p1: "209",
    p2: "999",
    p3: "180",
    dis: "81% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/84855/200/200/137076261-84855545-1597052006.jpg",
    name: "SaraHusainatther 7 Pieces S...",
    p1: "299",
    p2: "999",
    p3: "266",
    dis: "73% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/74865/200/200/131046271-74865163-1552367251.jpg",
    name: "MTR MT312 Dual Sim Featu...",
    p1: "749",
    p2: "2999",
    p3: "693",
    dis: "33% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/74865/200/200/131046271-74865163-1552367251.jpg",
    name: "MTR MT312 Dual Sim Featu...",
    p1: "749",
    p2: "2999",
    p3: "693",
    dis: "32% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/115440/200/200/152761666-115440346-1633506453.jpg",
    name: "JA DALLAS Men Black Solid...",
    p1: "359",
    p2: "845",
    p3: "323",
    dis: "61% off",
  },
  {
    img: "https://cdn.shopclues.com/images/thumbnails/79723/200/200/124615653NewNike1502005958.jpg",
    name: "Nike Multicolour Cotton Ank...",
    p1: "99",
    p2: "499",
    p3: "98",
    dis: "90% off",
  },
  {
    img: "https://cdn.shopclues.com/images/thumbnails/89591/200/200/104016383GlovesLeatherdriving214829084631513685612.jpg",
    name: "Takson Wet & Dry Black Lea...",
    p1: "129",
    p2: "499",
    p3: "128",
    dis: "74% off",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/112228/200/200/151575367-112228841-1607752435.jpg",
    name: "Fashlook Men Black BalKala...",
    p1: "299",
    p2: "999",
    p3: "266",
    dis: "73% off",
  }
];

branded_deal.map(function (data) {
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
  document.querySelector(".branded_deals").append(main_div);
});
