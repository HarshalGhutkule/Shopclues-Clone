var festive_essential = [
  {
    img: "https://cdn.shopclues.com/images/thumbnails/88912/320/320/131487154GOLDENPEACOCK1512550255.jpg",
    name: "Women's Ethinic Wear",
    p3: "Upto 80% off",
  },
  {
    img: "https://cdn.shopclues.com/images/detailed/41945/HandloomPinkKurta1_1469600960.jpg",
    name: "Men's Ethnic Waer",
    p3: "Min 40% off",
  },
  {
    img: "https://cdn.shopclues.com/images/detailed/85345/129033198_Untitled1copy_1506507048.jpg",
    name: "Ethnic Footwaer",
    p3: "Upto 80% off",
  },
  {
    img: "https://cdn.shopclues.com/images/thumbnails/48680/320/320/61SUwF0UAAL1480795166.jpg",
    name: "Wooden Temples",
    p3: "Upto 60% off",
  },
  {
    img: "https://cdn.shopclues.com/images/thumbnails/67262/320/320/IMAES9GDZV3NPG8M1491081901.jpg",
    name: "Pooja Essentials",
    p3: "Upto 70% off",
  },
  {
    img: "https://cdn.shopclues.com/images/thumbnails/84338/320/320/128352190Ganesh1505896312.jpg",
    name: "Wall Decors",
    p3: "Min 60% off",
  },
];

festive_essential.map(function (data) {
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
  p3.textContent = data.p3;
  p3.setAttribute("class", "marleft");

  price_div.append(p1, p2, p3);
  price_div.setAttribute("class", "price_div");

  let dis = document.createElement("p");
  dis.innerText = data.dis;
  main_div.append(img, name, price_div);
  document.querySelector(".festive_essential").append(main_div);
});
