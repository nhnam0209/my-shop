import React from "react";
import { Card } from "antd";
import { EllipsisOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function ProductCard({ props }) {
  const { Meta } = Card;
  return (
    <div className="m-2">
      <Link to={props.item.id}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="img" loading="lazy" src={props.item.img} />}
          actions={[
            <ShoppingCartOutlined key="add_to_cart" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta title={props.item.name} description={props.item.price} />
          <Meta description={props.item.description} />
        </Card>
      </Link>
    </div>
  );
}

export default ProductCard;
