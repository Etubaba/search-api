import { ProductComponentProps } from "@/interface";
import Image from "next/image";
import React from "react";
// import coke from "../public/coke.png";

const ProductComponent: React.FC<ProductComponentProps> = ({ product }) => {
  const { imageUrl, name, brand, price } = product;
  return (
    <div className="product">
      <div className="img">
        <Image
          style={{ objectFit: "contain" }}
          width={60}
          height={70}
          sizes="(max-height: 98px)"
          src={imageUrl}
          alt="product"
          priority
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", height: "80px" }}>
        <p className="product_name">{name.substring(0, 18)}</p>

        <p className="product_brand">{brand}</p>

        <p className="product_price">${price}</p>
      </div>
    </div>
  );
};

export default ProductComponent;
