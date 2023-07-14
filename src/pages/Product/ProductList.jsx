import React, { useContext } from "react";
import SideBar from "./../../components/SideBar/SideBar";
import ProductCard from "./../../components/common/ProductCard/ProductCard";
import fish_test from "../../assets/img/betta_fish.jpg";
import { WidthContext } from "../../contexts";

function ProductList() {
  const width = useContext(WidthContext);

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
    <div className="relative  h-full">
      <div className="grid lg:grid-cols-12 grid-cols-1">
        {width < 1024 ? (
          ""
        ) : (
          <div className="lg:col-span-2 border">
            <SideBar />
          </div>
        )}
        <div className="lg:col-span-10 border relative block h-full lg:mx-4 w-full">
          <div className="lg:m-4 flex flex-wrap justify-center lg:justify-start w-full">
            {productItem}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
