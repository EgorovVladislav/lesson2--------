import style from "./AsideCard.module.scss";
import sup from "../../assets/burger.png";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { useState } from "react";

export default function AsideCard({}) {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if (count < 1) {
      return;
    }
    setCount(count - 1);
  }
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <div className={style.container}>
      <div className={style.container_order}>
        <div className={style.order_content}>
          <img src={sup} alt="sup" />
          <div className={style.content_p}>
            <p>Супер сытный</p>
            <p className={style.gramm}>512г</p>
            <p>550₽</p>
          </div>
        </div>
        <div className={style.container_input}>
          <button onClick={decrease}>-</button>
          <span>{count}</span>
          <button onClick={increase}>+</button>
        </div>
      </div>
    </div>
  );
}
