var daily_essential = [
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/105589/280/1/149278210-105589660-1585251645.jpg",
    name: "Coooking Essentials",
    p3: "Starting at Rs.49",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/105589/320/1/149278289-105589933-1585251885.jpg",
    name: "Skin, Hair & Body",
    p3: "Starting at Rs.99",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/104441/280/1/148788228-104441348-1578472379.jpg",
    name: "Kitchen Essentials",
    p3: "Starting at Rs.49",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/105520/280/1/149254102-105520442-1584863770.jpg",
    name: "Mask, Sanitizer  & More",
    p3: "Starting at Rs.49",
  },
  {
    img: "https://cdn.shopclues.com/images/thumbnails/42332/280/1/966030079473255231PUTPaCZnL146606056314665883171470319810.jpg",
    name: "Cleaning & Dusting Supplies",
    p3: "Starting at Rs.109",
  },
  {
    img: "https://cdn.shopclues.com/images1/thumbnails/105577/320/320/149274414-105577366-1585235325.jpg",
    name: "Laundry Detergents",
    p3: "Starting at Rs.49",
  },
];

daily_essential.map(function (data) {
  let main_div = document.createElement("div");
  main_div.setAttribute("id", "sportwidth");

  let img = document.createElement("img");
  img.src = data.img;

  let name = document.createElement("p");
  name.innerText = data.name;

  let dis = document.createElement("p");
  dis.innerText = data.p3;
  dis.setAttribute("id", "price_divplusp");
  main_div.append(img, name, dis);
  document.querySelector(".daily_essential").append(main_div);
});
