import style from "./Card.module.scss";
import Button from "../Button/Button";
import { useState } from "react";

export default function Card({ title, price, gramm, images }) {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {
    console.log(title);
  };

  return (
    <div className={style.containerCard}>
      <div className={style.wrapperImages}>
        <img src={images} alt="pict" />
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{gramm}</p>
        <div className={style.wrapperBtn}>
          <Button
            content="Добавить"
            color="#F2F2F3"
            colorText="black"
            width="276px"
            onClick={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}
