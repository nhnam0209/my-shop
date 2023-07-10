import React from "react";
import SideBar from "./../../components/SideBar/SideBar";
import ProductCard from "./../../components/common/ProductCard/ProductCard";
import fish_test from "../../assets/img/betta_fish.jpg";
function ProductList() {
  const data = [
    {
      id: "1",
      name: "betta fish",
      price: "50.000 VND",
      category: "freshwater fish",
      img: fish_test,
      desc: "The Siamese fighting fish, commonly known as the betta, is a freshwater fish native to Southeast Asia, namely Cambodia, Laos, Myanmar, Malaysia, Indonesia, Thailand, and Vietnam",
    },
    {
      id: "2",
      name: "betta fish",
      price: "50.000 VND",
      category: "freshwater fish",
      img: fish_test,
      desc: "The Siamese fighting fish, commonly known as the betta, is a freshwater fish native to Southeast Asia, namely Cambodia, Laos, Myanmar, Malaysia, Indonesia, Thailand, and Vietnam",
    },
    {
      id: "3",
      name: "betta fish",
      price: "50.000 VND",
      category: "freshwater fish",
      img: fish_test,
      desc: "The Siamese fighting fish, commonly known as the betta, is a freshwater fish native to Southeast Asia, namely Cambodia, Laos, Myanmar, Malaysia, Indonesia, Thailand, and Vietnam",
    },
    {
      id: "4",
      name: "betta fish",
      price: "50.000 VND",
      category: "freshwater fish",
      img: fish_test,
      desc: "The Siamese fighting fish, commonly known as the betta, is a freshwater fish native to Southeast Asia, namely Cambodia, Laos, Myanmar, Malaysia, Indonesia, Thailand, and Vietnam",
    },
    {
      id: "5",
      name: "betta fish",
      price: "50.000 VND",
      category: "freshwater fish",
      img: fish_test,
      desc: "The Siamese fighting fish, commonly known as the betta, is a freshwater fish native to Southeast Asia, namely Cambodia, Laos, Myanmar, Malaysia, Indonesia, Thailand, and Vietnam",
    },
  ];

  const productItem = data.map((item) => {
    return <ProductCard key={item.id} props={{ item }} />;
  });

  return (
    <div className="relative h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-10 relative block border h-screen mx-4 w-full">
          <div className="m-4 flex flex-wrap">{productItem}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
