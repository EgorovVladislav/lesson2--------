import img1 from "../assets/photo1.png";
import img2 from "../assets/photo2.png";
import img3 from "../assets/photo3.png";
import img4 from "../assets/photo4.png";
import img5 from "../assets/photo5.png";
import img6 from "../assets/photo6.png";

import snacks1 from "../assets/snacks1.png";
import snacks2 from "../assets/snacks2.png";
import snacks3 from "../assets/snacks3.png";

import hotDog1 from "../assets/hot-dog1.png";
import hotDog2 from "../assets/hot-dog2.png";
import hotDog3 from "../assets/hot-dog3.png";

const arrImg = {
  burgers: [img1, img2, img3, img4, img5, img6],
  snacks: [snacks1, snacks2, snacks3],
  hotDog: [hotDog1, hotDog2, hotDog3],
};

export default function addImgData(obj) {
  const { data, title } = obj;
  return data.map((item, index) => {
    item.images = arrImg[title][index];
    return item;
  });
}
