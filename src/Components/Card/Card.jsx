import style from "./Card.module.scss";
import Button from "../Button/Button";
import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Card({
  images,
  title,
  price,
  gramm,
  id,
  getDataActiveModal,
}) {
  const [isModalOpen, setIsOpenModal] = useState(false);
  const handleAddToCart = () => {
    console.log([title]);
  };
  const openModal = () => {
    setIsOpenModal(true);
    getDataActiveModal(id);
  };

  return (
    <div onClick={openModal} className={style.containerCard}>
      <div className={style.wrapperImages}>
        <img src={images} alt="pict" />
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{gramm}</p>
        <div className={style.wrapperBtn} onClick={(e) => e.stopPropagation()}>
          <Button
            content="Добавить"
            color="#F2F2F3"
            colorText="black"
            width="276px"
            onClick={handleAddToCart}
          />
        </div>
        {/* {isModalOpen && (
          <Modal
            obj={{ images, title, price, gramm }}
            closeModal={() => setIsOpenModal(false)}
          />
        )} */}
      </div>
    </div>
  );
}
