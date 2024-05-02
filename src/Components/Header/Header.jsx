import style from "./Header.module.scss";
import Button from "../Button/Button";
import logo from "../../assets/logo.png";
import logoBurger from "../../assets/logoBurger.png";

export default function Header(props) {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.wrapper__logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.wrapper__content}>
          <div className={style.content__logo}>
            <img src={logoBurger} alt="lB" />
          </div>
          <div className={style.content__text}>
            <h1>
              Только самые <span>сочные бургеры!</span>
            </h1>
            <p>Бесплатная доставка от 599₽</p>
            <div className={style.wrapperBtn}>
              <Button
                content="Добавить"
                color="#F2F2F3"
                colorText="black"
                width="156px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
