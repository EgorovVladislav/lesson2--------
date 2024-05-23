import Button from "../Button/Button";
import st from "./Modul.module.scss";

export default function ({ obj, closeModal }) {
  const handleCloseModal = () => {
    closeModal();
  };
  const { title, price, gramm, images } = obj;
  return (
    <div className={st.wrapper_modal}>
      <div className={st.modal}>
        <div className={st.title_close}>
          <h1>{title}</h1>
          <button
            className={st.close}
            onClick={(e) => {
              e.stopPropagation();
              handleCloseModal();
            }}
          ></button>
        </div>
        <div className={st.content}>
          <img src={images} alt="img" />
          <div className={st.description}>
            <p> Цена: {obj.price}</p>
            <p>Вес: {gramm}</p>
          </div>
        </div>
        <Button
          content="Добавить"
          color="#FF7020"
          colorText="black"
          width="276px"
        />
      </div>
    </div>
  );
}
