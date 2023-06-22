import React from "react";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import plant_1 from "../../../assets/img/highlight/plant_1.jpg";
import plant_2 from "../../../assets/img/highlight/plant_2.jpg";
import aquarium_1 from "../../../assets/img/highlight/aquarium_1.jpg";
import "./Highlight.scss";

function Highlight() {
  const navigate = useNavigate();
  const carouselItems = [
    {
      id: 1,
      title: "For The True Plant And Aquarium Lovers",
      subtitle:
        "Transform Your Home into a Lush Oasis: Shop Our Collection for Plant and Aquarium Enthusiasts",
      backgroundImage: plant_1,
    },
    {
      id: 2,
      title: "Quality Plant Care & Accessories",
      subtitle:
        "Nurture Your Greenery with Top-Quality Plant Care and Accessories from Our Shop",
      backgroundImage: plant_2,
      textColor: "white",
    },
    {
      id: 3,
      title: "Benefit Of Indoor Plant And Aquarium",
      subtitle:
        "Bringing Nature Indoors: Discover the Benefits of Plants and Aquariums in Your Home or Office",
      backgroundImage: aquarium_1,
      textColor: "white",
      textShadow: " -1px 1px 0 #000",
    },
  ];

  const carouselItem = carouselItems.map((item) => {
    return (
      <div key={item.id}>
        <div
          style={{
            backgroundImage: `url(${item.backgroundImage})`,
            backgroundSize: "cover",
            color: `${item.textColor}`,
            textShadow: `${item.textShadow}`,
          }}
          className="h-[544px] highlight_container"
        >
          <div className="flex h-full">
            <div className="flex-col w-2/4 self-center text-left ml-6 ">
              <h1 className="font-bold text-5xl">{item.title}</h1>
              <p className="text-md mt-2">{item.subtitle}</p>
              <button
                className="py-3 px-5 text-white font-bold bg-primary rounded-md mt-5 hover:bg-secondary"
                onClick={() => {
                  navigate("/shop");
                }}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <Carousel autoplay effect="fade" dotPosition="right">
        {carouselItem}
      </Carousel>
    </>
  );
}

export default Highlight;
