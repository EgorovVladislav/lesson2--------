import img1 from "../assets/burger.png";
import img2 from "../assets/snacks.png";
import img3 from "../assets/hotdog.png";
import img4 from "../assets/combo.png";
import img5 from "../assets/shawarma.png";
import img6 from "../assets/pizza.png";
import img7 from "../assets/wok.png";
import img8 from "../assets/dessert.png";
import img9 from "../assets/schus.png";

const arrImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function addNavData(data) {
  return data.map((item, index) => {
    item.images = arrImg[index];
    return item;
  });
}
