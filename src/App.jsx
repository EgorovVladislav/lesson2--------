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

const arrProducts = [burgers, snacks, hotDog];

export default function App() {
  // const [cart, setCart] = useState(AddAside)
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [activeItemModal, setActiveItemModal] = useState(null);
  const [products, setProducts] = useState([
    addImgData(arrProducts[activeNavIndex]),
  ]);

  function editNavIndex(index) {
    setActiveNavIndex(index);
    setProducts(addImgData(arrProducts[index]));
  }
  function getDataActiveModal(id) {
    setActiveItemModal(products.find((item) => item.id === id));
  }
  return (
    <div className={style.container}>
      {activeItemModal && <Modal obj={activeItemModal} />}
      <Header />
      <Nav editNavIndex={editNavIndex} />
      <div className={style.wrapper_content}>
        <Aside />
        <Main getDataActiveModal={getDataActiveModal} />
      </div>
      <Footer />
    </div>
  );
}
