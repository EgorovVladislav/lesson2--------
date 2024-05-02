import style from "./Footer.module.scss";
import logo from "../../assets/logoFooter.png";
import phone from "../../assets/phone.png";
import vk from "../../assets/vk.png";
import tg from "../../assets/tg.png";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info}>
          <img src={logo} alt="logo" />
          <p>©YouMeal, 2022</p>
          <p>Design: Anastasia IIina</p>
        </div>
        <div className={style.number}>
          <p className={style.num}>Номер для заказа</p>
          <p>
            <img src={phone} alt="ph" />
            +7(930)833-38-11
          </p>
        </div>
        <div className={style.networks}>
          <p>Мы в соцсетях</p>
          <a href="#">
            <img src={vk} alt="vk" />
          </a>
          <a href="#">
            <img src={tg} alt="tg" />
          </a>
        </div>
      </div>
    </div>
  );
}
