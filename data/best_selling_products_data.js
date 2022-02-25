var bestseling_product = [
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/97673/160/160/144264990-97673863-1552293470.jpg",
    name: "Refurbished Nokia 1100/G...",
    p3: "969",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/108304/160/160/150274047-108304383-1598424782.jpg",
    name: "I Kall K18 New 2.4 inch Disp...",
    p3: "999",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/112439/160/160/151644357-112439509-1608043117.jpg",
    name: "Refurbished Iphone 5S 1G...",
    p3: "6999",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/114072/160/160/151368684-114072791-1621067507.jpg",
    name: "Refurbished Iphone 4S 16G...",
    p3: "4199",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/108304/160/160/150274090-108304486-1594015695.jpg",
    name: "I Kall New 2.8 inch Di...",
    p3: "1099",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/100740/160/160/146388171-100740822-1598963228.jpg",
    name: "Refurbished Nokia 1600 Bla...",
    p3: "999",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/104955/160/160/148961798-104955503-1581584855.jpg",
    name: "Refurbished Nokia 2200 Mo...",
    p3: "1309",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/95267/160/160/142782625-95267466-1544373387.jpg",
    name: "Refurbished Nokia C5-03(6...",
    p3: "1599",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/112439/160/160/151644360-112439517-1608043134.jpg",
    name: "Refurbished Iphone 5S 1G...",
    p3: "6999",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/114072/160/160/151368684-114072791-1621067507.jpg",
    name: "Refurbished Iphone 4S 16G...",
    p3: "4199",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/108304/160/160/150274090-108304486-1594015695.jpg",
    name: "I Kall New 2.8 inch Di...",
    p3: "1099",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/100740/160/160/146388171-100740822-1598963228.jpg",
    name: "Refurbished Nokia 1600 Bla...",
    p3: "999",
  },
];

bestseling_product.map(function (data) {
  let main_div = document.createElement("div");

  let img = document.createElement("img");
  img.src = data.img;

  let name = document.createElement("p");
  name.innerText = data.name;

  let price_div = document.createElement("div");

  let p1 = document.createElement("p");
  p1.textContent = data.p1;

  let p2 = document.createElement("p");
  p2.textContent = data.p2;

  let p3 = document.createElement("p");
  p3.textContent = `₹${data.p3}`;
  p3.setAttribute("id", "bestsell");

  price_div.append(p1, p2, p3);
  price_div.setAttribute("class", "price_div");

  main_div.append(img, name, price_div);
  document.querySelector(".best_selling_products").append(main_div);
});

document.getElementById("clicktogo").addEventListener("click",()=>{
  window.location.href = "ProductListPage.html";
})