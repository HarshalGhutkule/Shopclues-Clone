var budget_bazaar = [
  {
    img: "https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_01.jpg",
  },
  {
    img: "https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_02.jpg",
  },
  {
    img: "https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_03.jpg",
  },
  {
    img: "https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_04.jpg",
  },
  {
    img: "https://cdn.shopclues.com/images/banners/PricePont_akb_1Oct21_W_05.jpg",
  },
];
budget_bazaar.map(function (data) {
  let main_div = document.createElement("div");
  main_div.setAttribute("id", "budget_div");

  let img = document.createElement("img");
  img.src = data.img;

  main_div.append(img);
  document.querySelector(".budget_bazaar").append(main_div);
});
