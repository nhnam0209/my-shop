// import React, { useState } from "react";
import React from "react";

import { Card } from "antd";
import { ShoppingCartOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/cartRedux";

function ProductCard({ props }) {
  const { Meta } = Card;
  // const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const linkToDetail = props.item.id;
  const dispatch = useDispatch();

  return (
    <div className="m-2">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="img" loading="lazy" src={props.item.img} />}
        actions={[
          <InfoCircleOutlined
            onClick={() => {
              navigate(linkToDetail);
            }}
          />,
          <ShoppingCartOutlined
            key="add_to_cart"
            onClick={() => {
              console.log("Add to cart");
              dispatch(addProduct({ ...props.item }));
            }}
          />,
        ]}
        onTabChange={() => {
          navigate({ linkToDetail });
        }}
      >
        <Meta title={props.item.name} description={props.item.price} />
        <Meta description={props.item.description} />
      </Card>
    </div>
  );
}

export default ProductCard;
