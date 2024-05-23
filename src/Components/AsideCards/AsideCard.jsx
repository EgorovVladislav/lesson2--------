import style from "./AsideCard.module.scss";
import sup from "../../assets/burger.png";

export default function AsideCard({}) {
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
          <button>-</button>
          <span>{0}</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}
