import style from "./Aside.module.scss";
import Cards from "../AsideCards/AsideCard";
import Button from "../Button/Button";

export default function Aside() {
  return (
    <div className={style.container}>
      <div className={style.container_basket}>
        <h2>Корзина</h2>
        <input type="text" value={0} disabled />
      </div>
      <div className={style.cards}>
        <Cards />
      </div>

      <div className={style.total}>
        <div className={style.totalPrice}>
          {" "}
          <p>Итого</p>
          <input type="text" disabled value="0₽" />
        </div>

        <Button
          content="Добавить заказ"
          color="#FF7020"
          colorText="white"
          width="100%"
        />
        <p>Бесплатная доставка</p>
      </div>
    </div>
  );
}
