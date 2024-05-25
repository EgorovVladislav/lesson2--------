import Aside from "./Components/Aside/Aside";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import style from "./style/App.module.scss";
import addImgData from "./common/addDataImage";
import { useState } from "react";
import Modal from "./Components/Modal/Modal";
import burgers from "./data/burgers.json";
import snacks from "./data/snacks.json";
import hotDog from "./data/hot-dog.json";

const arrProducts = [
  { title: "burgers", data: burgers },
  { title: "snacks", data: snacks },
  { title: "hotDog", data: hotDog },
];
export default function App() {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [activeItemModal, setActiveItemModal] = useState(false);
  const [products, setProducts] = useState(
    addImgData(arrProducts[activeNavIndex])
  );

  function editNavIndex(index) {
    setActiveNavIndex(index);
    setProducts(addImgData(arrProducts[index]));
  }

  function getDataActiveModal(id) {
    setActiveItemModal(products.find((item) => item.id === id));
  }

  return (
    <div className={style.container}>
      {activeItemModal && <Modal activeItemModal={activeItemModal} setActiveItemModal={setActiveItemModal} />}
      <Header />
      <Nav editNavIndex={editNavIndex} />
      <div className={style.wrapper_content}>
        <Aside />
        <Main getDataActiveModal={getDataActiveModal} products={products} />
      </div>
      <Footer />
    </div>
  );
}
